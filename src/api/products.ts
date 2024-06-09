import { executeGraphql } from "@/api/graphqlApi";
import {
	type Product,
	ProductGetByIdDocument,
	ProductsGetListDocument,
	CategoriesGetProdutsListBySlugDocument,
} from "@/gql/graphql";

export const getProductListFromGraphQL = async (page: number, perPage: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		page,
		perPage,
	});

	return graphqlResponse.products.data;
};

export const getProductById = async (productId: Product["id"]) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { productId });

	return graphqlResponse.product;
};

export const getProductListByCategorySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(CategoriesGetProdutsListBySlugDocument, {
		slug,
	});

	return graphqlResponse.category;
};
