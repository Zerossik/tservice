export const STATUS = Object.freeze({
  TAKEN: "Прийнято",
  WORKING: "В роботі",
  FINISHED: "Завершено",
  ISSUED: "Видано",
});

export const listOfStatus = [
  { _id: 1, status: "Прийнято" },
  { _id: 2, status: "В роботі" },
  { _id: 3, status: "Завершено" },
  { _id: 4, status: "Видано" },
];

export const getDataFromListOfStatus = () => {
  return listOfStatus.map((item) => item.status);
};
