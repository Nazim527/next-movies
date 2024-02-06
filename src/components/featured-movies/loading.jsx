import React from "react";
import Loading from "../loading";

import "./style.css";

function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={"movieWrapper"}>
      <Loading />
    </div>
  );
}

export default  FeatureMovieLoading ;