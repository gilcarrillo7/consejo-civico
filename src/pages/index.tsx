import * as React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import CivicSection from "../components/sections/CivicSection";
import AxesSection from "../components/shared/AxesSection";

import SeguridadIcon from "../images/icon-seguridad.svg";
import JusticiaIcon from "../images/icon-justicia.svg";
import TransparenciaIcon from "../images/icon-transparencia.svg";
import CiudadaniaIcon from "../images/icon-ciudadania.svg";
import TeamSection from "../components/sections/TeamSection";
import AlliancesSection from "../components/sections/AlliancesSection";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";

const axes = [
  { title: "Seguridad", icon: SeguridadIcon },
  { title: "Justicia", icon: JusticiaIcon },
  { title: "Transparencia", icon: TransparenciaIcon },
  { title: "Ciudadanía", icon: CiudadaniaIcon },
];

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <CivicSection />
      <AxesSection
        title="Conoce nuestros ejes de trabajo"
        axes={axes}
        theme="primary"
      />
      <div id="equipo">
        <TeamSection />
      </div>
      <div id="alianzas">
        <AlliancesSection />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Home" />;
