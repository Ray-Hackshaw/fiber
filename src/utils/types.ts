export interface Tag {
  label: string;
  href: string;
}

export interface ExampleProps {
  image: string;
  title: string;
  description?: string;
  tags: Tag[];
  href: string;
  colSpan: number;
}
