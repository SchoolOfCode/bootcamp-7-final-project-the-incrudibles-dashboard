import React, { useState, useContext, createContext } from "react";
import { useResponsesData } from "./useSWR";

const DataContext = createContext();

export function DataProvider({ children }) {
  const { response } = useResponsesData();
  const [data, setData] = useState(response.payload);

  function filterDataByCohort(cohortNumber) {
    setData(
      response.payload.filter((graduate) => graduate.cohort === cohortNumber)
    );
    return;
  }

  function resetFilter() {
    setData(response.payload);
    return;
  }

  function filterDataByName(name) {
    setData(
      response.payload.filter((graduate) =>
        graduate.graduatename.includes(name)
      )
    );
    return;
  }

  // function filterMostRecentResponses() {
  //   setData(
  //     data.map((graduate) => {
  //       return {
  //         ...graduate,
  //         responses: graduate.responses.reduce((prev, curr) => {
  //           if (curr.timestamp > prev.timestamp) {
  //             return curr;
  //           } else return prev;
  //         }),
  //       };
  //     })
  //   );
  // }

  return (
    <DataContext.Provider
      value={{
        data,
        filterDataByCohort,
        resetFilter,
        filterDataByName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
