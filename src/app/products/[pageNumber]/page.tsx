import { getProductListFromGraphQL } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
const NUMBER_OF_PRODUCTS_PER_PAGE = 10;

export async function generateStaticParams() {
	const numberOfPages = 1;
	
	return Array.from({ length: numberOfPages }, (_, i) => ({ pageNumber: (i + 1).toString() }));
}

export default async function ProductListPage({
	params: { pageNumber },
}: {
	params: {
		pageNumber: string;
	};
}) {
	const products = await getProductListFromGraphQL(+pageNumber, NUMBER_OF_PRODUCTS_PER_PAGE);

	return (
		<main>
			<ProductList products={products} />
		</main>
	)
}
