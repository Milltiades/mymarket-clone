"use client";
import React from "react";
import Image from "next/image";
import { login } from "./actions";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "../register/actions";
import clsx from "clsx";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Enter the Email" }),
  password: z.string().min(8, {
    message:
      "Password must contain at least 8 characters, upper and lower case letters and number(s).",
  }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const result = await login(data);
    try {
      const { error } = JSON.parse(result);
      if (error?.message) {
        console.log(error.message);
      } else {
        console.log("success");
        router.push("/private");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyles =
    "w-full py-[14px] px-[20px] h-[53px] rounded-lg placeholder:text-[16px] border-[#D4D4D4]";
  return (
    <div>
      {/* <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
      </form> */}
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" w-full flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className={clsx(inputStyles)}>
                    <Input placeholder="Email" {...field} type="email" />
                  </FormControl>

                  {form.formState.errors.email && (
                    <div className="flex gap-3 items-center ">
                      <Image
                        src="/icons/error.png"
                        alt="error"
                        width={25}
                        height={25}
                      />
                      <span className=" text-[#FF0000]">
                        {form.formState.errors.email.message}
                      </span>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl className={clsx(inputStyles)}>
                    <Input placeholder="Password" {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className=" w-full bg-[#3C74FF] py-[14px] px-[25px] my-4 rounded-[78px] h-[49px]"
            type="submit"
            onClick={() => console.log(form.formState.errors)}
          >
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
