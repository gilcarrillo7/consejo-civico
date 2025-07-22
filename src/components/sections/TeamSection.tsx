import React from "react";
import Page from "../layout/Page";
import EquipoImage from "../../images/equipo.png";
import Button from "../shared/Button";

export default function TeamSection() {
  return (
    <Page className="bg-secondary text-primary">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center md:text-left sm:mb-12">
          Nuestro equipo
        </h2>
        <div className=" flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Imagen con marco decorativo */}
          <div className="relative max-w-xl">
            <div className="relative z-10">
              <img
                src={EquipoImage}
                alt="Nuestro equipo"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decoración tipo zigzag */}
            <div className="absolute inset-0 z-0 flex justify-between items-center px-4">
              <div className="h-full w-[20px] bg-primary clip-diagonal-left" />
              <div className="h-full w-[20px] bg-primary clip-diagonal-right" />
            </div>
          </div>

          {/* Texto */}
          <div className="max-w-xl space-y-6 text-left text-primary">
            <p className="font-bold text-lg text-[#2C1A84]">
              La sociedad organizada tiene el poder de cambiar lo que sea que se
              proponga.
            </p>

            <p className="text-[#2C1A84]">
              <strong>
                Nuestro equipo impulsa los cambios que la ciudadanía de Saltillo
                necesita.
              </strong>{" "}
              Para representarte, necesitamos que tú y tu entorno social
              participen en nuestros programas.
            </p>

            <p className="text-[#2C1A84]">
              ¡La ciudad y tu comunidad se verán beneficiadas por tu acción!
            </p>

            <ul className="text-[#2C1A84] space-y-1">
              <li>
                <strong>Sara Martha Arizpe Ramos</strong>
                <br />
                Directora Ejecutiva
              </li>
              <li>
                <strong>Edgar Alejandro Calvillo Cepeda</strong>
                <br />
                Coordinador Administrativo
              </li>
              <li>
                <strong>Felipe de Jesús López Delgado</strong>
                <br />
                Coordinador de Innovación
              </li>
              <li>
                <strong>Ana Izel Fraire González</strong>
                <br />
                Coordinadora de Comunicación
              </li>
            </ul>
            <Button variant="primary">Contacto</Button>
          </div>
        </div>
      </div>
    </Page>
  );
}
