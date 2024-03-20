"use client";
import CategoryBar from "@/components/category/CategoryBar";
import FilteredFoods from "@/components/category/FilteredFoods";

import SearchBox from "@/components/layout/SearchBox";
import { useSearchParams } from "next/navigation";
import React from "react";

const categoryPage = () => {
  const params = useSearchParams();
  const searchKeyword = params.get("search");

  //카테고리바에서는 state만 여기로 넘겨주면됨
  //db에서 키워드로 한번 가른 데이터 넘겨주고

  return (
    <>
      <div className="w-3/5 m-auto min-w-fit">
        <div className="flex flex-col justify-center w-3/4 m-auto">
          <CategoryBar />
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="font-bold text-2xl mb-10">
            <span className="text-rose-500">{searchKeyword}</span> 검색결과
          </div>
          <FilteredFoods />
        </div>
      </div>
    </>
  );
};

export default categoryPage;
