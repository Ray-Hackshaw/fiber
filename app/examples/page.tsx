import { Card } from "@/src/components/Card";
import { ExampleProps } from "@/src/utils/types";
import classNames from "classnames";
import { NextPage } from "next";
import Image from "next/image";

export const cards: ExampleProps[] = [
  {
    image: "https://bit.ly/placeholder-img",
    title: "Scroll",
    href: "/examples/scroll",
    tags: [{ label: "3D", href: "/examples?search=3d" }],
    colSpan: 3,
  },
  {
    image: "https://bit.ly/placeholder-img",
    title: "Cursor",
    href: "/examples/cursor",
    tags: [{ label: "3D", href: "/examples?search=3d" }],
    colSpan: 1,
  },
  {
    image: "https://bit.ly/placeholder-img",
    title: "Depth of field",
    href: "/examples/depth",

    tags: [{ label: "3D", href: "/examples?search=3d" }],
    colSpan: 1,
  },
  {
    image: "https://bit.ly/placeholder-img",
    title: "Shape rendering",
    href: "/examples/shapes",
    tags: [{ label: "3D", href: "/examples?search=3d" }],
    colSpan: 1,
  },
  {
    image: "https://bit.ly/placeholder-img",
    title: "Carousel",
    href: "/examples/carousel",
    tags: [{ label: "3D", href: "/examples?search=3d" }],
    colSpan: 2,
  },
];

const ExamplesLanding: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl">
        Component example library using React Three Fiber (Three.js).
      </h1>

      <div className="grid grid-cols-3 max-w-7xl w-full mx-auto gap-4">
        {cards.map((card) => (
          <div
            key={card.href}
            className={classNames(
              card.colSpan === 1 && "col-span-1",
              card.colSpan === 2 && "col-span-2",
              card.colSpan === 3 && "col-span-3",
              "relative h-[300px] w-full"
            )}
          >
            <Image
              className="object-cover"
              fill
              alt="my image"
              src={card.image}
            />
            <div>{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesLanding;
