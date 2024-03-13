export const selectSettingsIsLoading = ({ settingsUser }) =>
  settingsUser.isLoading;
export const selectDeviceManufacturers = ({ settingsUser }) =>
  settingsUser.deviceManufacturers;
export const selectDeviceTypes = ({ settingsUser }) => settingsUser.deviceTypes;
export const selectStatuses = ({ settingsUser }) => settingsUser.statuses;
export const selectTableSettings = ({ settingsUser }) =>
  settingsUser.tableSettings;
