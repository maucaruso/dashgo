import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Maurici Caruso</Text>
        <Text color="gray.300" fontSize="small">
          carusojr@outlook.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Maurici Caruso"
        src="https://avatars.githubusercontent.com/u/36897444?v=4"
      />
    </Flex>
  );
}
