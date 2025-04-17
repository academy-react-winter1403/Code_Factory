import { div } from "framer-motion/client";
import { useState } from "react";

const FilterStyle = ({ title, data, numToShow, children }) => {
  const [count, setCount] = useState(numToShow);

  console.log(numToShow, count);
  return (
    <div className="bg-[#F7F7F9] rounded-[10px] lg:p-7 md:4 md:2 hidden md:block">
      <h1 className="text-[#161439] text-xl font-semibold mb-4  "> {title} </h1>
      {data ? (
        <>
          <div>
            {data?.map(
              (el, index) =>
                index < count && (
                  <div key={el.id}>
                    <input type="checkbox" />
                    <label
                      key={el.id}
                      htmlFor={el.id}
                      className="mx-2 text-[16px] font-normal text-[#6D6C80]"
                    >
                      {el.name}
                    </label>
                  </div>
                )
            )}
          </div>
          {numToShow  &&numToShow<data.length&& (
            <>
              {count == numToShow ? ( 
                <p
                  onClick={() => setCount(data.length)}
                  className="text-purple-800 mt-4"
                >
                  نمایش بیشتر
                </p>
               ) : (
                <p
                  onClick={() => setCount(numToShow)}
                  className="text-purple-800 mt-4"
                >
                  نمایش کمتر
                </p>
              )}
            </>
          )}
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default FilterStyle;
