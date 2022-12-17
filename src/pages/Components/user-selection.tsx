import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Tags } from '../../types';
import { getItem, setItem } from '../Utils/storage';
import { STORAGE_ITEMS_KEY } from '../../consts';

const options = Object.values(Tags).map((e) => {
  const split = e.split(/(?=[A-Z])/);
  return {
    value: e,
    label: split
      .map((e) => {
        return e[0].toUpperCase() + e.slice(1);
      })
      .join(' '),
  };
});

type Option = {
  value: string;
  label: string;
};

export const UserSelection = ({
  width,
  email,
  userId,
  isLoading,
  selections,
}: {
  width: number;
  email?: string;
  userId: string;
  selections?: Option[];
  isLoading?: boolean;
}) => {
  const [selected, setSelected] = useState<Option[]>(
    (selections || []) as Option[]
  );
  const [loading, setLoading] = useState(true);

  const text = `Hello${email ? `, ${email.split('@')[0]}` : ' Cherry Pie!'}!`;

  useEffect(() => {
    const setItems = async () => {
      if (selected.length > 0) {
        await setItem(
          STORAGE_ITEMS_KEY,
          JSON.stringify({ [userId]: selected.map((e) => e.value) })
        );
      }
    };
    setItems();
  }, [selected, userId]);

  useEffect(() => {
    if (!userId) return;
    const getItems = async () => {
      const results = await getItem(STORAGE_ITEMS_KEY);
      if (results) {
        const parsed = JSON.parse(results as unknown as string);
        Object.keys(parsed)?.includes(userId)
          ? setSelected(
            parsed[userId].map((e: string) => ({ value: e, label: e }))
          )
          : setSelected([]);
      }
      setLoading(false);
    };
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (loading || isLoading) {
    return (
      <Flex w={width} h={width} bg="white" justify="center" align="center">
        <Text>Loading...</Text>
      </Flex>
    );
  }

  return (
    <Flex flex={1} direction="column">
      <Flex justify="center" pt={20} w="100%" direction="column">
        <Text
          fontSize="24px"
          color="black"
          lineHeight="30px"
          pb={8}
          fontFamily="Quicksand"
          fontWeight={700}
          m={0}
        >
          {text}
        </Text>
        <Text
          fontSize="18px"
          color="black"
          lineHeight="30px"
          pb={6}
          fontFamily="Quicksand"
          fontWeight={700}
          m={0}
        >
          I am interested in:
        </Text>
      </Flex>
      <Select
        styles={{
          control: (baseStyles, state) => {
            return {
              ...baseStyles,
              width: `${width}px`,
              border: '3px solid black',
              // can customise styles to be like theme!
              //borderColor: state.isFocused ? 'grey' : 'red',
            };
          },
        }}
        isMulti
        name="colors"
        options={options}
        value={selected}
        onChange={(val) => {
          setSelected([...val] as Option[]);
        }}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </Flex>
  );
};
