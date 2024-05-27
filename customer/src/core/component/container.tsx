import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box className="bg-white p-8 shadow-lg shadow-slate-200 rounded-2xl">
      {children}
    </Box>
  );
};

export default AppContainer;
