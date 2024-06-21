"use client";

import Link from "next/link";
import { cards } from "./page";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const ExamplesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  console.log(pathname.includes("scroll"));

  return (
    <section className="min-h-screen flex p-4">
      <div className="space-y-4 w-full max-w-md border-r shadow-sm">
        <h1>
          <Link className="text-xl text-white" href="/examples">
            R3F - Component Library
          </Link>
        </h1>
        <div className="space-y-2 indent-2">
          {cards.map((x) => (
            <div key={x.href}>
              <Link
                href={x.href}
                className={classNames(
                  pathname.includes(x.title.toLowerCase()) && "opacity-100",
                  "text-white opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out"
                )}
              >
                {pathname.includes(x.title.toLowerCase()) && "-"} {x.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-4 pl-2">
        <div className="w-full flex gap-4 justify-between items-center">
          <div className="w-2/3 border px-2 py-1 rounded-md cursor-pointer opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out">
            Search for something...
          </div>
        </div>
        <div className="h-[90%]">{children}</div>
      </div>
    </section>
  );
};

export default ExamplesLayout;
