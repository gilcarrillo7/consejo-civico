import * as React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import CivicSection from "../components/sections/CivicSection";
import AxesSection from "../components/shared/AxesSection";

import TeamSection from "../components/sections/TeamSection";
import AlliancesSection from "../components/sections/AlliancesSection";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";
import { useRemoteData } from "../hooks/useRemoteData";
import {
  alliancesFallback,
  civicFallbackSections,
  heroFallback,
  homepageAxisFallback,
  teamFallback,
} from "../data";
import { HeroData, TeamData } from "../types";
import { useCategoryPosts } from "../hooks/useCategoryPosts";
import FullLoader from "../components/layout/FullLoader";
import { useEffect } from "react";

const IndexPage = () => {
  const { data: homepageData, loading: loadingHomepage } =
    useRemoteData<HeroData>("home-hero", heroFallback);
  const { data: civicData, loading: loadingCivic } = useCategoryPosts(
    4, // sección cívica
    civicFallbackSections
  );
  const { data: axesData, loading: loadingAxes } = useCategoryPosts(
    5, // ejes de trabajo
    homepageAxisFallback
  );
  const { data: teamData, loading: loadingTeam } = useRemoteData<TeamData>(
    "nuestro-equipo",
    teamFallback
  );
  const { data: alliancesData, loading: loadingAlliances } = useCategoryPosts(
    6, // alianzas
    alliancesFallback
  );
  const loading =
    loadingHomepage ||
    loadingCivic ||
    loadingAxes ||
    loadingTeam ||
    loadingAlliances;

  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView();
        }
      }
    }
  }, [loading]);

  if (loading) return <FullLoader />;

  return (
    <Layout>
      <HeroSection data={homepageData} />
      <CivicSection sections={civicData} />
      <AxesSection axes={axesData} theme="primary" />
      <div id="equipo">
        <TeamSection data={teamData} />
      </div>
      =
      <div id="alianzas">
        <AlliancesSection data={alliancesData} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Home" />;
