export const removLeadTrailWhitespace = (objValues) => {
  Object.keys(objValues).forEach((e) => {
    objValues[e] = String(objValues[e]).trim();
  });

  return objValues;
};
