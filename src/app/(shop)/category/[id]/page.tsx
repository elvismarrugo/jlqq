import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
// import { notFound } from "next/navigation";


const seedProducts = initialData.products;

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryById({ params }: Props) {

  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id );

  const labels: Record<Category, string>  = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
    <Title
      title={`Atmosfera: Artículos ${ labels[id] }`}
      subtitle="Todos los productos"
      className="mb-2"
    />

    <ProductGrid 
      products={ products }
    />
    
  </>
  );
}
