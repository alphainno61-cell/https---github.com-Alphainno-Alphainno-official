import type { Metadata } from "next";
import ProductSlider from "@/components/ProductSlider";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Alphainno's software product suite.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Products
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive suite of innovative software solutions designed to help teams build, ship, and scale with confidence.
        </p>
      </div>
      
      <ProductSlider products={products} />
    </div>
  );
}
