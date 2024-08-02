import { CategoryContext } from "@/context/CategoryContext";
import { PostContext } from "@/context/PostContext";
import { Button, Datepicker, Select, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";

const Search = () => {
  const { searchPost } = useContext(PostContext);
  const { state: categoryState } = useContext(CategoryContext);
  const [searchData, setSearchData] = useState({
    title: "",
    tag: "",
    lang: "",
    categoryId: "",
    createAt: "",
    status: "",
  });

  // search posts

  const handleInputChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchPost(searchData);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-between">
        <TextInput
          type="search"
          placeholder="Search Post"
          className="w-full me-3"
          name="title"
          onChange={(e) => handleInputChange(e)}
        />
        <TextInput
          placeholder="Enter tag"
          className="w-full me-3"
          name="tag"
          onChange={(e) => handleInputChange(e)}
        />
        <Datepicker
          placeholder="Enter name"
          className="w-full me-3"
          name="createdAt"
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <Select
          className="w-full me-3"
          name="categoryId"
          onChange={(e) => handleInputChange(e)}
        >
          <option value=""> Select Category </option>
          {categoryState.categories.data.length > 0 &&
            categoryState.categories?.data.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
        </Select>
        <Button type="submit"> Search </Button>
      </div>
    </form>
  );
};

export default Search;
