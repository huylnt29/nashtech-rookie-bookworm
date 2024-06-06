import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

export type AppInputProps = {
  type: string;
  placeholder: string;
  value: string | undefined;
  leftIcon: any;
  width?: string | undefined;
  textColor?: string | undefined;
  focusBorderColor: string;
  onChange?: (event: any) => void;
  onEnter?: () => void;
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
        focusBorderColor={props.focusBorderColor}
        width={props.width}
        color={props.textColor}
        onChange={props.onChange}
        onKeyDown={(event) => {
          if (event.key == "Enter") props.onEnter?.call(this);
        }}
      />
    </InputGroup>
  );
};

export default AppInput;
