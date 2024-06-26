import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				{categories[0] && <p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {categories[0].name}
				</p>}
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>{" "}
				{Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(price)}
			</p>
		</div>
	);
};
