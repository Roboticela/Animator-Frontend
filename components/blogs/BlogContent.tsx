import type { ReactNode } from 'react';

function isUrl(part: string): boolean {
  return (
    part.startsWith('http://') ||
    part.startsWith('https://') ||
    part.includes('animator.roboticela.com')
  );
}

function linkifyText(text: string): ReactNode[] {
  const urlPattern = /(https?:\/\/[^\s]+|(?:app\.)?animator\.roboticela\.com[^\s]*)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (isUrl(part)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function parseInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {linkifyText(part.slice(2, -2))}
        </strong>
      );
    }
    return <span key={index}>{linkifyText(part)}</span>;
  });
}

function isListBlock(block: string): boolean {
  const lines = block.trim().split('\n');
  return lines.length > 0 && lines.every((line) => line.trim().startsWith('- '));
}

function renderBlock(block: string, index: number): ReactNode {
  const trimmed = block.trim();

  if (trimmed.startsWith('### ')) {
    return (
      <h3 key={index} className="text-xl md:text-2xl font-bold text-foreground pt-4">
        {parseInline(trimmed.slice(4))}
      </h3>
    );
  }

  if (isListBlock(trimmed)) {
    return (
      <ul key={index} className="list-disc list-outside pl-6 space-y-2">
        {trimmed.split('\n').map((line, lineIndex) => (
          <li key={lineIndex}>{parseInline(line.trim().slice(2))}</li>
        ))}
      </ul>
    );
  }

  return <p key={index}>{parseInline(trimmed)}</p>;
}

export default function BlogContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-5 text-foreground/85 leading-relaxed text-base md:text-lg">
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
