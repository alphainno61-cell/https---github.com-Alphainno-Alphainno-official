import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Build with confidence.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Alphainno delivers modern software products and services to help
          teams move faster—from cloud-native platforms to AI-driven solutions.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/products"
            className="rounded-md bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-800"
          >
            Explore Products
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium hover:border-gray-400"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
