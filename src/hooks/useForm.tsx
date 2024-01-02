import React from "react";

type UseFormProps = {
  initialValues: any;
};

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleChange,
  };
};

export default useForm;
