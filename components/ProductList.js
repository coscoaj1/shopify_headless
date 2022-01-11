import Link from "next/link";
import Image from "next/image";

export default function ProductList({ products }) {
  return (
    <div className="h-auto max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Products
      </h2>
      <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.edges.map((item) => {
          const product = item.node;
          const image = product.images.edges[0].node;
          return (
            <div className="group mx-auto">
              <div
                key={product.handle}
                className="relative rounded-lg group-hover:opacity-75"
              >
                <Image
                  src={image.transformedSrc}
                  alt={image.altText}
                  width={350}
                  height={400}
                  className="object-cover rounded-lg"
                />
                <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                  <h3>
                    <Link href={`/products/${product.handle}`}>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </Link>
                  </h3>
                  <h3>{`$${product.priceRange.minVariantPrice.amount}`}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
