import {
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SlideShow from "../components/SlideShow";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />

      <Center width={90} margin="auto" marginTop="80px">
        <Divider
          orientation="horizontal"
          borderColor="dark.headingsAndTexts"
          borderWidth={2}
        />
      </Center>
      <Center marginTop="52px">
        <Heading
          textAlign="center"
          fontWeight="500"
          color="dark.headingsAndTexts"
          wordBreak="break-word"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Center>
      <Center marginTop="52px">
        <SlideShow />
      </Center>
    </Flex>
  );
}
