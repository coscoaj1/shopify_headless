import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { storefront } from "../utils";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
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

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
  console.log(data);
  return {
    props: {
      products: data.products,
    },
  };
}
