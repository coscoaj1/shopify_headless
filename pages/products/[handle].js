import { storefront } from '../../utils';
import Image from 'next/image';

import React from 'react';

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
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example({ product }) {
	console.log(product.description);
	const image = product.images.edges[0].node;
	return (
		<div className="bg-white">
			<div className="pt-12">
				<div className="max-w-2xl mx-auto rounded-lg sm:block grid place-items-center">
					<Image
						src={image.transformedSrc}
						alt={image.altText}
						width={685}
						height={600}
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
							{product.priceRange.minVariantPrice.amount}
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

						<form className="mt-10">
							<button
								type="submit"
								className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Add to bag
							</button>
						</form>
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
