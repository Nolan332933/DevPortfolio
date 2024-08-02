import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { LuLanguages } from "react-icons/lu";

const Language = () => {
  const router = useRouter();
  const { lang } = useParams();
  const [language, setLanguage] = useState(lang);

  const handleLangChange = (e) => {
    const value = e.target.value;
    router.push(`/blog/${value}`);
    setLanguage(value);
  };

  return (
    <div className="flex items-center">
      <LuLanguages size={20} className="text-slate-700 me-2" />
      <select
        className="rounded-md outline-none bg-slate-200 p-0 text-violet-700 text-sm py-2 px-1"
        onChange={(e) => handleLangChange(e)}
        value={language}
      >
        <option value="en" defaultValue={language == "en" && true}>
          En
        </option>
        <option value="my" defaultValue={language == "my" && true}>
          My
        </option>
      </select>
    </div>
  );
};

export default Language;
