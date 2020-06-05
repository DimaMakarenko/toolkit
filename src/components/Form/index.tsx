import React from "react";
import { useForm } from "react-hook-form";
// types
import Input from "../Input";

type TForm = {
  title: string;
  project: string;
};

interface IForm {
  sumbit: (arg0: TForm) => void;
}

const Form: React.FC<IForm> = ({ sumbit }) => {
  const { register, handleSubmit, errors } = useForm<TForm>();

  const onSubmit = (data: any) => sumbit(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="title" register={register} required />
        {errors.title && <span>This field is required</span>}
        <Input label="project" register={register} required />
        {errors.project && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
