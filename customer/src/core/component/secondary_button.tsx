import { Button } from "@nextui-org/react";

export type SecondaryButtonProps = {
  text: string;
  onClick: any;
  leftIcon?: any;
  isIconOnly?: boolean;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  fitContent?: boolean;
};

const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      startContent={props.leftIcon}
      isIconOnly={props.isIconOnly}
      radius="lg"
      variant="bordered"
      color={props.color}
      fullWidth={!props.fitContent}
      className="font-bold"
    >
      {props.text}
    </Button>
  );
};

export default SecondaryButton;
