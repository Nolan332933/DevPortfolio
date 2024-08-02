"use client";
import React, { useContext, useState } from "react";
import "./app.css";
import Search from "./Search";
import Blogs from "./Blogs";
import FeaturedPost from "./FeaturedPost";
import { PostContext } from "@/context/PostContext";
import { useParams } from "next/navigation";
import { getLanguageData } from "@/app/helper/helper";

const Index = () => {
  const { state, searchPost, getAllPosts } = useContext(PostContext);
  const params = useParams();
  const lang = getLanguageData(params.lang);
  const [search, setSearch] = useState({
    title: "",
    categoryId: "",
    lang: params.lang,
    tag: "",
    status: true,
  });
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.title == "" && search.categoryId == "") {
      setShowResult(false);
      getAllPosts({ lang: params.lang, featured: false, status: true });
      console.log(state);
      return;
    }
    setShowResult(true);
    if (showResult) {
      searchPost(search);
    }
  };

  return (
    <React.Fragment>
      {/* search components  */}
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        lang={lang}
      />

      <div className="mx-10 md:mx-20">
        {/* All Blogs  */}
        <Blogs lang={lang} />

        {!showResult && <FeaturedPost lang={lang} />}
      </div>
    </React.Fragment>
  );
};

export default Index;
