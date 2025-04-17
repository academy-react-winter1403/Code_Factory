import { useState } from "react";

const useHeartColor = () => {
  const [heartColor, setHeartColor] = useState("#CCCCCC");
  const handelClickHeart = () => {
    console.log("clicked heart icon");
    setHeartColor(heartColor === "#CCCCCC" ? "#E52020" : "#CCCCCC");
    };
    return heartColor
};

export {useHeartColor};