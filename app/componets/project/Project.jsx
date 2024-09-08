"use client";
import Title from "../../utils/Title";
import React, { useEffect, useState } from "react";
import data from "../../../public/data/project";
import ProjectItem from "./ProjectItem";
import { usePathname } from "next/navigation";
import Button from "../../utils/Button";

const Project = () => {
  const perPage = 9;
  const pathname = usePathname();
  const [home, setHome] = useState(false);
  const [paginationState, setPaginationState] = useState({
    start: 0,
    end: perPage,
    currentPage: 1,
    nextBtnDisabled: false,
    prevBtnDisabled: false,
  });

  const totalPage = Math.ceil(data.length / perPage);

  useEffect(() => {
    pathname == "/" && setHome(true);
  }, [pathname]);

  const handlePagination = (page) => {
    var initStart = (page - 1) * perPage;
    var initEnd = page * perPage;
    setPaginationState({
      ...paginationState,
      start: initStart,
      end: initEnd,
      currentPage: page,
    });
  };

  useEffect(() => {
    if (paginationState.currentPage <= 1) {
      setPaginationState({
        ...paginationState,
        prevBtnDisabled: true,
        nextBtnDisabled: false,
      });
    }

    if (paginationState.currentPage == totalPage) {
      setPaginationState({
        ...paginationState,
        nextBtnDisabled: true,
        prevBtnDisabled: false,
      });
    }
  }, [paginationState.currentPage]);

  return (
    <div className="mt-10 min-h-screen">
      {/* title  */}
      <Title title="My Work" />
      <div className="flex flex-col">
        {/* project items  */}
        <div className="flex flex-wrap justify-between mt-10 mx-2 md:mx-20">
          {data
            .slice(paginationState.start, home ? 6 : paginationState.end)
            .map((item, index) => (
              <ProjectItem key={item.id} item={item} index={index} />
            ))}
        </div>

        {home ? (
          <div className="text-center">
            <Button link="/project" name="See All Projects" />
          </div>
        ) : (
          <div className="flex justify-around my-3">
            {/* pagination page */}
            <p className="text-center text-slate-600 mt-3">
              Showing Page {paginationState.currentPage} of {totalPage}
            </p>
            <div className="flex">
              {/* pagination previous button  */}
              <div className="me-2">
                <button
                  className={`p-2 bg-violet-700 rounded-md ${
                    paginationState.prevBtnDisabled
                      ? "cursor-not-allowed bg-violet-400"
                      : ""
                  }`}
                  onClick={() =>
                    handlePagination(paginationState.currentPage - 1)
                  }
                  disabled={paginationState.prevBtnDisabled}
                >
                  Previous
                </button>
              </div>
              {/* pagination next button  */}
              <div>
                <button
                  className={`p-2 bg-violet-700 rounded-md ${
                    paginationState.nextBtnDisabled
                      ? "cursor-not-allowed bg-violet-400"
                      : ""
                  }`}
                  onClick={() =>
                    handlePagination(paginationState.currentPage + 1)
                  }
                  disabled={paginationState.nextBtnDisabled}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
