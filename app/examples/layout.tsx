interface Example {
  label: string;
  href: string;
  children?: Example[];
}

const examples: Example[] = [
  {
    label: "Scroll controls",
    href: "/examples/scroll",
  },
  {
    label: "Cursor",
    href: "/examples/cursor",
  },
  {
    label: "Depth of field",
    href: "/examples/depth",
  },
  {
    label: "Shape rendering",
    href: "/examples/shapes",
  },
  //   {
  //     label: "Bloom",
  //     href: "/examples/bloom",
  //   },
  //   {
  //     label: "Shadows",
  //     href: "/examples/shadows",
  //   },
  //   {
  //     label: "Reflections",
  //     href: "/examples/reflections",
  //   },
];

const ExamplesLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="h-screen flex">
      <div className="border-2 space-y-4 border-black w-full max-w-md text-white p-4 bg-black">
        <h1 className="text-xl">React Three Fiber - Component Library</h1>
        <div className="space-y-2 indent-2">
          {examples.map((x) => (
            <div key={x.href}>{x.label}</div>
          ))}
        </div>
      </div>
      <div className="p-16">{children}</div>
    </section>
  );
};

export default ExamplesLayout;
