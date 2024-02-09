"use client";

import { useState } from "react";
import PageWrapper from "../components/transitions/fade";
import { techData } from "../lib/data/tech-stack-data";
import { TechStackDataType } from "../lib/definitions/types";

export default function WorkPage() {
  const [filteredData, setFilteredData] = useState([]);
  let arr: TechStackDataType[] = [];

  // const handleUseCase = (chosenUseCase: any) => {
  //   arr = [];
  //   techData.forEach((data) => {
  //     data.usecase.forEach((useCase) => {
  //       if (!arr.includes(data) && chosenUseCase.includes(useCase)) {
  //         arr.push(data);
  //       }
  //     });
  //   });
  //   setFilteredData(arr);
  // };

  function findIntersection(arr1: string[], arr2: string[]) {
    return arr1.filter((element) => arr2.includes(element));
  }
  const handleUseCase = (chosenUseCase: string[]) => {
    arr = [];

    techData.forEach((data) => {
      const intersection = findIntersection(chosenUseCase, data.usecase);
      if (intersection.length > 0) {
        arr.push(data);
      }
    });
    console.log(arr);
  };

  return (
    <PageWrapper>
      <section className="flex justify-center items-center flex-col">
        <div className="max-w-[600px] xl:max-w-[900px] flex justify-center flex-col items-center font-calc">
          <h1 className="text-4xl pb-10 sm:text-6xl">Day to day tech stack</h1>
        </div>
        <div className="flex gap-10">
          <select>
            <option
              onClick={() => {
                handleUseCase(["commercial"]);
              }}
            >
              Commercial
            </option>
            <option
              onClick={() => {
                handleUseCase(["personal"]);
              }}
            >
              Personal
            </option>
            <option
              onClick={() => {
                handleUseCase(["commercial", "personal"]);
              }}
            >
              Both
            </option>
          </select>
        </div>
        <div>
          <ul>
            {filteredData.map((data, index) => {
              return <li key={index}>{data.name}</li>;
            })}
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
}
//  if(X is in Y) => render X
