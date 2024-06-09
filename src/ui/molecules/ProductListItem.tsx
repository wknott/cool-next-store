import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
  product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <li>
      <Link href={`/product/${product.id}`}>
        <article>
          {product.images[0] && <ProductListItemImage url={product.images[0].url} alt={product.name} />}
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};
