import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import React, { useEffect } from 'react';
import { storefront } from '../utils';

export default function Home({ products }) {
	return (
		<div className="w-full h-auto">
			<Hero products={products} />
			<ProductList products={products} />
		</div>
	);
}

export async function getStaticProps() {
	const { data } = await storefront(productsQuery);
	console.log(data);
	return {
		props: {
			products: data.products,
		},
	};
}

const gql = String.raw;
const productsQuery = gql`
	query Products {
		products(first: 8) {
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
