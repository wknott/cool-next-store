import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("No GRAPHQL_URL provided");
	}

	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await response.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
