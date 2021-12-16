import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
