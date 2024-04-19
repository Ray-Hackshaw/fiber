import classNames from "classnames";
import { ExampleProps, Tag } from "../utils/types";
import Image from "next/image";

export const Card = ({
  image,
  title,
  description,
  href,
  tags,
  colSpan,
}: ExampleProps) => {
  return (
    <div>
      <Image className="object-contain" fill alt="my image" src={image} />
    </div>
  );
};
