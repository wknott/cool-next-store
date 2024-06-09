import { notFound } from "next/navigation";
import { getProductListByCollectionSlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductListByCollectionSlug({
	params: { collectionName },
}: {
	params: {
		collectionName: string;
	};
}) {
	const collection = await getProductListByCollectionSlug(collectionName);

	if (!collection?.products) {
		notFound();
	}

	return (
		<main>
			<ProductList products={collection.products} />
		</main>
	);
}
