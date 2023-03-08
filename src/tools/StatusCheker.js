export const isAdmin = (status) => {
  return status == "creator" || status == "administrator";
};

export const isCreator = (status) => {
  return status == "creator";
};
