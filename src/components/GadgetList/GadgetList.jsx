import { useLoaderData } from "react-router-dom";
// components
import { GadgetItem } from "../GadgetItem";

export const GadgetList = () => {
  const gadgetList = useLoaderData();

  return (
    <div>
      <h1>GadgetListComponent</h1>
      <p>{gadgetList ? gadgetList : "Nothing to load!"}</p>
      <GadgetItem />
    </div>
  );
};
