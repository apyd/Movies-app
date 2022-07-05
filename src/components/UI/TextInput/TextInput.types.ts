import React, { ReactNode } from "react";

export interface IPropsTextInput {
    id: string,
    name: string,
    placeholder: string,
    label: string,
    errorText?: string
}