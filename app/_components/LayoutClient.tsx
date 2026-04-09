"use client";

import dynamic from "next/dynamic";

// Lazy load heavy components that only work on client-side
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  loading: () => null,
  ssr: false,
});

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  {
    loading: () => null,
    ssr: false,
  },
);

export default function LayoutClient() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
    </>
  );
}
