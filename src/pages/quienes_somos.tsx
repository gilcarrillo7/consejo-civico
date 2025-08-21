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
import { ClipLoader } from "react-spinners";

import type {
  AboutData,
  MissionVisionData,
  ProgramsData,
  OrganigramData,
} from "../types";
import {
  aboutFallback,
  missionVisionFallback,
  programsFallback,
  organigramFallback,
} from "../data";

const AboutPage = () => {
  const { data: aboutData, loading: loadingAbout } = useRemoteData<AboutData>(
    "/mock/about.json", // ajusta si usas otra ruta
    aboutFallback
  );

  const { data: missionVisionData, loading: loadingMissionVision } =
    useRemoteData<MissionVisionData>(
      "/mock/missionVision.json",
      missionVisionFallback
    );

  const { data: programsData, loading: loadingPrograms } =
    useRemoteData<ProgramsData>("/mock/programs.json", programsFallback);

  const { data: organigramData, loading: loadingOrganigram } =
    useRemoteData<OrganigramData>("/mock/organigram.json", organigramFallback);

  if (loadingAbout || loadingMissionVision || loadingPrograms) {
    return <ClipLoader color="#00A75D" />;
  }
  if (
    loadingAbout ||
    loadingMissionVision ||
    loadingPrograms ||
    loadingOrganigram
  ) {
    return <ClipLoader color="#00A75D" />;
  }

  return (
    <Layout>
      <AboutSection data={aboutData} />
      <MissionVisionSection data={missionVisionData} />
      <ProgramsSection data={programsData} />
      <OrganigramSection data={organigramData} />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO title="Quiénes somos" />;
