import { Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex justifyContent="center" alignItems="center" h={100}>
      <img src="/images/logo.svg" alt="Logotipo da World Trip" />
    </Flex>
  );
}
