"use client";

import dynamic from "next/dynamic";

const HomeClient = dynamic(() => import("./HomeClient"), {
  ssr: false,
  loading: () => (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#020617",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p>Loading Pratham Consultancy &amp; Services...</p>
    </main>
  ),
});

export default function ClientOnlyPage() {
  return <HomeClient />;
}