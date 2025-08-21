// pages/landing-centro.tsx (tu archivo Landing actual)
import React from "react";
import CentroSection from "../components/sections/CentroSection";
import AxesSection from "../components/shared/AxesSection";
import ReportStatsSection from "../components/sections/ReportStatsSection";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";
import Layout from "../components/layout/Layout";
import { ClipLoader } from "react-spinners";

import { useRemoteData } from "../hooks/useRemoteData";
import type { AxesData, CentroData, ReportStatsData } from "../types";
import {
  axesCentroFallback,
  centroFallback,
  reportStatsFallback,
} from "../data";

export default function Landing() {
  const { data: axesData, loading: loadingAxes } = useRemoteData<AxesData>(
    "/mock/axes_centro.json",
    axesCentroFallback
  );

  const { data: centroData, loading: loadingCentro } =
    useRemoteData<CentroData>("/mock/centro.json", centroFallback);
  const { data: reportStatsData, loading: loadingStats } =
    useRemoteData<ReportStatsData>(
      "/mock/report_stats.json",
      reportStatsFallback
    );

  if (loadingAxes || loadingCentro || loadingStats)
    return <ClipLoader color="#00A75D" />;

  return (
    <Layout>
      <CentroSection data={centroData} />
      <AxesSection
        title={axesData.title}
        theme={axesData.theme}
        axes={axesData.axes}
      />
      <ReportStatsSection data={reportStatsData} />
    </Layout>
  );
}

export const Head: HeadFC = () => (
  <SEO title="Centro de Integración Ciudadana" />
);
