import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  desc_validation,
  value_validation,
} from "../utils/inputValidations";
import { GrMail } from "react-icons/gr";
import InputForm from "../components/Inputs";
import { ProductsServices } from "../services/ProductsServices";
import toast from "react-hot-toast";

export const RegisterProduct = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (data) => {
    const registerProduct = new ProductsServices();
    const response = await registerProduct.registerProduct(
      data.name,
      data.description,
      parseInt(data.saleValue)
    );

    if (response) {
      methods.reset();
      toast.success("Produto registrado com sucesso!", {
        position: "top-center",
      });
    }
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container mx-auto"
      >
        <div className=" mt-8 mx-auto gap-5 items-center justify-between">
          <InputForm {...name_validation} />
          <InputForm {...value_validation} />
          <InputForm type={""} {...desc_validation} />
        </div>
        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            <GrMail />
            Cadastrar
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
