import { Button } from "@nextui-org/react";

export type SecondaryButtonProps = {
  text: string;
  onClick: any;
  colorScheme: string;
  leftIcon?: any;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
};

const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      startContent={props.leftIcon}
      radius="lg"
      variant="flat"
      color={props.color}
      className="font-bold"
    >
      {props.text}
    </Button>
  );
};

export default SecondaryButton;
