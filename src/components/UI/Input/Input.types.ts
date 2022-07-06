import React, { ReactNode } from "react";

export interface IPropsInput {
  id: string,
  name: string,
  type: string,
  value: string | number,
  onChange: any, // FIX IT
  placeholder: string,
  label: string,
  error: any, //FIX IT
}
