import React, { ReactNode } from "react";

export interface IPropsTextInput {
  id: number,
  name: string,
  placeholder: string,
  label: string,
  errorText?: string
}