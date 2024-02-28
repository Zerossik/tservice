export const removLeadTrailWhitespace = (objValues) => {
  Object.keys(objValues).forEach((e) => {
    objValues[e] = objValues[e].trim();
  });

  return objValues;
};
