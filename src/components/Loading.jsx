import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../lotties/loading-animation.json";

export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-50">
      <div className="w-[300px] lg:w-[400px] ">
        <Lottie animationData={loadingAnimation} loop={true} play />
      </div>
    </div>
  );
};
