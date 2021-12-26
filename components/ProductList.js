const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function ProductList({ products }) {
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
