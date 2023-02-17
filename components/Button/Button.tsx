import { TouchableOpacityProps } from "react-native";
import { Button, Title } from "./style";

type Props = TouchableOpacityProps & {
  bgColor?: 'OUTLINE' | 'FILLED';
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  bRadius?: number;
  title?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  onPress?: Function;
}

export function ButtonComponent(
  {
    bgColor = 'FILLED',
    fontSize = 0,
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    bRadius = 0,
    title,
    width,
    height,
    onPress,
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
      width={width}
      height={height}
      onPress={onPress}
      {...rest}
    >
      <Title fontSize={fontSize}>{title}</Title>
    </Button>
  )
}