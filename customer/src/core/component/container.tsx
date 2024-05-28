import { Box } from "@chakra-ui/react";

const AppContainer = ({ children, height, className, onClick }: any) => {
  return (
    <Box
      onClick={onClick}
      height={height}
      className={`bg-white p-6 shadow-lg shadow-slate-200 rounded-2xl ${className}`}
    >
      {children}
    </Box>
  );
};

export default AppContainer;
