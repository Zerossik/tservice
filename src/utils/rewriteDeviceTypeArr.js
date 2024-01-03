export const rewriteDeviceTypeArr = (arr) => {
  return arr.map(({ _id, deviceType }) => ({ _id: _id, type: deviceType }));
};
