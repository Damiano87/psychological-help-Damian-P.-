import { PortableTextBlock } from "next-sanity";

export function getPlainTextExcerpt(
  blocks: PortableTextBlock[],
  maxLength: number,
): string {
  const plainText = blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) return "";
      return block.children.map((child) => child.text).join("");
    })
    .join(" ");

  if (plainText.length <= maxLength) return plainText;

  const trimmed = plainText.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(" ");

  return (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed) + "…";
}
