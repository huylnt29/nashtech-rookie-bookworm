import { Box } from "@chakra-ui/react";

const AppContainer = ({ children, height }: any) => {
  return (
    <Box
      height={height}
      className="bg-white p-8 shadow-lg shadow-slate-200 rounded-2xl"
    >
      {children}
    </Box>
  );
};

export default AppContainer;
