import { Input } from "./styled";

type Props = {
  placeholder?: string;
  placeholderColor?: string;
}

export function CustomInput({ placeholder, placeholderColor }: Props) {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
    />
  )
}