import React, { Ref } from "react"
import styles from "./styles.module.scss"

interface Props{
  inputName: string;
  type?: "text" | "number" | "email" | "password";
  errors?: string[];
  label: string;
  inputRef?: Ref<HTMLInputElement>;
}

export default function CustomInput({inputName, type = "text", errors, label, inputRef}: Props): JSX.Element {
  return (
    <>
      <label htmlFor={inputName} className={styles.customLabel}>{label}</label>
      <input name={inputName} id={inputName} type={type} className={styles.customInput} ref={inputRef}/>
    </>
  )
}