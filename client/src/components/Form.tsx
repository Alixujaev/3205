import { useContext } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TodoContext } from "./TodoProvider";
import { ContextType } from "../types";
import { GET_USERS } from "../api/todo";
import InputMask from "react-input-mask";

const Schema = z.object({
  email: z
    .string({
      required_error: "This field is required",
    })
    .email("Invalid email format"),
  number: z.string().optional(),
});

type FormData = z.infer<typeof Schema>;

const Form = () => {
  const { setUsers, setIsLoading, setError } =
    useContext<ContextType>(TodoContext);
  const form = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    GET_USERS({
      email: data.email,
      number: data.number?.replace(/-/g, ""),
    })
      .then((res) => {
        setUsers(res.data.users);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      action=""
      onSubmit={form.handleSubmit(onSubmit)}
      {...form}
      className="mt-10"
    >
      <div className="mb-3">
        <input
          type="email"
          className="px-4 py-2 bg-transparent rounded-xl outline-none border border-[#3E1671] text-white w-full"
          placeholder="Эл. адрес"
          {...form.register("email")}
        />
        <p className="text-red-400 text-xs text-left">
          {form.formState.errors.email?.message}
        </p>
      </div>

      <div className="mb-3">
        <InputMask
          mask="99-99-99"
          type="string"
          className="px-4 py-2 bg-transparent rounded-xl outline-none border border-[#3E1671] text-white w-full"
          placeholder="Number"
          {...form.register("number")}
        />

        <p className="text-red-400 text-xs text-left">
          {form.formState.errors.number?.message}
        </p>
      </div>

      <button
        className="h-10 rounded-xl bg-[#9E78CF] flex justify-center items-center w-full"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
