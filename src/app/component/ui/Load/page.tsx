import React from "react";
import s from "@/app/component/ui/Load/Load.module.css";
import cn from "clsx";

const SpinnerbLoader = ({ className }: any) => {
  return <span className={cn(s.Loader, {}, className && className)}></span>;
};

export default SpinnerbLoader;