import { type ProductItemType } from "@/ui/types";
const API_URL = "https://naszsklep-api.vercel.app/api/products";
const NUMBER_OF_PRODUCTS_ON_PAGE = 20;

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductList = async (
	pageNumber = 1,
	numberOfProducts = NUMBER_OF_PRODUCTS_ON_PAGE,
) => {
	const params = new URLSearchParams();
	params.append("take", String(numberOfProducts));

	if (pageNumber > 1) {
		params.append("offset", String((pageNumber - 1) * numberOfProducts));
	}

	const url = `${API_URL}?${params.toString()}`;

	const res = await fetch(url);
	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(productResponseItemToProductItemType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const response = await fetch(`${API_URL}/${id}`);
	const product = (await response.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(product);
};

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => ({
	id: product.id,
	name: product.title,
	category: product.category,
	price: product.price,
	description: product.description,
	image: {
		src: product.image,
		alt: product.title,
	},
});
