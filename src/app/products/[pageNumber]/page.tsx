import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateStaticParams() {
	const numberOfPages = Math.ceil(4205 / 20);
	
	return Array.from({ length: numberOfPages }, (_, i) => ({ pageNumber: (i + 1).toString() }));
}

export default async function ProductListPage({
	params: { pageNumber },
}: {
	params: {
		pageNumber: string;
	};
}) {
	const products = await getProductList(+pageNumber);

	return (
		<main>
			<ProductList products={products} />
		</main>
	)
}
