import { COLORCHENGED, STATUS } from "./actionTypes";

export const colorChenged = (color, changeType) => {
  return {
    type: COLORCHENGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const status = (status) => {
  return {
    type: STATUS,
    payload: status,
  };
};
