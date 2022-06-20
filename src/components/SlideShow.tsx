import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function SlideShow() {
  return (
    <Flex
      w="100%"
      mx="auto"
      maxWidth="1240px"
      mb={["5", "10"]}
      height={["250px", "450px"]}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            position="relative"
          >
            <Box zIndex="1" textAlign="center">
              <Heading color="light.info" fontSize="48px">
                OCEANIA
              </Heading>
              <Text color="light.info" fontSize="24px">
                O mais louco de todos.
              </Text>
            </Box>
            <Box
              zIndex="0"
              position="absolute"
              width="100%"
              height="100%"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              bgImage="url(/images/slide_show/africa.jpg)"
              filter="brightness(0.65)"
            ></Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            position="relative"
          >
            <Box zIndex="1" textAlign="center">
              <Heading color="light.info" fontSize="48px">
                OCEANIA
              </Heading>
              <Text color="light.info" fontSize="24px">
                O mais louco de todos.
              </Text>
            </Box>
            <Box
              zIndex="0"
              position="absolute"
              width="100%"
              height="100%"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              bgImage="url(/images/slide_show/asia.jpg)"
              filter="brightness(0.6)"
            ></Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            position="relative"
          >
            <Box zIndex="1" textAlign="center">
              <Heading color="light.info" fontSize="48px">
                OCEANIA
              </Heading>
              <Text color="light.info" fontSize="24px">
                O mais louco de todos.
              </Text>
            </Box>
            <Box
              zIndex="0"
              position="absolute"
              width="100%"
              height="100%"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              bgImage="url(/images/slide_show/europe.jpg)"
              filter="brightness(0.6)"
            ></Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            position="relative"
          >
            <Box zIndex="1" textAlign="center">
              <Heading color="light.info" fontSize="48px">
                OCEANIA
              </Heading>
              <Text color="light.info" fontSize="24px">
                O mais louco de todos.
              </Text>
            </Box>
            <Box
              zIndex="0"
              position="absolute"
              width="100%"
              height="100%"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              bgImage="url(/images/slide_show/north_america.jpg)"
              filter="brightness(0.6)"
            ></Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            position="relative"
          >
            <Box zIndex="1" textAlign="center">
              <Heading color="light.info" fontSize="48px">
                OCEANIA
              </Heading>
              <Text color="light.info" fontSize="24px">
                O mais louco de todos.
              </Text>
            </Box>
            <Box
              zIndex="0"
              position="absolute"
              width="100%"
              height="100%"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              bgImage="url(/images/slide_show/south_america.jpg)"
              filter="brightness(0.6)"
            ></Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            position="relative"
          >
            <Box zIndex="1" textAlign="center">
              <Heading color="light.info" fontSize="48px">
                OCEANIA
              </Heading>
              <Text color="light.info" fontSize="24px">
                O mais louco de todos.
              </Text>
            </Box>
            <Box
              zIndex="0"
              position="absolute"
              width="100%"
              height="100%"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              bgImage="url(/images/slide_show/oceania.jpg)"
              filter="brightness(0.6)"
            ></Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
