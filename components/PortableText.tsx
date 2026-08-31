import { PortableText, PortableTextBlock } from "next-sanity";
import { cn } from "@/lib/utils";

type PortableTextProps = {
  value: PortableTextBlock[];
  className?: string;
  firstLetterSpecial?: boolean;
};

const PortableTextComponent = ({
  value,
  className,
  firstLetterSpecial = true,
}: PortableTextProps) => {
  return (
    <PortableText
      value={value}
      components={{
        block: ({ children, index }) => {
          const isLast = index === value.length - 1;

          return (
            <p
              className={cn(
                `text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto ${
                  index === 0 && firstLetterSpecial
                    ? "first-letter-special"
                    : ""
                }
                      ${isLast ? "mb-0" : "mb-6"}
                    `,
                className,
              )}
            >
              {children}
            </p>
          );
        },
      }}
    />
  );
};

export default PortableTextComponent;
