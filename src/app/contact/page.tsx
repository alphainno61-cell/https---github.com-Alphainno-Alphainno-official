import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alphainno.",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-600">
        Reach out to our team for product inquiries, partnerships, or support.
      </p>
      <div className="mt-6 max-w-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full rounded-md border p-2" type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="mt-1 w-full rounded-md border p-2" type="email" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea className="mt-1 w-full rounded-md border p-2" rows={4} placeholder="How can we help?" />
          </div>
          <button type="button" className="rounded-md bg-black text-white px-5 py-2 text-sm">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
