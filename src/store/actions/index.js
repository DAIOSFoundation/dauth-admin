// action creator 하나

export const addList = (list) => {
  return {
    type: "UPDATE_DATE",
    payload: list,
  };
};
