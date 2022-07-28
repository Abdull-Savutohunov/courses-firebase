import React from "react";

export const FilterContext = React.createContext({})

export const FilterProviders = ({children}) => {
  const [selectCity , setSelectCity] = React.useState(null)

  const value = React.useMemo(() => {
    return {
      setSelectCity,
      selectCity,
    }
  }, [selectCity])

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}