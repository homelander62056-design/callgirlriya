"use client";

import React from "react";
import AboutClient from "./about/AboutClient";

export default function HomeClient() {
  return (
    <div className="w-full font-sans text-zinc-100">
      {/* About Section imported from AboutClient */}
      <AboutClient />
    </div>
  );
}
