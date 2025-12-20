import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Alphainno and build the future.",
};

const roles = [
  { title: "Senior Software Engineer", location: "Remote", type: "Full-time" },
  { title: "Product Manager", location: "Remote", type: "Full-time" },
  { title: "Solutions Architect", location: "Remote", type: "Contract" },
];

export default function CareersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Careers</h1>
      <p className="mt-2 text-gray-600">
        We’re hiring across engineering, product, and customer success.
      </p>
      <div className="mt-6 space-y-4">
        {roles.map((role) => (
          <div key={role.title} className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">{role.title}</h3>
            <p className="text-sm text-gray-600">{role.location} · {role.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
