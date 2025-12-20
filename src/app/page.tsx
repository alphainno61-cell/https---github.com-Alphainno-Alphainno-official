import Link from "next/link";
import Image from "next/image";

const iconLinks = [
  { label: "Software", color: "bg-blue-100 text-blue-700" },
  { label: "Web", color: "bg-emerald-100 text-emerald-700" },
  { label: "AI", color: "bg-rose-100 text-rose-700" },
  { label: "Cloud", color: "bg-cyan-100 text-cyan-700" },
  { label: "Security", color: "bg-slate-200 text-slate-700" },
  { label: "IoT", color: "bg-indigo-100 text-indigo-700" },
];

const quickTiles = [
  { title: "Alpha Team", tag: "Product" },
  { title: "Alpha Dashboard", tag: "Product" },
  { title: "Alpha ERP", tag: "Product" },
  { title: "Uddoktanet", tag: "Product" },
  { title: "Biddapath", tag: "Product" },
  { title: "AlphaSearch", tag: "Product" },
];

const searchCards = [
  {
    title: "Search in new ways",
    body: "Get the details on local discoveries to find the approach you need with richer highlights.",
    cta: "Try search",
  },
  {
    title: "Go beyond text",
    body: "Search with your camera or images to find what matters in your world.",
    cta: "Use Lens",
  },
];

const suiteCards = [
  {
    title: "Get more done with Alphainno Suite",
    body: "Bring teams and tools together with secure productivity apps.",
    cta: "See the suite",
  },
  {
    title: "Stay connected on every device",
    body: "Keep work in sync across mobile, tablet, and desktop.",
    cta: "Explore devices",
  },
];

const experiments = [
  {
    title: "Flow",
    body: "Create experiments, share, and iterate faster with AI assistance.",
    cta: "Check it out",
  },
  {
    title: "Upload sources",
    body: "Ground your AI responses with trusted knowledge bases.",
    cta: "Start now",
  },
  {
    title: "Interactive 3D",
    body: "Preview immersive content in the browser.",
    cta: "View demos",
  },
];

const discoverCards = [
  {
    title: "Get a boost with concierge",
    body: "A personal assistant to coordinate your day and streamline tasks.",
    cta: "Try concierge",
  },
  {
    title: "Plan smarter trips",
    body: "Turn inspiration into tailored itineraries with live updates.",
    cta: "Plan a trip",
  },
];

const productGrid = [
  "Workspace",
  "Gmail",
  "Drive",
  "Photos",
  "Maps",
  "Meet",
  "Calendar",
  "Docs",
  "Sheets",
  "Slides",
  "Sites",
  "Keep",
  "Chat",
  "Tasks",
  "Cloud",
  "AI Suite",
  "Analytics",
  "Ads",
  "Play",
  "Pay",
  "YouTube",
  "Wear",
  "Home",
  "Pixel",
];

function IconBadge({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold ${color}`}
      >
        {label[0]}
      </span>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}

function Card({
  title,
  body,
  cta,
  tone = "slate",
}: {
  title: string;
  body: string;
  cta: string;
  tone?: "slate" | "blue" | "green";
}) {
  const toneMap = {
    slate: "from-slate-50 to-white border-slate-200",
    blue: "from-sky-50 to-white border-sky-200",
    green: "from-emerald-50 to-white border-emerald-200",
  } as const;
  return (
    <div
      className={`rounded-2xl border bg-gradient-to-b p-6 shadow-sm ${
        toneMap[tone]
      }`}
    >
      <div className="h-32 w-full rounded-xl bg-white/70 border border-dashed border-gray-200 mb-4 flex items-center justify-center text-xs text-gray-500">
        Placeholder visual
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{body}</p>
      <Link href="#" className="mt-4 inline-block text-sm font-semibold text-sky-700">
        {cta}
      </Link>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-sky-700">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-gray-900">{title}</h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-12 pb-14">
      <section className="flex items-center justify-between text-xs text-gray-600">
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/products" className="hover:text-black">
            Products
          </Link>
          <Link href="/news" className="hover:text-black">
            News
          </Link>
          <Link href="/support" className="hover:text-black">
            Support
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/signin" className="hover:text-black">
            Sign in
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-black px-3 py-1 !text-white text-xs font-semibold"
          >
            Talk to us
          </Link>
        </div>
      </section>

      <section className="rounded-3xl bg-white shadow-sm border border-gray-100 px-6 py-10 sm:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-3 text-center lg:text-left">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold text-gray-900">Helpful products,</h2>
              <h2 className="text-3xl font-bold text-gray-900">built with you in mind</h2>
              <p className="mt-2 text-gray-600">
                Discover the Alphainno lineup—AI, cloud, and productivity experiences designed to work together.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <Link
                href="/products"
                className="rounded-full bg-black px-4 py-2 text-sm font-semibold !text-white"
              >
                Shop products
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-gray-400"
              >
                Browse services
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 max-w-xl mx-auto lg:mx-0">
              {iconLinks.map((item) => (
                <IconBadge key={item.label} label={item.label} color={item.color} />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative grid grid-cols-3 gap-3">
              {["sky", "slate", "yellow"].map((tone, idx) => (
                <div
                  key={tone}
                  className={`aspect-[2/3] rounded-3xl border shadow-md ${
                    idx === 0
                      ? "bg-gradient-to-b from-sky-100 to-white border-sky-200"
                      : idx === 1
                        ? "bg-gradient-to-b from-slate-100 to-white border-slate-200"
                        : "bg-gradient-to-b from-amber-100 to-white border-amber-200"
                  } flex items-end justify-center pb-4`}
                >
                  <div className="h-10 w-20 rounded-full bg-white/80 border border-gray-200 shadow-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg px-5 py-6 sm:px-10 border border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky-200">
            <span className="h-2 w-2 rounded-sm bg-sky-300" />
            Support concierge
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How can we help?</h2>
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl bg-white/90 shadow-xl ring-1 ring-slate-200/70 backdrop-blur">
              <div className="flex items-center">
                <input
                  className="flex-1 px-4 py-3 text-gray-900 text-base focus:outline-none"
                  placeholder="Ask a product or support question"
                  aria-label="Ask a product or support question"
                />
                <button
                  className="px-4 text-sky-600 hover:text-sky-700"
                  type="button"
                  aria-label="Submit question"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M3.172 12 9 17.828V14h6a1 1 0 0 0 .707-1.707L9 7v-3.828L3.172 12Z" />
                  </svg>
                </button>
              </div>
              <div className="h-[3px] w-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-100">
            <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:border-white/40 hover:bg-white/10">
              Which solution fits my team?
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:border-white/40 hover:bg-white/10">
              Sign in to my account
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:border-white/40 hover:bg-white/10">
              How can my business use AI?
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 hover:border-white/40 hover:bg-white/10">
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickTiles.map((tile) => (
            <div
              key={tile.title}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center hover:border-gray-300"
            >
              <div className="mx-auto mb-3 h-10 w-10 rounded-lg bg-white shadow-sm" />
              <p className="text-sm font-semibold text-gray-900">{tile.title}</p>
              <p className="text-xs text-gray-600">{tile.tag}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Search in new ways" />
        <div className="grid gap-4 md:grid-cols-2">
          {searchCards.map((card, idx) => (
            <Card
              key={card.title}
              title={card.title}
              body={card.body}
              cta={card.cta}
              tone={idx === 0 ? "blue" : "green"}
            />
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-blue-50 via-white to-cyan-50 border border-blue-100 p-8 shadow-sm">
        <div className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900">Chat with Alphainno AI</h2>
            <p className="text-gray-600">
              Your personal AI assistant for planning, research, and creative work.
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Link
                href="/ai"
                className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
              >
                Try now
              </Link>
              <Link href="/ai/learn" className="text-sm font-semibold text-sky-700">
                Learn more
              </Link>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-2xl border border-blue-100 bg-white p-4 shadow-md">
            <div className="h-64 rounded-xl bg-gradient-to-b from-sky-100 to-white border border-sky-200" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Get more done with Alphainno and Pixel"
          description="Stay productive across devices with connected experiences."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {suiteCards.map((card) => (
            <Card key={card.title} title={card.title} body={card.body} cta={card.cta} tone="slate" />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Labs"
          title="Try new AI products and experiments"
          description="Pilot the latest features, share feedback, and help shape our roadmap."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {experiments.map((exp, idx) => (
            <Card
              key={exp.title}
              title={exp.title}
              body={exp.body}
              cta={exp.cta}
              tone={idx === 2 ? "green" : "slate"}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Discover more ways to use AI in our products"
          description="Blend AI across search, productivity, and devices for better outcomes."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {discoverCards.map((card, idx) => (
            <Card
              key={card.title}
              title={card.title}
              body={card.body}
              cta={card.cta}
              tone={idx === 0 ? "blue" : "green"}
            />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl border border-slate-800 overflow-hidden px-6 py-12 sm:px-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Partner with us</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Build the next experience with Alphainno</h2>
            <p className="text-base sm:text-lg text-slate-200/90">
              Alphainno's leaders are guiding our company as mixed reality and AI evolve, helping to create the next evolution of digital connection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <Link
                href="/about"
                className="rounded-full bg-gradient-to-r from-purple-900 to-indigo-900 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:from-purple-950 hover:to-indigo-950 transition-all duration-200"
              >
                Get to know our leadership
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-xl">
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl bg-gradient-to-br from-sky-200/80 via-white to-slate-100 border border-white/30 shadow-2xl overflow-hidden">
              <Image
                src="/asif mollik ceo .png"
                alt="Asif Mollik - CEO of Alphainno"
                fill
                className="object-cover rounded-3xl object-[center_20%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
