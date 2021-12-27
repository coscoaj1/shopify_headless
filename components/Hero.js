import React from "react";
import Image from "next/image";
import ProductList from "./ProductList";

export default function Hero({ products }) {
  console.log({ products });
  return (
    <div
      className="container relative mx-auto carousel"
      style={{ maxWidth: "1600px" }}
    >
      <div className="relative w-full overflow-hidden carousel-inner">
        <input
          className="hidden carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          defaultChecked={true}
        />
        <div
          className="absolute opacity-0 carousel-item"
          style={{ height: "50vh" }}
        >
          <div
            className="flex block w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyODQ4Mjl8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzfGVufDB8fHx8MTY0MDYwMjUwNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080" +
                ")",
            }}
          >
            <div className="container mx-auto">
              <div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start">
                <p className="my-4 text-2xl text-black">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  className="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-3"
          className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-gray-900"
        >
          ‹
        </label>
        <label
          for="carousel-2"
          className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-gray-900"
        >
          ›
        </label>

        <input
          className="hidden carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          className="absolute bg-right bg-cover opacity-0 carousel-item"
          style={{ height: "50vh" }}
        >
          <div
            className="flex block w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80" +
                ")",
            }}
          >
            <div className="container mx-auto">
              <div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start">
                <p className="my-4 text-2xl text-black">
                  Real Bamboo Wall Clock
                </p>
                <a
                  className="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-1"
          className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-gray-900"
        >
          ‹
        </label>
        <label
          for="carousel-3"
          className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-gray-900"
        >
          ›
        </label>

        <input
          className="hidden carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          className="absolute opacity-0 carousel-item"
          style={{ height: "50vh" }}
        >
          <div
            className="flex block w-full h-full pt-6 mx-auto bg-bottom bg-cover md:pt-0 md:items-center"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" +
                ")",
            }}
          >
            <div className="container mx-auto">
              <div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start">
                <p className="my-4 text-2xl text-black">
                  Brown and blue hardbound book
                </p>
                <a
                  className="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-2"
          className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-gray-900"
        >
          ‹
        </label>
        <label
          for="carousel-1"
          className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-gray-900"
        >
          ›
        </label>

        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              for="carousel-1"
              className="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              for="carousel-2"
              className="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              for="carousel-3"
              className="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
            >
              •
            </label>
          </li>
        </ol>
      </div>
      <ProductList products={products} />
    </div>
  );
}
