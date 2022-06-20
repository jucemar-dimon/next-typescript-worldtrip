import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

export default function Header() {
  const responsiveWidth = useBreakpointValue({
    sm: "184px",
    base: "81px",
  });
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height={["50px", "50px", "100px"]}
      width="100%"
    >
      <img
        src="/images/logo.svg"
        alt="Logotipo da World Trip"
        width={responsiveWidth}
      />
    </Flex>
  );
}
