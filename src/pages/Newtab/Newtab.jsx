import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import {
  ChakraProvider,
  Flex,
  Text,
  Box,
  Image,
  Button,
} from '@chakra-ui/react';

const pageData = {
  name: 'Eddie',
  news: {
    headline: 'Pink dolphins repopulate Hong Kong waters',
    story:
      'The coronavirus pandemic has had a major impact on cruise and ferry industries worldwide. In Hong Kong, high-speed ferries were temporarily shut down since the start of the pandemic. Shortly after the waters settled in lockdown, large populations of dolphins returned to Hong Kong waters due to the quieter environment.',
  },
  backgroundImage:
    'https://blog.padi.com/wp-content/uploads/2017/02/shutterstock_164233874.jpg',
  factOrTip: {
    title: 'Top tip: Reduce, reuse, and recycle',
    text: 'Cut down on what you throw away. Follow the three Rs to conserve natural resources and landfill space.',
  },
  helpfulSite: {
    link: 'https://www.websitecarbon.com/',
    title: 'You might also like...',
    text: 'Website Carbon Calculator',
  },
};

const Card = ({ cardHeader, cardText, link, marginLeft, isArticle }) => {
  return (
    <Flex
      direction="column"
      w={
        isArticle
          ? { base: '100%', lg: '480px', xl: '500px' }
          : { base: '100%', lg: '220px', xl: '310px' }
      }
      bg="white"
      opacity="0.75"
      borderRadius="2xl"
      padding={6}
      marginLeft={{ base: 0, lg: marginLeft }}
      marginBottom={{ base: 4, lg: 0 }}
      boxShadow="lg"
      border="3px solid black"
    >
      <Box opacity="1" position="relative" zIndex="1">
        <Text
          fontSize="24px"
          color="black"
          lineHeight="30px"
          pb={4}
          fontFamily="Quicksand"
          fontWeight={700}
        >
          {cardHeader}
        </Text>

        {link ? (
          <a href={link}>
            <Text
              fontSize="16px"
              color="blue.900"
              textDecoration="underline"
              fontFamily="Quicksand"
              fontWeight={500}
            >
              {cardText}
            </Text>
          </a>
        ) : (
          <Text
            fontSize="16px"
            color="blue.900"
            fontFamily="Quicksand"
            fontWeight={500}
          >
            {cardText}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

const Newtab = () => {
  const fade1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
    delay: 200,
  });
  const fade2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
    delay: 400,
  });
  const fade3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
    delay: 600,
  });
  const slide = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: config.slow,
    delay: 100,
  });
  const appear = useSpring({
    from: { transform: `scale(75%)`, opacity: 0 },
    to: { transform: `scale(100%)`, opacity: 1 },
    config: config.wobbly,
    delay: 2000,
  });
  return (
    <ChakraProvider>
      <Box className="App" position="relative" w="100vw" h="100vh">
        <animated.div w="105vw" h="auto" position="absolute" style={slide}>
          <Flex
            backgroundColor="green.300"
            borderBottom="4px solid black"
            justifyItems="center"
          >
            <Text
              fontSize="40px"
              color="black"
              px={16}
              py={4}
              fontFamily="Quicksand"
              fontWeight={700}
            >
              Hello {pageData.name}
            </Text>
          </Flex>
        </animated.div>
        <Box position="absolute" top={2} right={16}>
          <animated.div style={appear}>
            <Button
              bgColor="purple.200"
              color="black"
              size="lg"
              m={4}
              borderRadius="2xl"
              border="3px solid black"
            >
              Shuffle
            </Button>
          </animated.div>
        </Box>
        <Flex
          bgColor="grey.400"
          flex={1}
          width="100vw"
          h="90vh"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          bgImg={pageData.backgroundImage}
          bgPos="center"
        />
        <Flex
          position="absolute"
          bottom={0}
          px={16}
          py={8}
          direction={{ base: 'column', lg: 'row' }}
        >
          <animated.div style={fade1} id="card1">
            <Card
              cardHeader={pageData.news.headline}
              cardText={pageData.news.story}
              isArticle
              marginBottom={4}
            />
          </animated.div>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 0, md: 4, lg: 0 }}
            h="auto"
          >
            <animated.div style={fade2} id="card2">
              <Card
                marginLeft={4}
                cardHeader={pageData.factOrTip.title}
                cardText={pageData.factOrTip.text}
              />
            </animated.div>
            <animated.div style={fade3} id="card3">
              <Card
                marginLeft={4}
                cardHeader={pageData.helpfulSite.title}
                cardText={pageData.helpfulSite.text}
                link={pageData.helpfulSite.link}
              />
            </animated.div>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Newtab;
