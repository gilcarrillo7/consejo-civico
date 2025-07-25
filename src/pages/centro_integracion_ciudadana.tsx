import React from "react";
import CentroSection from "../components/sections/CentroSection";
import AxesSection from "../components/shared/AxesSection";
import ReportStatsSection from "../components/sections/ReportStatsSection";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";
import Layout from "../components/layout/Layout";

import Icon1 from "../images/icon-saltillo1.svg";
import Icon2 from "../images/icon-saltillo2.svg";
import Icon3 from "../images/icon-saltillo3.svg";
import Icon4 from "../images/icon-saltillo4.svg";

export default function Landing() {
  const axes = [
    { title: "Detecta el problema", icon: Icon1 },
    {
      title: "Comparte la ubicación, envía una foto y cuenta",
      icon: Icon2,
    },
    { title: "Nuestro equipo canalizará tu reporte", icon: Icon3 },
    { title: "Las autoridades se harán cargo", icon: Icon4 },
  ];
  return (
    <Layout>
      <CentroSection />
      <AxesSection title="¿Cómo funciona?" theme="secondary" axes={axes} />
      <ReportStatsSection />
    </Layout>
  );
}

export const Head: HeadFC = () => (
  <SEO title="Centro de Integración Ciudadana" />
);
