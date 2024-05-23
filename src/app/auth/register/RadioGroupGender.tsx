import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import cn from "classnames";

const RadioGroupGender = () => {
  const [selectedOption, setSelectedOption] = useState("Male");
  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
    console.log(value);
  };

  return (
    <RadioGroup defaultValue="Male" onValueChange={handleOptionChange}>
      <Label className=" mb-4 text-[14px] text-[#979797]">Gender</Label>
      <div className="flex  items-center space-x-3 ">
        <RadioGroupItem value="Male" id="r1" />
        <Label
          htmlFor="r1"
          className={cn(" border-[#979797] text-[16px]", {
            "text-black": selectedOption === "Male",
            "text-[#979797]": selectedOption !== "Male",
          })}
        >
          Male
        </Label>
      </div>
      <div className="flex items-center space-x-3 mt-4 mb-3">
        <RadioGroupItem value="Female" id="r2" />
        <Label
          htmlFor="r2"
          className={cn("w-6 h-6 border-[#979797] text-[16px]", {
            "text-black": selectedOption === "Female",
            "text-[#979797]": selectedOption !== "Female",
          })}
        >
          Female
        </Label>
      </div>
    </RadioGroup>
  );
};

export default RadioGroupGender;
