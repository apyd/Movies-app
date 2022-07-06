import React, { ReactNode } from "react";

export interface IPropsTextInput {
  id: string,
  name: string,
  value: string | number,
  onChange: any, // FIX IT
  placeholder: string,
  label: string,
  errorText?: string
}