// pages/landing-centro.tsx (tu archivo Landing actual)
import React from "react";
import CentroSection from "../components/sections/CentroSection";
import AxesSection from "../components/shared/AxesSection";
import ReportStatsSection from "../components/sections/ReportStatsSection";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";
import Layout from "../components/layout/Layout";

import { useRemoteData } from "../hooks/useRemoteData";
import type { CentroData } from "../types";
import { axesCentroFallback, centroFallback } from "../data";
import { useCategoryPosts } from "../hooks/useCategoryPosts";
import FullLoader from "../components/layout/FullLoader";

export default function Landing() {
  const { data: centroData, loading: loadingCentro } =
    useRemoteData<CentroData>("centro-saltillo", centroFallback);
  const { data: axesData, loading: loadingAxes } = useCategoryPosts(
    10, // como funciona
    axesCentroFallback
  );

  if (loadingAxes || loadingCentro) return <FullLoader />;

  return (
    <Layout>
      <CentroSection data={centroData} />
      <AxesSection theme="secondary" axes={axesData} />
      <ReportStatsSection data={centroData.bottom} />
    </Layout>
  );
}

export const Head: HeadFC = () => (
  <SEO title="Centro de Integración Ciudadana" />
);
