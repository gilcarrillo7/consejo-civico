// pages/quienes-somos.tsx
import * as React from "react";
import Layout from "../components/layout/Layout";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";
import AboutSection from "../components/sections/AboutSection";
import MissionVisionSection from "../components/sections/MissionVisionSection";
import ProgramsSection from "../components/sections/ProgramsSection";
import OrganigramSection from "../components/sections/OrganigramSection";

import { useRemoteData } from "../hooks/useRemoteData";

import type { AboutData, ProgramsData, OrganigramData } from "../types";
import { aboutFallback, programsFallback, organigramFallback } from "../data";
import { useCategoryPosts } from "../hooks/useCategoryPosts";
import FullLoader from "../components/layout/FullLoader";

const AboutPage = () => {
  const { data: aboutData, loading: loadingAbout } = useRemoteData<AboutData>(
    "quienes-somos",
    aboutFallback
  );
  const { data: programsData, loading: loadingPrograms } =
    useCategoryPosts<ProgramsData>(
      8, // programas
      programsFallback
    );

  const { data: organigramData, loading: loadingOrganigram } =
    useRemoteData<OrganigramData>("organigrama", organigramFallback);

  if (loadingAbout || loadingPrograms || loadingOrganigram) {
    return <FullLoader />;
  }

  return (
    <Layout>
      <AboutSection text={aboutData.about} />
      <MissionVisionSection data={aboutData} />
      <ProgramsSection data={programsData} />
      <OrganigramSection data={organigramData} />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO title="Quiénes somos" />;
