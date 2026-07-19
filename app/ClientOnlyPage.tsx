"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("./HomeClient"), {
  ssr: false,
  loading: () => (
    <main className="site-loading">
      <p>Loading Pratham Consultancy &amp; Services...</p>
    </main>
  ),
});

export default function ClientOnlyPage() {
  return <HomeClient />;
}