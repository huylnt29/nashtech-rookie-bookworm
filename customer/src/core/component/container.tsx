import { Box } from "@chakra-ui/react";

const AppContainer = ({ children, height, className }: any) => {
  return (
    <Box
      height={height}
      className={`bg-white p-6 shadow-lg shadow-slate-200 rounded-2xl ${className}`}
    >
      {children}
    </Box>
  );
};

export default AppContainer;
