import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

export type AppInputProps = {
  type: string;
  label: string;
  placeholder: string;
  value: string | undefined;
  leftIcon: any;
  width?: string | undefined;
  textColor?: string | undefined;
};

const AppInput = (props: AppInputProps) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" padding={3}>
        {props.leftIcon}
      </InputLeftElement>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        focusBorderColor="white"
        width={props.width}
        color={props.textColor}
      />
    </InputGroup>
  );
};

export default AppInput;
