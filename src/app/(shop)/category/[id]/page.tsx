import { initialData } from '@/seed/seed';
import { notFound } from "next/navigation";


const seedProducts = initialData.products;

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}
