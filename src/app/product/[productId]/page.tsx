import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription";
import { ProductImage } from "@/ui/atoms/ProductListItemImage";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
	};
}

export default async function SingleProductPage({
	params
}: {
	params: {
		productId: string;
	};
}) {
	const product = await getProductById(params.productId);

	return (
		<article className="flex gap-4">
			<ProductImage {...product.image} width={480} height={480} />
			<ProductDetailsDescription product={product} />
		</article>
	)
}