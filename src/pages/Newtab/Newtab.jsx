import React, { useEffect, useMemo, useCallback } from 'react';
import { useSpring, animated, config } from 'react-spring';
import {
  ChakraProvider,
  Flex,
  Fade,
  Text,
  Box,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { getItem } from '../Utils/storage'
import { UserSelection } from '../Components/user-selection';
import { STORAGE_ITEMS_KEY } from '../../consts'

import { data } from '../../types'


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

const Content = ({ pageData, shuffle, name }) => {
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
            Hello {name}
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
            onClick={() => shuffle()}
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
  )
}

const Newtab = () => {
  const [pageData, setPageData] = useState(undefined);
  const [selected, setSelected] = useState([]);
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true)
  const [anim, setAnim] = useState(true)
  const userId = user?.id

  useEffect(() => {
    chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' }, function (info) {
      if (info.email) {
        setUser(info)
      }
    });
  }, []);

  const loadingAnimationDelay = 300;

  useEffect(() => {
    const length = selected.length
    if (length) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomItemId = selected[randomIndex].value;

      const randomData = data[randomItemId];
      const randomDataIndex = Math.floor(Math.random() * randomData.length);
      const randomItem = randomData[randomDataIndex];
      setPageData(randomItem);

    }
  }, [selected])

  const handleAnim = useCallback(() => {

    const delay = 1200;

    setTimeout(() => {
      setAnim(false)
    }, delay);

    setTimeout(() => {
      setLoading(false)
    }, delay + 100 + loadingAnimationDelay);
  }, [])

  const getItems = useCallback(async () => {
    const results = await getItem(STORAGE_ITEMS_KEY);

    if (results) {
      const parsed = JSON.parse(results);
      Object.keys(parsed)?.includes(userId) ? setSelected(parsed[userId].map((e) => ({ value: e, label: e }))) : setSelected([]);

    }
    handleAnim()
  }, [handleAnim, userId])

  useEffect(() => {
    if (!userId) return;
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const renderContent = useMemo(() => {
    if (!userId) {
      return (
        <Box position="relative" w="100vw" h="100vh" backgroundColor="green.300">
          <Flex
            justifyContent="center"
            height="100%"
          >
            <Flex direction="row" flex={1} height="100%" justifyContent="center">

              <Flex
                flex={1}
                direction="column"
                justifyContent="center"
                height="100%">
                <Text
                  fontSize="30px"
                  color="black"
                  px={16}
                  textAlign="center"
                  py={4}
                  fontFamily="Quicksand"
                  fontWeight={700}
                >
                  Hello! Please sign in to use this extension   😜
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )
    }

    if (loading) {
      const dimensions = 300;
      const multiplier = 1 / 2;
      console.log('herrrrre', anim)
      return (
        <Fade
          in={anim}
          transition={{
            enter: { duration: 0.3 },
            exit: { duration: loadingAnimationDelay / 1000 },
          }}
        >
          <Box position="relative" w="100vw" h="100vh" backgroundColor="green.300">
            <Flex direction="row" flex={1} height="100%" justifyContent="center" pt={dimensions / 2}>
              <Box height={dimensions * (1 + multiplier)} width={dimensions * (1 + multiplier)} bg="white" borderRadius={"50%"}>
                <Flex direction="row" pl={dimensions * (multiplier / 2)} flex={1} height="100%" justifyContent="center">
                  <Flex direction="column" flex={1} justifyContent="center">
                    <img src={require('../../assets/img/loading.gif')} alt="loading..." style={{ width: dimensions, height: dimensions, justifyContent: 'center' }} />
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Fade >
      )
    }

    if (!selected.length) {
      return (
        <Fade in={true}
          transition={{
            enter: { duration: 0.3 },
          }}>
          <Box position="relative" w="100vw" h="100vh" backgroundColor="green.300">
            <Flex
              justifyContent="center"
              height="100%"
            >
              <Flex direction="row" pb={300} flex={1} height="100%" width="100%" justifyContent="center">
                <Flex flex={1} />
                <Flex
                  flex={1}
                  direction="column"
                  justifyContent="center"
                  height="100%">
                  <Box width={500}>
                    <UserSelection email={user?.email} width={500} userId={userId} />
                  </Box>
                  <Flex direction="row">
                    <Flex flex={1} />

                    <Button
                      bgColor="purple.200"
                      color="black"
                      size="md"
                      m={4}
                      //  disabled={!selected.length}
                      onClick={() => {
                        setAnim(true)
                        setLoading(true)
                        getItems()
                      }}
                      borderRadius="2xl"
                      border="3px solid black"
                    >
                      Make me Happy!
                    </Button>
                    <Flex flex={1} />
                  </Flex>
                </Flex>
                <Flex flex={1} />
              </Flex>
            </Flex>
          </Box>
        </Fade>
      )
    }
    const names = [
      'Sunshine',
      'Superstar',
      'Sunshine Pie!',
      'Cherry Sweet!',
      'My Superstar!',
      'Legenddddd!'
    ]
    let randomName = names[Math.floor(Math.random() * names.length)]
    const text = `${user?.email ? `${user?.email.split('@')[0]}` : randomName}`;
    return <Content pageData={pageData} name={text} shuffle={() => {

      const length = selected.length
      if (length) {
        setAnim(true)
        setLoading(true)
        const randomIndex = Math.floor(Math.random() * length);
        const randomItemId = selected[randomIndex].value;

        const randomData = data[randomItemId];
        const randomDataIndex = Math.floor(Math.random() * randomData.length);
        const randomItem = randomData[randomDataIndex];
        setPageData(randomItem);
        handleAnim()

      }
    }} />
  }, [anim, getItems, handleAnim, loading, pageData, selected, user?.email, userId])

  return (
    <ChakraProvider>
      {renderContent}
    </ChakraProvider>
  );
};

export default Newtab;
