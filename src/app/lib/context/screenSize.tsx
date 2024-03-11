import { createContext } from "react";
import { Device } from "../definitions/enums";

export const ScreenSizeContext = createContext({
  deviceType: Device.NONE,
});
