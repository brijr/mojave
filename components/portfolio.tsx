import Image from "next/image";
import Link from "next/link";
import portfolioRegistry from "@/lib/registry";

export function Portfolio() {
  return (
    <div className="grid md:grid-cols-3 gap-4 not-prose">
      {portfolioRegistry.items.map((item) => (
        <Link href={item.url} key={item.id}>
          <Image
            src={item.url}
            alt={item.name}
            width={1080}
            height={1080}
            className="border"
            placeholder="blur"
            blurDataURL={item.url}
          />
          <span className="text-sm">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
