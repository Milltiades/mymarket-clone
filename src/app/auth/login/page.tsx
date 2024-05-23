import React from "react";

import LoginForm from "./LoginForm";
import SocialsLogin from "./SocialsLogin";
import { login } from "./actions";

const page = () => {
  return (
    <div className="px-[10px] w-full justify-end items-end">
      {/* <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
      </form> */}
      <h1 className=" text-[28px] mt-[29px] font-bold mb-[24px]">
        Authorization
      </h1>
      <LoginForm />
      <SocialsLogin />
    </div>
  );
};

export default page;
