import { useLocation, useNavigate } from "react-router-dom";
import NavbarMd from "./NavbarMd";
import NavbarSm from "./NavbarSm";
const Header = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate()
  const routes = [
    { path: "/route/test", text: ["صفحه اصلی", "صفحه دوم", "صفحه سوم"], title: "مین" },
    { path: "/route", text: ["صفحه اصلی", "صفحه اول"], title: "اول" },
  ];
  const findedRoute = routes.find((el) => el.path == path);
  function navCustom(indexClick) {
    // console.log(indexClick + 1, path, path.split("/"));
    let nextRoute = "";
    path.split("/").forEach((el, index) => {
      console.log(el, index, indexClick + 1);
      if (index <= indexClick ) {
        nextRoute = nextRoute + `${index != 1? "/":""}${el}`;

        console.log(el, index, indexClick + 1, "can", nextRoute);
        // console.log(el, index);
      } else {
        console.log(el, index, indexClick + 1, "can't", nextRoute);
      }
    });
    navigate(nextRoute)
    // console.log(nextRoute,"final route");
  }
  //   console.log(path.split("/"));
  return (
    <div dir="rtl">
      {findedRoute && (
        <div>
          <h1>{findedRoute.title}</h1>
          <div className="flex">
            {findedRoute.text.map((el, index) => (
              <p
                onClick={() => navCustom(index)}
                className="flex bg-b lack  items-center mx-1 gap-2  "
              >
                {index == 0 ? "" : "  >  "}{" "}
                <p
                  className={
                    findedRoute.text.length - 1 == index
                      ? "text-[#5751E1] "
                      : ""
                  }
                >
                  {el}
                </p>
              </p>
            ))}
          </div>
        </div>
      )}

      {/* <NavbarMd />
      <NavbarSm /> */}
    </div>
  );
};
export default Header;
