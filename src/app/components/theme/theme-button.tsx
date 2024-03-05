import { useContext, useEffect, useState } from "react";
import MyThemeContext from "@/app/lib/context/theme";
import { cn } from "@/app/lib/utils";
import { Player } from "@lottiefiles/react-lottie-player";

export default function ThemeButton() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [isChecked, setIsChecked] = useState<boolean>(true);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  useEffect(() => {
    themeCtx.isDarkMode ? setIsChecked(true) : setIsChecked(false);
  }, [themeCtx.isDarkMode]);

  return (
    <div className="fixed left-5 top-5 z-[99999]">
      <input
        type="checkbox"
        id="toggle"
        onClick={() => {
          toggleThemeHandler();
          setIsChecked(!isChecked);
        }}
        className="hidden group"
      />

      <label
        id="switch"
        htmlFor="toggle"
        className={cn(
          "my-0 mx-auto relative block w-[110px] h-[50px]  rounded-full cursor-pointer transition duration-300",
          !isChecked ? "bg-[rgb(241,161,12)]" : " bg-[#212121]"
        )}
      >
        <div
          id="circle"
          className={cn(
            "w-[40px] h-[40px] bg-[#fff] relative top-[5px]  border-[10px] border-[#fff] rounded-full transition-all duration-500 z-[2]",
            !isChecked ? "left-[5px]" : "left-[65px]"
          )}
        ></div>
        <div
          id="text"
          className="absolute top-[50%] -translate-y-1/2 text-[#fff] text-2xl ml-[45px] mt-[5px] z-[1]"
        >
          <Player
            className="w-[80px] h-[80px]"
            src="https://lottie.host/c8d1fbe1-b068-4fd7-bf12-f7357fc64ff4/o5s5FfHd5O.json"
            background="transparent"
            speed={1}
            direction={1}
            loop
            autoplay
          ></Player>
        </div>
        <div
          id="text2"
          className="absolute top-[50%] -translate-y-1/2 text-[#fff] text-2xl ml-[5px] z-[1] text-right"
        >
          <Player
            className="w-[50px] h-[50px]"
            src="https://lottie.host/a1ba4eeb-3760-4a4d-b777-ae5da68e1903/DukCwKDwb2.json"
            background="transparent"
            speed={1}
            direction={1}
            loop
            autoplay
          ></Player>
        </div>
      </label>
    </div>
  );
}
