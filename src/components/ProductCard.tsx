import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  href: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className="block rounded-lg border border-gray-200 p-5 hover:shadow-sm"
    >
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{product.tagline}</p>
    </Link>
  );
}
