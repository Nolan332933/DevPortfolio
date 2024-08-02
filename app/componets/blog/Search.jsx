"use client";
import { Button, Select, TextInput } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import Language from "./Language";
import { CategoryContext } from "@/context/CategoryContext";
import { useParams } from "next/navigation";

const Search = ({ search, setSearch, handleSearch, lang }) => {
  const params = useParams();
  const { state: categoryState, getAllCategories } =
    useContext(CategoryContext);

  useEffect(() => {
    getAllCategories();
  }, [params.lang]);

  return (
    <React.Fragment>
      {/* pattern background */}
      <div className="pattern-bg">
        <div className="absolute top-5 right-0">
          <Language />
        </div>
        <div className="blog-text w-[400px] md:w-[600px]">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            {lang.search.title}
          </h1>
          <p className="text-slate-800 text-sm text-center mt-3">
            {lang.search.description}
          </p>
          <form onSubmit={handleSearch} className="w-full">
            <div className="flex my-3 justify-between items-center">
              <div className="w-full">
                <TextInput
                  type="search"
                  placeholder={lang.search.placeholder}
                  className="me-3"
                  onChange={(e) =>
                    setSearch({ ...search, title: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <Select
                  className="me-3"
                  onChange={(e) =>
                    setSearch({ ...search, categoryId: e.target.value })
                  }
                >
                  <option value=""> {lang.blog.selectCategory} </option>
                  {categoryState.categories.data.length > 0 &&
                    categoryState.categories.data.map((item) => (
                      <option value={item._id} key={item._id}>
                        {item?.name}
                      </option>
                    ))}
                </Select>
              </div>
              <div className="w-full">
                <Button type="submit" color="purple">
                  {lang.search.button}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
