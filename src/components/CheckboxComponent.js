// CheckboxComponent.js

import React from "react";

const CheckboxComponent = ({ id, name, label }) => {
  return (
    <div className="flex mt-2 gap-x-3 text-xs px-4">
      <input type="checkbox" id={id} name={name} className="border-gray-300" />
      <label htmlFor={id} className="text-[#334B4F]">
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
