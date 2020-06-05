import React from "react";

interface IInput {
  label: string;
  register: Function;
  required: boolean;
}

const Input: React.FC<IInput> = ({ label, register, required }) => {
  return (
    <>
      <label>{label}</label>
      <input name={label} ref={register({ required })} />
    </>
  );
};

export default Input;
