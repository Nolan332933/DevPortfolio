import { PostContext } from "@/context/PostContext";
import { Label, ToggleSwitch } from "flowbite-react";
import React, { useContext, useState } from "react";

const LangAndFeatured = () => {
  const { state, getAllPosts } = useContext(PostContext);
  const [lang, setLang] = useState("en");
  const [changedLang, setChangedLang] = useState(true);
  const [featured, setFeatured] = useState(false);

  const handleLangChange = (value) => {
    // do something
    let language;
    !value ? (language = "my") : (language = "en");
    getAllPosts({ lang: language, featured, status: "" });
    if (state.success) {
      setLang(language);
      setChangedLang(value);
    }
  };

  const handleFeaturedChange = (value) => {
    // do something
    getAllPosts({ lang, featured: value, status: "" });
    if (state.success) {
      setFeatured(value);
    }
  };

  return (
    <div className="flex my-3">
      {/* language  */}
      <div className="me-10">
        <Label> Language ({lang}) </Label>
        <ToggleSwitch
          checked={changedLang}
          onChange={(value) => handleLangChange(value)}
        />
      </div>

      {/* featured  */}
      <div>
        <Label> Featured </Label>
        <ToggleSwitch
          checked={featured}
          onChange={(value) => handleFeaturedChange(value)}
        />
      </div>
    </div>
  );
};

export default LangAndFeatured;
