import dynamic from "next/dynamic";

export default dynamic(() => import("./MiniMap"), {
  ssr: false,
});
