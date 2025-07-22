import React from "react";
import Page from "../layout/Page";
import Button from "../shared/Button";

const HeroSection = () => {
  return (
    <Page className="bg-primary">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Decorative Image */}
        <div className="order-1 lg:order-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="629"
            height="237"
            viewBox="0 0 629 237"
            fill="none"
            className="scale-75 sm:scale-90 lg:scale-100 transition-transform duration-300"
          >
            <path
              d="M0.0800781 236.457H86.5047L322.203 0.773529H235.779L0.0800781 236.457ZM153.239 236.457H239.663L475.362 0.773529H388.941L153.239 236.457ZM305.917 236.457H392.342L628.036 0.773529H541.62L305.917 236.457Z"
              fill="#00A75D"
            />
          </svg>
        </div>

        {/* Text Content */}
        <div className="lg:max-w-[500px] order-2 md:order-1">
          <h1 className="text-xl sm:text-2xl lg:text-3xl md:text-4xl font-light">
            Promovemos la vinculación y{" "}
            <span className="text-secondary font-semibold">
              participación ciudadana
            </span>{" "}
            para construir una mejor sociedad.
          </h1>
          <Button
            variant="outline"
            onClick={() => console.log("Click en conoce más")}
          >
            Conoce más
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default HeroSection;
