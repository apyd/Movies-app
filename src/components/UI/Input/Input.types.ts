import React, { ReactNode } from "react";

export interface IPropsInput {
  id: string,
  name: string,
  type: string,
  value: string | number,
  touched: boolean,
  onBlur: any, //FIX IT
  onChange: any, // FIX IT
  placeholder: string,
  label: string,
  error: any, //FIX IT
}
