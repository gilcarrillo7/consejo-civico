import React from "react";
import { ClipLoader } from "react-spinners";

const FullLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ClipLoader color="#00A75D" />
    </div>
  );
}

export default FullLoader;