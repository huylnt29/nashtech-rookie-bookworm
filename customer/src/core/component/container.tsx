import { Box } from "@chakra-ui/react";

const AppContainer = ({ children, width, height, className, onClick }: any) => {
  return (
    <Box
      onClick={onClick}
      width={width}
      height={height}
      className={`bg-white p-6 shadow-lg shadow-slate-200 rounded-2xl ${className}`}
    >
      {children}
    </Box>
  );
};

export default AppContainer;
