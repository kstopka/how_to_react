import { useState } from "react";

export const useToggler = () => {
  const [toggler, setToggler] = useState(false);

  const handleToggle = (close?: boolean) => {
    if (!close) {
      return setToggler(false);
    }
    setToggler((prevState) => !prevState);
  };

  return { toggler, handleToggle };
};
