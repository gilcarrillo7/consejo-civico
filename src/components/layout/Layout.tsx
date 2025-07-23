import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  hideFooter = false,
}: {
  children: React.ReactNode;
  hideFooter?: boolean;
}) {
  return (
    <div className="text-white min-h-screen overflow-x-hidden">
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}
