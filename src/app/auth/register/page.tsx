import React from "react";

import RegisterForm from "./RegisterForm";
import SocialsRegister from "./SocialsRegister";

const page = () => {
  return (
    // <form>
    //   <label htmlFor="email">Email:</label>
    //   <input id="email" name="email" type="email" required />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" name="password" type="password" required />

    //   <button formAction={signup}>Sign up</button>
    // </form>

    ///
    // <div className=" flex flex-col">
    //   <form className=" flex flex-col">
    //     <label htmlFor="email">Email:</label>
    //     <input id="email" name="email" type="email" required />

    //     <label htmlFor="password">Password:</label>
    //     <input id="password" name="password" type="password" required />

    //     <label htmlFor="confirmPassword">Confirm Password:</label>
    //     <input
    //       id="confirmPassword"
    //       name="confirmPassword"
    //       type="password"
    //       required
    //     />

    //     <fieldset>
    //       <legend>Gender:</legend>
    //       <label>
    //         <input type="radio" name="gender" value="male" required /> Male
    //       </label>
    //       <label>
    //         <input type="radio" name="gender" value="female" required /> Female
    //       </label>
    //     </fieldset>

    //     <label htmlFor="firstName">First Name:</label>
    //     <input id="firstName" name="firstName" type="text" required />

    //     <label htmlFor="lastName">Last Name:</label>
    //     <input id="lastName" name="lastName" type="text" required />

    //     <label htmlFor="dob">Date of Birth:</label>
    //     <input id="dob" name="dob" type="date" required />

    //     <label htmlFor="phone">Phone Number:</label>
    //     <input id="phone" name="phone" type="tel" required />

    //     <label htmlFor="sms">SMS Code:</label>
    //     <input id="sms" name="sms" type="text" required />

    //     <button type="submit" formAction={signup}>
    //       Sign up
    //     </button>
    //   </form>
    // </div>
    <div className="px-[10px] w-full justify-end items-end">
      <h1 className=" text-[28px] mt-[29px] font-bold mb-[24px]">
        Create Account
      </h1>
      <RegisterForm />
      <SocialsRegister />
    </div>
  );
};

export default page;
