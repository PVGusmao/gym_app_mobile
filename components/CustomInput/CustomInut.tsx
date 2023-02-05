import { Input } from "./styled";

type Props = {
  placeholder?: string;
  placeholderColor?: string;
  bgColor?: string;
  borderBotomColor?: string;
  fontColor?: string;
}

export function CustomInput(
  { 
    placeholder,
    placeholderColor,
    bgColor = 'white',
    borderBotomColor = 'white',
    fontColor = 'white',
  }: Props) {
    
    return (
      <>
        <Input
          borderBotomColor={borderBotomColor}
          bgColor={bgColor}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          fontColor={fontColor}
        />
      </>
    )
}