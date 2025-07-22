import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white min-h-screen overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
