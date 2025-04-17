import { LiaSearchSolid } from "react-icons/lia";

import FilterStyle from "../../Common/FilterComponnets/FilterStyle";

let categoryList = [
  { id: 1, name: "هنر وطراحی " },
  { id: 2, name: "تجارت" },
  { id: 3, name: "علم داده" },
  { id: 4, name: "توسعه" },
  { id: 5, name: "امور مالی" },
  { id: 6, name: "سلامت و تناسب اندام" },
  { id: 7, name: "سبک زندگی" },
  { id: 8, name: "امور مالی" },
  { id: 9, name: "امور مالی" },
  { id: 10, name: "امور مالی" },
  { id: 11, name: "امور مالی" }
];
let CLassTypeList = [
  { id: 1, name: "حضوری " },
  { id: 2, name: "انلاین" }
];

let DificultyLevelList = [
  { id: 1, name: "مبتدی " },
  { id: 2, name: "متوسط" },
  { id: 3, name: "پیشرفته" }
];

let teachersList = [
  { id: 1, name: "دیوید میلار " },
  { id: 2, name: "وید وارن " },
  { id: 3, name: "جنی ویلسون" },
  { id: 4, name: "جیکوب جونز" },
  { id: 5, name: "امور مالی" },
  { id: 6, name: "سلامت و تناسب اندام" },
  { id: 7, name: "سبک زندگی" },
  { id: 8, name: "امور مالی" },
  { id: 9, name: "امور مالی" },
  { id: 10, name: "امور مالی" },
  { id: 11, name: "امور مالی" }
];

const FilterPanel = () => {
  return (
    <div className=" hidden  w-full md:flex flex-col gap-6 border border-blue-700  ">
      <div className="w-full rounded-[6px] bg-[#F7F7F9] flex justify-between px-5 py-3.5 ">
        <input type="text" placeholder="جستجو" className="focus:outline-none" />
        <LiaSearchSolid fill="#5751E1" size={30} />
      </div>
      <FilterStyle title={"دسته بندی"} data={categoryList} numToShow={7} />
      <FilterStyle title={"نحوه برگزاری"} data={CLassTypeList} numToShow={9} />
      <FilterStyle
        title={"سطح مهارت"}
        data={DificultyLevelList}
        numToShow={3}
      />
                  <FilterStyle title={"مربیان دوره "} data={teachersList} numToShow={4} />
                  <FilterStyle>
                          price & rating
                  </FilterStyle>
    </div>
  );
};
export default FilterPanel;
