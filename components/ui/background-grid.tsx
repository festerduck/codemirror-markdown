"use client"
import { useTheme } from "next-themes";

const BgDarkGrid3 = () => {
  return (
    <div className="absolute -z-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  );
};

const BgLightGradient6 = () => {

  const theme = useTheme().theme;


  return (
    <>
      {
        theme == "light" ? (



          <div className={`absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]`} />
        ) :
          <div className="absolute overflow-hidden w-full h-full -z-30">
            <div className="relative h-full w-full bg-slate-950">
              <div className="absolute bottom-0 left-[-20%] lg:left-[-10%] right-0 top-[-10%] h-[500px] lg:h-[600px] w-[500px] lg:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
              <div className="absolute bottom-0 right-[-20%] lg:right-[-10%] top-[-10%] h-[500px] lg:h-[700px] w-[500px] lg:w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
            </div>
          </div>
      }
    </>
  );
};
export { BgDarkGrid3, BgLightGradient6 };
