import * as React from "react";
import Layout from "../components/layout/Layout";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";
import AboutSection from "../components/sections/AboutSection";
import MissionVisionSection from "../components/sections/MissionVisionSection";
import ProgramsSection from "../components/sections/ProgramsSection";
import OrganigramSection from "../components/sections/OrganigramSection";

const IndexPage = () => {
  return (
    <Layout>
      <AboutSection />
      <MissionVisionSection />
      <ProgramsSection />
      <OrganigramSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Quienes somos" />;
