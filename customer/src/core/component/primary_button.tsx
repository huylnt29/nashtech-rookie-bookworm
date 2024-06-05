import { Button } from "@nextui-org/react";

export type PrimaryButtonProps = {
  text?: string;
  onClick: any;
  leftIcon?: any;
  isIconOnly?: boolean;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  fitContent?: boolean;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      startContent={props.leftIcon}
      isIconOnly={props.isIconOnly}
      radius="lg"
      color={props.color}
      fullWidth={!props.fitContent}
      className="font-bold"
    >
      {props.text}
    </Button>
  );
};

export default PrimaryButton;
