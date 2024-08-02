import React from "react";
import GeneralSetting from "./GeneralSetting";
import { GeneralSettingProvider } from "@/context/GeneralSettingContext";

const page = () => {
  return (
    <GeneralSettingProvider>
      <GeneralSetting />
    </GeneralSettingProvider>
  );
};

export default page;
