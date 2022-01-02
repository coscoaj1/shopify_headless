import { storefront } from '../../utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { StarIcon } from '@heroicons/react/solid';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example({ product, products }) {
	const [isLoading, setIsLoading] = useState(false);
	const variantId = product.variants.edges[0].node.id;
	const image = product.images.edges[0].node;

	const relatedProducts = products.edges
		.filter((item) => item.node.handle != product.handle)
		.slice(0, 4);

	async function checkout() {
		setIsLoading(true);
		const { data } = await storefront(checkoutMutation, { variantId });
		const { webUrl } = data.checkoutCreate.checkout;
		window.location.href = webUrl;
	}
	return (
		<div className="bg-white">
			<div className="pt-4">
				<div className="max-w-2xl mx-auto sm:block grid place-items-center">
					<Image
						src={image.transformedSrc}
						alt={image.altText}
						width={500}
						height={500}
						className="rounded-lg"
					/>
				</div>

				{/* Product info */}
				<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
							{product.title}
						</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:mt-0 lg:row-span-3">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl text-gray-900">
							{`$${product.priceRange.minVariantPrice.amount}`}
						</p>

						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? 'text-gray-900'
													: 'text-gray-200',
												'h-5 w-5 flex-shrink-0'
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
								<a
									href={reviews.href}
									className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
								>
									{reviews.totalCount} reviews
								</a>
							</div>
						</div>

						<div className="mt-10">
							<button
								onClick={checkout}
								type="button"
								className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								{isLoading && (
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								)}
								Add to bag
							</button>
						</div>
					</div>

					<div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						{/* Description and details */}
						<div>
							<h3 className="sr-only">Description</h3>
						</div>

						<div className="mt-10">
							<h2 className=" font-medium text-gray-900">Details</h2>

							<div className="mt-4 space-y-6">
								<p className=" text-gray-600">{product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Related Products */}
			<div className="max-w-7xl mx-auto mt-24">
				<div className="flex items-center justify-between space-x-4">
					<h2 className="text-lg font-medium text-gray-900">
						Customers also viewed
					</h2>
					<Link href="/">
						<a className="whitespace-nowrap text-sm font-medium text-gray-900 hover-text-gray-700">
							View all<span aria-hidden="true">&rarr;</span>
						</a>
					</Link>
				</div>
				<div className="mt-6 mb-3 place-items-center grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-10 lg-grid:cols-4">
					{relatedProducts.map((product) => {
						const relatedProduct = product.node;
						const relatedImage = product.node.images.edges[0].node;
						return (
							<div
								key={relatedProduct.handle}
								className="relative group rounded-lg"
							>
								<Image
									src={relatedImage.transformedSrc}
									alt={relatedImage.altText}
									width={350}
									height={400}
									className="rounded-lg"
								/>
								<div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
									<h3>
										<Link href={`/products/${relatedProduct.handle}`}>
											<a>
												<span aria-hidden="true" className="absolute inset-0" />
												{relatedProduct.title}
											</a>
										</Link>
									</h3>
									<h3>{`$${relatedProduct.priceRange.minVariantPrice.amount}`}</h3>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const { data } = await storefront(gql`
		{
			products(first: 8) {
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
			products: data.products,
		},
	};
}

const gql = String.raw;
const singleProductQuery = gql`
	query SingleProduct($handle: String!) {
		product(handle: $handle) {
			title
			handle
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
			variants(first: 1) {
				edges {
					node {
						id
					}
				}
			}
		}
		products(first: 5) {
			edges {
				node {
					title
					handle
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
		}
	}
`;

const checkoutMutation = gql`
	mutation CheckoutCreate($variantId: ID!) {
		checkoutCreate(
			input: { lineItems: { variantId: $variantId, quantity: 1 } }
		) {
			checkout {
				webUrl
			}
		}
	}
`;
