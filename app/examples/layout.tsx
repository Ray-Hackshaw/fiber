import Link from "next/link";
import { cards } from "./page";

const ExamplesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="h-screen flex p-4">
      <div className="space-y-4 w-full max-w-md ">
        <h1>
          <Link className="text-xl text-white" href="/examples">
            React Three Fiber - Component Library
          </Link>
        </h1>
        <div className="space-y-2 indent-2">
          {cards.map((x) => (
            <div key={x.href}>
              <Link
                href={x.href}
                className="text-white opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out"
              >
                {x.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-4">
        <div className="w-full flex gap-4 justify-between items-center">
          <div className="w-2/3 border px-2 py-1 rounded-md cursor-pointer opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out">
            Search for something...
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </section>
  );
};

export default ExamplesLayout;
