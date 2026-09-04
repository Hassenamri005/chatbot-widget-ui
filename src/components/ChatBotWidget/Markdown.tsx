import React from "react";

/**
 * Small, dependency-free Markdown renderer for chat bubbles.
 *
 * Bot APIs commonly reply with Markdown (headings, tables, lists, code
 * blocks, bold/italic, links). This covers the subset that shows up in
 * everyday chat responses without pulling in a full CommonMark parser.
 * Output is plain semantic tags (h1-h6, table, ul/ol, pre/code, blockquote,
 * hr, p) so they can be styled the same way whether they come from here or
 * from a consumer's own Markdown-to-HTML conversion used with
 * `useInnerHTML` (see the demo app's markdown.ts for that path).
 */

let keySeed = 0;
const nextKey = () => `md-${keySeed++}`;

// ---- Inline formatting (bold, italic, code, links) ----------------------

const INLINE_PATTERN =
  /(`[^`]+`)|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*]+\*)|(_[^_]+_)|(\[[^\]]+\]\([^)\s]+\))/;

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    const match = INLINE_PATTERN.exec(remaining);
    if (!match) {
      nodes.push(remaining);
      break;
    }

    const index = match.index;
    if (index > 0) {
      nodes.push(remaining.slice(0, index));
    }

    const token = match[0];
    if (token.startsWith("`")) {
      nodes.push(<code key={nextKey()}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith("**") || token.startsWith("__")) {
      nodes.push(<strong key={nextKey()}>{renderInline(token.slice(2, -2))}</strong>);
    } else if (token.startsWith("[")) {
      const linkMatch = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(token);
      if (linkMatch) {
        nodes.push(
          <a
            key={nextKey()}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderInline(linkMatch[1])}
          </a>
        );
      } else {
        nodes.push(token);
      }
    } else {
      nodes.push(<em key={nextKey()}>{renderInline(token.slice(1, -1))}</em>);
    }

    remaining = remaining.slice(index + token.length);
  }

  return nodes;
}

// ---- Block-level parsing --------------------------------------------------

const HEADING_RE = /^(#{1,6})\s+(.+?)\s*#*$/;
const UL_RE = /^\s*[-*+]\s+(.+)$/;
const OL_RE = /^\s*\d+[.)]\s+(.+)$/;
const HR_RE = /^\s*([-*_])\s*(?:\1\s*){2,}$/;
const TABLE_SEP_RE = /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/;
const HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

function splitTableRow(row: string): string[] {
  let trimmed = row.trim();
  if (trimmed.startsWith("|")) trimmed = trimmed.slice(1);
  if (trimmed.endsWith("|")) trimmed = trimmed.slice(0, -1);
  // Split on unescaped pipes.
  return trimmed.split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, "|"));
}

function isTableSeparator(line: string): boolean {
  return TABLE_SEP_RE.test(line.trim()) && line.includes("-");
}

function renderBlocks(lines: string[]): React.ReactNode[] {
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // Fenced code block.
    if (line.trim().startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push(
        <pre key={nextKey()}>
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // Table: a row followed by a separator row.
    if (
      line.includes("|") &&
      i + 1 < lines.length &&
      isTableSeparator(lines[i + 1])
    ) {
      const headerCells = splitTableRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim() !== "" && lines[i].includes("|")) {
        rows.push(splitTableRow(lines[i]));
        i++;
      }
      blocks.push(
        <table key={nextKey()}>
          <thead>
            <tr>
              {headerCells.map((cell) => (
                <th key={nextKey()}>{renderInline(cell)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={nextKey()}>
                {row.map((cell) => (
                  <td key={nextKey()}>{renderInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      continue;
    }

    // Heading.
    const headingMatch = HEADING_RE.exec(line);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const Tag = HEADING_TAGS[level - 1];
      blocks.push(<Tag key={nextKey()}>{renderInline(headingMatch[2])}</Tag>);
      i++;
      continue;
    }

    // Horizontal rule.
    if (HR_RE.test(line)) {
      blocks.push(<hr key={nextKey()} />);
      i++;
      continue;
    }

    // Blockquote.
    if (line.trim().startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(<blockquote key={nextKey()}>{renderBlocks(quoteLines)}</blockquote>);
      continue;
    }

    // Unordered list.
    if (UL_RE.test(line)) {
      const items: string[] = [];
      while (i < lines.length && UL_RE.test(lines[i])) {
        items.push(UL_RE.exec(lines[i])![1]);
        i++;
      }
      blocks.push(
        <ul key={nextKey()}>
          {items.map((item) => (
            <li key={nextKey()}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list.
    if (OL_RE.test(line)) {
      const items: string[] = [];
      while (i < lines.length && OL_RE.test(lines[i])) {
        items.push(OL_RE.exec(lines[i])![1]);
        i++;
      }
      blocks.push(
        <ol key={nextKey()}>
          {items.map((item) => (
            <li key={nextKey()}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph: consume until a blank line or a line that starts a new block.
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !HEADING_RE.test(lines[i]) &&
      !UL_RE.test(lines[i]) &&
      !OL_RE.test(lines[i]) &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("```") &&
      !(lines[i].includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1]))
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={nextKey()}>
        {paraLines.map((paraLine, idx) => (
          <React.Fragment key={nextKey()}>
            {idx > 0 && <br />}
            {renderInline(paraLine)}
          </React.Fragment>
        ))}
      </p>
    );
  }

  return blocks;
}

export function Markdown({ text }: { text: string }): React.ReactElement {
  const lines = text.split("\n");
  return <>{renderBlocks(lines)}</>;
}
