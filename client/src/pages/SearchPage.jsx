import React from "react";
import Gallery from "../components/Gallery";
import { useSearchParams } from "react-router";

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  const serach = searchParams.get("search");
  return <Gallery search={serach} />;
};

export default SearchPage;
