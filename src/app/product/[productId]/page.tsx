import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { ProductDetailsDescription } from "@/ui/atoms/ProductDetailsDescription";
import { ProductImage } from "@/ui/atoms/ProductImage";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	if (!product) {
		return {
			title: "Product not found",
			description: "The product you are looking for does not exist.",
		};
	}

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

	if (!product) {
		notFound();
	}

	return (
		<article className="flex gap-4">
			{product.images[0] && <ProductImage url={product.images[0].url} alt={product.name} width={480} height={480} />}
			<ProductDetailsDescription product={{ ...product, category: product.categories[0]?.name }} />
		</article>
	)
}