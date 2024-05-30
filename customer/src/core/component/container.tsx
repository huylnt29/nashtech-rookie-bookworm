import { Box } from "@chakra-ui/react";

export enum ContainerState {
  DEFAULT,
  ACTIVE,
}

export type ContainerProps = {
  children: any;
  width?: string;
  height?: string;
  onClick?: () => void;
  state?: ContainerState;
  className?: string;
};
const AppContainer = (props: ContainerProps) => {
  const setClassName = () => {
    if (!props.state) {
      return `bg-white p-6 shadow-lg shadow-slate-200 rounded-2xl border border-2 ${props.className} border-transparent`;
    } else {
      return `bg-white p-6 shadow-lg shadow-slate-200 rounded-2xl border border-2 ${props.className} border-slate-900`;
    }
  };

  return (
    <Box
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      className={setClassName()}
    >
      {props.children}
    </Box>
  );
};

export default AppContainer;
