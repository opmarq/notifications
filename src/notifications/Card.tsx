import React from "react";
import { Box, Avatar, Flex, Heading, Text } from "@chakra-ui/react";

export interface CardProps {
	image?: string;
	type?: string;
	content?: string;
	description?: string;
	period?: string;
	read: boolean;
	markAsRead?: () => void
}

export const Card = ({ image, type, content, description, period, read, markAsRead }: CardProps) => {
	return <Box _hover={{
		backgroundColor: "#adb5bd"
	}} bgColor={!read ? "#adb5bd" : 'transparent'} borderTop="1px solid #ced4da" px="4" py="2" cursor="pointer" onMouseEnter={markAsRead} >
		<Flex>
			<Box mr="2">
				<Avatar
					size="lg"
					name={description}
					src={image}
				/>
			</Box>
			<Box>
				<Heading size="md">{type}</Heading>
				<Text>{content}</Text>
			</Box>
		</Flex>
		<Text>{period}</Text>
	</Box>
}