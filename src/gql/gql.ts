/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetProdutsListBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CategoriesGetProdutsListBySlugDocument,
    "query ProductGetById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  description\n  images {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetList($perPage: Int = 10, $page: Int = 0) {\n  products(take: $perPage, skip: $page) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetProdutsListBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetProdutsListBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  description\n  images {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($perPage: Int = 10, $page: Int = 0) {\n  products(take: $perPage, skip: $page) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
