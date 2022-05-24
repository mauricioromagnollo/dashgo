import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align='center'
    >
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Maurício Romagnoli</Text>
          <Text color='gray.300' fontSize='small'>romagnolimauricio@gmail.com</Text>
        </Box>
      )}
      <Avatar size='md' name='Maurício Romagnoli' src='https://github.com/x0n4d0.png' />
    </Flex>
  );
}