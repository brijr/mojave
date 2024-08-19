import Image from "next/image";
import Link from "next/link";
import portfolioRegistry from "@/lib/registry";
import { PortfolioItem } from "@/lib/registry";
import { Link2Icon } from "@radix-ui/react-icons";

export function Portfolio() {
  return (
    <div className="grid md:grid-cols-3 gap-4 not-prose">
      {portfolioRegistry.items.map((item, index) => (
        <PortfolioImage
          key={item.id}
          item={item}
          delay={index === 0 ? 500 : 500 + 150 * index}
        />
      ))}
    </div>
  );
}

const PortfolioImage = ({
  item,
  delay,
}: {
  item: PortfolioItem;
  delay?: number;
}) => {
  return (
    <div style={{ animationDelay: `${delay}ms` }} className="fade-in-bottom">
      <Image
        src={item.url}
        alt={item.name}
        width={1080}
        height={1080}
        className="border rounded"
        placeholder="blur"
        blurDataURL={item.url}
      />
      <div className="flex gap-2 mt-2 items-center justify-between">
        <p className="text-sm">{item.name}</p>
        <Link href={item.url}>
          <Link2Icon />
          <span className="sr-only">Link to {item.name}</span>
        </Link>
      </div>
    </div>
  );
};
