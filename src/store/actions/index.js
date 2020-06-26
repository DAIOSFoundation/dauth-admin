// action creator 하나

export const addList = (list) => {
  return {
    type: "ADD_SONG",
    payload: list,
  };
};
