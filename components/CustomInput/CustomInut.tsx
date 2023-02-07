import { Input } from "./styled";

type Props = {
  placeholder?: string;
  placeholderColor?: string;
  bgColor?: string;
  borderBotomColor?: string;
  fontColor?: string;
  secureTextEntry?:boolean;
  onChange?: Function;
}

export function CustomInput(
  { 
    placeholder,
    placeholderColor,
    bgColor = 'white',
    borderBotomColor = 'white',
    fontColor = 'white',
    secureTextEntry,
    onChange,
  }: Props) {
    
    return (
      <Input
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        borderBotomColor={borderBotomColor}
        bgColor={bgColor}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        fontColor={fontColor}
      />
    )
}