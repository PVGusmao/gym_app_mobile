import { TouchableOpacityProps } from "react-native";
import { Button, Title } from "./style";

type Props = TouchableOpacityProps & {
  bgColor?: 'OUTLINE' | 'FILLED';
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  bRadius?: number;
  title: string;
}

export function ButtonComponent(
  {
    bgColor = 'FILLED',
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    bRadius = 0,
    title,
    ...rest
  }: Props) {
  return (
    <Button
      bgColor={bgColor}
      mt={mt}
      mb = {mb}
      ml = {ml}
      mr = {mr}
      bRadius={bRadius}
      {...rest}
    >
      <Title>{title}</Title>
    </Button>
  )
}