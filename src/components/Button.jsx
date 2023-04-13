import React, { useState } from "react";
import ProuctsForm from './ProductsForm';

function Button() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button className="buttonForm" onClick={handleOpen}>Open Form</button>
      <ProuctsForm isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

export default Button;