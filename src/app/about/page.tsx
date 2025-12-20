import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Alphainno's mission and team.",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">About Alphainno</h1>
      <p className="mt-2 text-gray-600">
        We build modern software to accelerate organizations. Our mission is to
        empower teams with reliable platforms, thoughtful design, and pragmatic
        engineering.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Our Values</h2>
          <ul className="mt-2 list-disc pl-5 text-gray-600">
            <li>Customer success above all</li>
            <li>Fast iteration, strong fundamentals</li>
            <li>Security and reliability first</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Global Presence</h2>
          <p className="mt-2 text-gray-600">
            We partner with teams worldwide across industries.
          </p>
        </div>
      </div>
    </div>
  );
}
