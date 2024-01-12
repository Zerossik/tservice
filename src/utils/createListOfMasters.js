export const createListOfMasters = (list) => {
  return list.map(({ _id, firstName, lastName }) => ({
    _id,
    masterName: `${lastName} ${firstName}`,
  }));
};
