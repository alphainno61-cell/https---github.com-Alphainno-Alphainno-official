import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover Alphainno's professional service offerings.",
};

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-gray-600">
        Expert guidance to modernize, optimize, and scale your platforms.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
