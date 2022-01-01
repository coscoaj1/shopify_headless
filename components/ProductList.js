import Link from 'next/link';

export default function ProductList({ products }) {
	return (
		<div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
				Products
			</h2>
			<div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.edges.map((item) => {
					const product = item.node;
					const image = product.images.edges[0].node;
					return (
						<Link key={product.title} href={`/products/${product.handle}`}>
							<a className="relative group">
								<div>
									<div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-4 aspect-h-3 group-hover:opacity-75 lg:h-80 lg:aspect-none">
										<img
											alt={image.altText}
											src={image.transformedSrc}
											className="object-cover object-center w-full h-full lg:w-full lg:h-full"
										/>
									</div>
									<div className="flex justify-between mt-4">
										<div>
											<h3 className="text-sm text-gray-700">
												<span aria-hidden="true" className="absolute inset-0" />
												{product.title}
											</h3>
										</div>
										<p className="text-sm font-medium text-gray-900">
											{product.priceRange.minVariantPrice.amount}
										</p>
									</div>
								</div>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
