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
import { ClipLoader } from "react-spinners";
import {
  alliancesFallback,
  civicFallback,
  homepageFallback,
  teamFallback,
} from "../data";
import { HomepageData, CivicData, TeamData, AlliancesData } from "../types";

const IndexPage = () => {
  const { data: homepageData, loading: loadingHomepage } =
    useRemoteData<HomepageData>("/mock/homepage.json", homepageFallback);
  const { data: civicData, loading: loadingCivic } = useRemoteData<CivicData>(
    "/mock/civic.json",
    civicFallback
  );
  const { data: teamData, loading: loadingTeam } = useRemoteData<TeamData>(
    "/mock/team.json",
    teamFallback
  );
  const { data: alliancesData, loading: loadingAlliances } =
    useRemoteData<AlliancesData>("/mock/alliances.json", alliancesFallback);

  if (loadingHomepage || loadingCivic || loadingTeam)
    return <ClipLoader color="#00A75D" />;

  return (
    <Layout>
      <HeroSection data={homepageData.hero} />
      <CivicSection data={civicData} />
      <AxesSection
        title={homepageData.axes.title}
        axes={homepageData.axes.axes}
        theme="primary"
      />
      <div id="equipo">
        <TeamSection data={teamData} />
      </div>
      <div id="alianzas">
        <AlliancesSection data={alliancesData} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Home" />;
