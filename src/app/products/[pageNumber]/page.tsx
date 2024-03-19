import { getProductList } from "@/api/products";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateStaticParams({ params }: { params: { pageNumber: string } }) {
	console.log(params);
	return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
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
			<div aria-label="pagination">
				<ActiveLink
					href={`${+pageNumber - 1}`}
					className="text-blue-400 hover:text-blue-600"
					activeClassName="font-semibold underline"
				>
					Poprzednia strona
				</ActiveLink>
				<ActiveLink
					href={`${+pageNumber + 1}`}
					className="text-blue-400 hover:text-blue-600" activeClassName="font-semibold underline"
				>
					Następna strona
				</ActiveLink>
			</div>
			<ProductList products={products} />
		</main>
	)
}
