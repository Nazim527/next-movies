import React from "react";

import Skeleton  from "@/components/skeleton";
import  "./style.css";

function MoviesSectionLoading() {
  return (
    <div className={"moviesSection"}>
      <Skeleton width={128} height={36} />
      <div className={"movies"}>
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export default MoviesSectionLoading ;