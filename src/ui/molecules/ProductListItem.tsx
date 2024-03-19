import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductImage } from "@/ui/atoms/ProductListItemImage";

type ProductListItemProps = {
  product: {
    name: string;
    category: string;
    price: number;
    image: {
      src: string;
      alt: string;
    };
    id: string;
  };
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
      <article>
        <ProductImage {...product.image} />
        <ProductListItemDescription product={product} />
      </article>
      </Link>
    </li>
  );
};
