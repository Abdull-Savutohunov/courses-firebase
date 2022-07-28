import React from "react";
import {FilterContext} from "../provider/FilterProviders";

export const useFilterData = () => {
  return React.useContext(FilterContext)
}