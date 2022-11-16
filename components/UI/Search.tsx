import React from "react";
import type { ReactNode } from "react";

interface Props {
  PlaceHolder: any;
  Type: string;
}

export const Input = ({ PlaceHolder, Type }: Props) => {
  return (
    <div className="w-full  ">
      <input
        type=""
        className=" w-full bg-white border-black border"
        placeholder={PlaceHolder}
      />
    </div>
  );
};
