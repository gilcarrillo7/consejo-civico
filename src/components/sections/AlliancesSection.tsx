import React from "react";

import Alianza1 from "../../images/alianzas/alianza1.png";
import Alianza2 from "../../images/alianzas/alianza2.png";
import Alianza3 from "../../images/alianzas/alianza3.png";
import Alianza4 from "../../images/alianzas/alianza4.png";
import Alianza5 from "../../images/alianzas/alianza5.png";
import Alianza6 from "../../images/alianzas/alianza6.png";
import Alianza7 from "../../images/alianzas/alianza7.png";
import Alianza8 from "../../images/alianzas/alianza8.png";
import Alianza9 from "../../images/alianzas/alianza9.png";
import Alianza10 from "../../images/alianzas/alianza10.png";
import Alianza11 from "../../images/alianzas/alianza11.png";
import Alianza12 from "../../images/alianzas/alianza12.png";
import Alianza13 from "../../images/alianzas/alianza13.png";
import Alianza14 from "../../images/alianzas/alianza14.png";
import Alianza15 from "../../images/alianzas/alianza15.png";
import Alianza16 from "../../images/alianzas/alianza16.png";
import Alianza17 from "../../images/alianzas/alianza17.png";
import Alianza18 from "../../images/alianzas/alianza18.png";
import Alianza19 from "../../images/alianzas/alianza19.png";
import Alianza20 from "../../images/alianzas/alianza20.png";
import Alianza21 from "../../images/alianzas/alianza21.png";
import Alianza22 from "../../images/alianzas/alianza22.png";
import Alianza23 from "../../images/alianzas/alianza23.png";
import Alianza24 from "../../images/alianzas/alianza24.png";
import Alianza25 from "../../images/alianzas/alianza25.png";
import Alianza26 from "../../images/alianzas/alianza26.png";
import Alianza27 from "../../images/alianzas/alianza27.png";
import Alianza28 from "../../images/alianzas/alianza28.png";
import Alianza29 from "../../images/alianzas/alianza29.png";
import Alianza30 from "../../images/alianzas/alianza30.png";
import Alianza31 from "../../images/alianzas/alianza31.png";
import Alianza32 from "../../images/alianzas/alianza32.png";
import Alianza33 from "../../images/alianzas/alianza33.png";
import Alianza34 from "../../images/alianzas/alianza34.png";
import Alianza35 from "../../images/alianzas/alianza35.png";
import Page from "../layout/Page";

const logos = [
  Alianza1,
  Alianza2,
  Alianza3,
  Alianza4,
  Alianza5,
  Alianza6,
  Alianza7,
  Alianza8,
  Alianza9,
  Alianza10,
  Alianza11,
  Alianza12,
  Alianza13,
  Alianza14,
  Alianza15,
  Alianza16,
  Alianza17,
  Alianza18,
  Alianza19,
  Alianza20,
  Alianza21,
  Alianza22,
  Alianza23,
  Alianza24,
  Alianza25,
  Alianza26,
  Alianza27,
  Alianza28,
  Alianza29,
  Alianza30,
  Alianza31,
  Alianza32,
  Alianza33,
  Alianza34,
  Alianza35,
];

export default function AlliancesSection() {
  return (
    <Page className="bg-white">
      <div className="container mx-auto">
        <h2 className="text-secondary text-xl md:text-3xl font-semibold mb-12">
          Alianzas
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-y-8 gap-x-4 place-items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center"
            >
              <img
                src={logo}
                alt={`Aliado ${idx + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
