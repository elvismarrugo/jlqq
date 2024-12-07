'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {

  const [ displayImage, setDisplayImage ] = useState( product.images[ 0 ] );
// Función para determinar la fuente de la imagen
const getLocalSrc = (src: string): string => {
  if (src) {
    if (src.startsWith('http')) {
      // URL completa de la imagen
      return src;
    } else {
      // Ruta relativa dentro del directorio /public/products/
      return `/products/${src}`;
      // Si usas Cloudinary u otro servicio, puedes descomentar y ajustar la siguiente línea:
      // return `https://res.cloudinary.com/${process.env.CLOUDINARY_URL}/image/upload/${src}`;
    }
  }
  // Imagen de marcador de posición si no se proporciona src
  return '/imgs/placeholder.jpg';
};


  // Determinar la fuente actual de la imagen
  const localSrc = getLocalSrc(displayImage);


  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={ `/product/${ product.slug }` }>
        <Image
          // src={ `/products/${ displayImage }` }
          src={localSrc}  
          alt={ product.title }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
          priority
          onMouseEnter={ () => setDisplayImage( product.images[1] )  }
          onMouseLeave={ () => setDisplayImage( product.images[0] ) }
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/product/${ product.slug }` }>
          { product.title }
        </Link>
        <span className="font-bold">${ product.price }</span>
      </div>

    </div>
  );
};