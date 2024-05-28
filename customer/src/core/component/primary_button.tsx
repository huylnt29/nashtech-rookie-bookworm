import { Button } from "@nextui-org/react";

export type PrimaryButtonProps = {
  text: string;
  onClick: any;
  colorScheme: string;
  leftIcon?: any;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      startContent={props.leftIcon}
      radius="lg"
      color={props.color}
    >
      {props.text}
    </Button>
  );
};

export default PrimaryButton;
