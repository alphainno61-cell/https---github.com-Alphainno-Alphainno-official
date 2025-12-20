export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Alphainno. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-black">Privacy</a>
            <a href="/terms" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
