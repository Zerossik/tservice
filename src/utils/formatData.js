import dateFormat from "dateformat";

const formatDate = (date) => {
  return dateFormat(date, "dd.mm.yyyy");
};

const formatPhoneNumber = (phoneNumber) => {
  const template = "xxx (xx) xxx-xx-xx";
  let formatedNumber = "";
  let num = 0;

  for (let i = 0; i < template.length; i++) {
    if (template[i] === "x") {
      formatedNumber = formatedNumber + phoneNumber[num];
      num++;
      continue;
    }

    formatedNumber = formatedNumber + template[i];
  }

  return formatedNumber;
};

export const formatData = (entity, value, idx) => {
  if (entity === "countNumber") {
    return Number(idx + 1);
  }

  if (entity === "createdAt" || entity === "issueDate") {
    return formatDate(value);
  }

  if (entity === "phoneNumber") {
    return formatPhoneNumber(value);
  }

  return value;
};
