import { useState } from "react";
import PropTypes from "prop-types";
// style
// components
import { ConfirmContext } from "./context";
import { ConfirmWindow } from "../ConfirmWindow";

export const ConfirmServiceProvider = ({ children }) => {
  const [options, setOptions] = useState(null);

  const openConfirm = (options) => {
    setOptions(options);
    // return new Promise((resolve, reject) => {
    //   awaitingPromiseRef.current = { resolve, reject };
    // });
  };

  // const handleCloseConfirm = () => {
  //   // if (awaitingPromiseRef.current) {
  //   //   awaitingPromiseRef.current.reject();
  //   // }
  //   setOptions(null);
  // };

  // const handleOkConfirm = (value) => {
  //   // if (awaitingPromiseRef.current) {
  //   //   awaitingPromiseRef.current.resolve(value);
  //   // }
  //   setOptions(null);
  // };

  const handleClose = () => {
    setOptions(null);
  };

  const confirm = { openConfirm, handleClose };

  return (
    <>
      <ConfirmContext.Provider value={confirm}>
        {children}
      </ConfirmContext.Provider>

      {options && (
        <ConfirmWindow
          options={options}
          // buttonOk={handleOkConfirm}
          // buttonCancel={handleCloseConfirm}
          close={handleClose}
        />
      )}
    </>
  );
};

ConfirmServiceProvider.propTypes = {
  children: PropTypes.node,
};
