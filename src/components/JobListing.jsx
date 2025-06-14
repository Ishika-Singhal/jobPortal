"use client";
import React, { useEffect, useState } from "react";
import PostNewJob from "./PostNewJob";
import RecruiterJobCard from "./RecruiterJobCard";
import CandidateJobCard from "./CandidateJobCard";
import { filterMenuData, formUrlQuery } from "@/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { Label } from "./ui/label";
import { useRouter, useSearchParams } from "next/navigation";

const JobListing = ({
  user,
  profileInfo,
  jobList,
  jobApplication,
  filterCategories,
}) => {
  const [filterParams, setFilterParams] = useState({});
  const searchParams = useSearchParams()
  const router = useRouter()

  const filterMenu = filterMenuData.map((item) => ({
    id: item.id,
    name: item.name,
    options: [
      ...new Set(filterCategories.map((listItem) => listItem[item.id])),
    ],
  }));

  function handleFilter(id, option) {
    let cpyFilters = { ...filterParams };
    const idxofCurrentsection = Object.keys(cpyFilters).indexOf(id);
    if (idxofCurrentsection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [id]: [option],
      };
    } else {
      const idxofCurrentoption = cpyFilters[id].indexOf(option);
      if (idxofCurrentoption === -1) {
        cpyFilters[id].push(option);
      } else {
        cpyFilters[id].splice(idxofCurrentoption, 1);
      }
    }
    setFilterParams(cpyFilters);
    sessionStorage.setItem("filterParams", JSON.stringify(cpyFilters));
  }

  useEffect(()=>{
    setFilterParams(JSON.parse(sessionStorage.getItem('filterParams')))
  },[]);

  useEffect(()=>{
     if(filterParams && Object.keys(filterParams).length > 0){
       let URL ='';
       URL = formUrlQuery({
         params : searchParams.toString(),
         dataToAdd: filterParams,
       })
       router.push(URL),{scroll:false}
     }
  },[filterParams,searchParams])
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-between items-baseline border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-500">
          {profileInfo?.role === "candidate"
            ? "Explore All Jobs"
            : "Jobs Dashboard"}
        </h1>
        <div className="flex items-center">
          {profileInfo?.role === "candidate" ? (
            <Menubar>
              {filterMenu.map((filtermenu) => (
                <MenubarMenu>
                  <MenubarTrigger>{filtermenu.name}</MenubarTrigger>
                  <MenubarContent>
                    {filtermenu.options.map((option, optionidx) => (
                      <MenubarItem
                        key={optionidx}
                        className="flex items-center"
                        onClick={() => handleFilter(filtermenu.id, option)}
                      >
                        <div
                          className={`h-4 w-4 border rounded border-gray-900 ${
                            filterParams &&
                            Object.keys(filterParams).length > 0 &&
                            filterParams[filtermenu.id] &&
                            filterParams[filtermenu.id].indexOf(option) > -1
                              ? "bg-black"
                              : ""
                          }`}
                        />
                        <Label className="ml-3 cursor-pointer text-sm text-gray-600">
                          {option}
                        </Label>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              ))}
            </Menubar>
          ) : (
            <PostNewJob profileInfo={profileInfo} user={user} />
          )}
        </div>
      </div>
      <div className="pt-6 pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div className="lg:col-span-4">
            <div className="container mx-auto p-9 space-y-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {jobList && jobList.length > 0
                  ? jobList.map((jobItem) =>
                      profileInfo?.role === "candidate" ? (
                        <CandidateJobCard
                          jobItem={jobItem}
                          keys={jobItem._id}
                          profileInfo={profileInfo}
                          jobApplication={jobApplication}
                        />
                      ) : (
                        <RecruiterJobCard
                          jobItem={jobItem}
                          keys={jobItem._id}
                          profileInfo={profileInfo}
                          jobApplication={jobApplication}
                        />
                      )
                    )
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
