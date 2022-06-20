import {
  Flex,
  VStack,
  Heading,
  Text,
  Container,
  HStack,
  Spacer,
  useBreakpointValue,
  Box,
  Center,
} from "@chakra-ui/react";

export default function Banner() {
  const isMobileLayout = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Flex height={["163px", "163px", "368.21px"]} width="100%">
      <Box
        h={["163px", "163px", "335px"]}
        width="100%"
        backgroundRepeat="no-repeat"
        backgroundImage="/images/banner_background.jpg"
        backgroundPosition="center"
        position="absolute"
      ></Box>

      <Flex
        px={["4", "4", "140px"]}
        zIndex={10}
        alignItems="center"
        width="100%"
        height="100%"
        justifyContent={["left", "left", "space-between"]}
      >
        <VStack alignItems="flex-start">
          <Heading
            size={["md", "md", "xl"]}
            color="light.info"
            fontWeight="500"
            lineHeight="54px"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>

          <Text
            fontSize={["sm", "sm", "xl"]}
            color="light.info"
            fontWeight="500"
            lineHeight="30px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        {isMobileLayout && (
          <img
            style={{
              marginBottom: "-117px",
              width: "417px",
              height: "270px",
            }}
            src="/images/airplane.svg"
            alt="Figura do avião dentro do banner"
          />
        )}
      </Flex>
    </Flex>
  );
}
