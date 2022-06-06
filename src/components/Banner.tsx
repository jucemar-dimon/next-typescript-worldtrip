import {
  Flex,
  VStack,
  Heading,
  Text,
  Container,
  HStack,
  Spacer,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex height={368.21} width="100%" paddingBottom={7.42}>
      <Flex
        h={335}
        width="100%"
        backgroundRepeat="no-repeat"
        backgroundImage="/images/banner_background.jpg"
        backgroundPosition="center"
        position="absolute"
      />
      <Container maxWidth="calc(100% - 280px)" zIndex={1}>
        <Flex
          alignItems="center"
          width="100%"
          height="100%"
          justifyContent="space-between"
        >
          <VStack alignItems="flex-start">
            <Heading
              size="xl"
              color="light.info"
              fontWeight="500"
              width={420}
              lineHeight="54px"
            >
              5 Continentes, infinitas possibilidades.
            </Heading>

            <Text
              fontSize="xl"
              color="light.info"
              fontWeight="500"
              width={524}
              lineHeight="30px"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>

          <img
            style={{
              marginBottom: "-117px",
              width: "417px",
              height: "270px",
            }}
            src="/images/airplane.svg"
            alt="Figura do avião dentro do banner"
          />
        </Flex>
      </Container>
    </Flex>
  );
}
