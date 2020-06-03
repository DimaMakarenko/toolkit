import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" ref={register} />
        <input name="exampleRequired" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
