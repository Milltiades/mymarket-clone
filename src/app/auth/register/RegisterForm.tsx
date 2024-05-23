"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import RadioGroupGender from "./RadioGroupGender";

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { signUp } from "./actions";
import Image from "next/image";
import clsx from "clsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z
  .object({
    email: z.string().email({ message: "Enter the Email" }),
    password: z.string().min(8, {
      message:
        "Password must contain at least 8 characters, upper and lower case letters and number(s).",
    }),
    confirmPassword: z.string().min(8, {
      message: "Passwords do not match",
    }),
    // gender: z.string().refine((gender) => ["male", "female"].includes(gender), {
    //   message: "Choose gender",
    // }),
    name: z
      .string()
      .min(1, { message: "Write first name" })
      .regex(/^[a-zA-Z]+$/, {
        message: "Must contain only characters",
      }),
    lastName: z
      .string()
      .min(1, { message: "Write Last name" })
      .regex(/^[a-zA-Z]+$/, {
        message: "Must contain only characters",
      }),
    dob: z.string().min(1, { message: "Choose the year of birth" }),
    phone: z
      .string()
      .min(9, { message: "Enter the phone number" })
      .regex(/^[0-9]*$/, {
        message: "Must contain only numbers",
      }),
    sms: z
      .string()
      .min(4)
      .max(4)
      .regex(/^[0-9]*$/, {
        message: "Must contain only numbers",
      }),
    rules: z
      .boolean()
      .default(false)
      .refine((val) => val === true, {
        message: "Agree to the site Terms and Conditions",
      }),
    privacy: z.boolean(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastName: "",
      phone: "",
      dob: "",
      rules: false,
      privacy: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const result = await signUp(data);

      const { error } = JSON.parse(result);
      console.log("result:", error);
      if (!error) {
        console.log("Registration Successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyles =
    "w-full py-[14px] px-[20px] h-[53px] rounded-lg placeholder:text-[16px] border-[#D4D4D4]";
  const checkboxStyles = " w-[25px] h-[25px] rounded-lg border-[#D4D4D4]";
  const checkboxWithTextStyles = "flex flex-row gap-3";

  const yearsArray = [
    1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945,
    1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957,
    1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
    1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
    1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];

  return (
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl className={clsx(inputStyles)}>
                  <Input
                    placeholder="Repeat the password"
                    {...field}
                    type="password"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <RadioGroupGender />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl className={clsx(inputStyles)}>
                  <Input placeholder="Name" {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl className={clsx(inputStyles)}>
                  <Input placeholder="Last Name" {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormControl className={clsx(inputStyles)}>
                  <Controller
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full py-[14px] px-[20px] h-[53px] rounded-lg text-[16px] border-[#D4D4D4] text-[#757575]">
                          <SelectValue placeholder="Choose the year of birth">
                            {field.value}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {yearsArray.map((y) => (
                              <SelectItem
                                key={y}
                                value={y.toString()}
                                className=" text-[#757575]"
                              >
                                {y}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl className={clsx(inputStyles)}>
                  <Input placeholder="Phone Number" {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sms"
            render={({ field }) => (
              <FormItem>
                <FormControl className={clsx(inputStyles)}>
                  <Input placeholder="SMS code" {...field} type="text" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rules"
            render={({ field }) => (
              <FormItem className={clsx(checkboxWithTextStyles)}>
                <FormControl className={clsx(checkboxStyles)}>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>
                  I agree with{" "}
                  <Link className=" text-[#3C74FF]" href={"#"}>
                    Terms and Conditions
                  </Link>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className={clsx(checkboxWithTextStyles)}>
                <FormControl className={clsx(checkboxStyles)}>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>
                  I agree with{" "}
                  <Link className=" text-[#3C74FF]" href={"#"}>
                    Privacy Policy
                  </Link>
                </FormLabel>
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
  );
};

export default RegisterForm;
