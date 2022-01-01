import { storefront } from '../utils';

export default function ProductList({ products, product: singleProduct }) {
	console.log({ singleProduct });
	return (
		<div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
				Products
			</h2>
			<div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.edges.map((product) => (
					<div key={product.node.title} className="relative group">
						<div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-4 aspect-h-3 group-hover:opacity-75 lg:h-80 lg:aspect-none">
							<img
								alt={product.node.title}
								src={product.node.images.edges[0].node.transformedSrc}
								className="object-cover object-center w-full h-full lg:w-full lg:h-full"
							/>
						</div>
						<div className="flex justify-between mt-4">
							<div>
								<h3 className="text-sm text-gray-700">
									<a href={product.href}>
										<span aria-hidden="true" className="absolute inset-0" />
										{product.node.title}
									</a>
								</h3>
								<p className="mt-1 text-sm text-gray-500">{product.color}</p>
							</div>
							<p className="text-sm font-medium text-gray-900">
								{product.node.priceRange.minVariantPrice.amount}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const { data } = await storefront(gql`
		{
			products(first: 4) {
				edges {
					node {
						handle
					}
				}
			}
		}
	`);
	return {
		paths: data.products.edges.map((product) => ({
			params: { handle: product.node.handle },
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { data } = await storefront(singleProductQuery, {
		handle: params.handle,
	});
	return {
		props: {
			product: data.product,
		},
	};
}

const gql = String.raw;
const singleProductQuery = gql`
	query SingleProduct($handle: String!) {
		product(handle: $handle) {
			title
			description
			updatedAt
			tags
			priceRange {
				minVariantPrice {
					amount
				}
			}
			images(first: 1) {
				edges {
					node {
						transformedSrc
						altText
					}
				}
			}
		}
	}
`;
