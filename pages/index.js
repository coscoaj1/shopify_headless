import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { storefront } from "../utils";

export default function Home({ products }) {
  return (
    <div className="w-full h-screen">
      <Header />
      <Hero products={products} />
      <Footer />
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
    products(first: 4) {
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
