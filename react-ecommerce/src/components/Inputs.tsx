import cn from "classnames";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Inputs } from "../models/InputsProps";

const InputForm: FC<Inputs> = ({
  name,
  label,
  type,
  id,
  placeholder,
  multiline,
}) => {
  const { register } = useFormContext();

  const input_tailwind =
    "bg-white p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60";

  return (
    <div className={cn("flex flex-col w-full gap-2")}>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      {multiline ? (
        <textarea
          id={id}
          className={cn(input_tailwind, "min-h-[10rem] max-h-[20rem] resize-y")}
          placeholder={placeholder}
          {...register(name)}
        ></textarea>
      ) : (
        <>
          <input
            id={id}
            type={type}
            className={cn(input_tailwind)}
            placeholder={placeholder}
            {...register(name)}
          />
        </>
      )}
    </div>
  );
};

export default InputForm;
