import React from "react";
import { Box, Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import { formatDistance, subDays } from "date-fns";

export interface NotificationsItemProps {
	image?: string;
	type?: string;
	title: string;
	artist: string;
	content?: string;
	description?: string;
	period?: string;
	read: boolean;
	markAsRead?: () => void
}

export const NotificationsItem = ({ image, type, content, description, period, read, markAsRead, title, artist }: NotificationsItemProps) => {
	return <Box transition="all 1s" _hover={{
		backgroundColor: "gray.700"
	}} bgColor={!read ? "gray.900" : 'transparent'} borderTop="1px solid #32323d" px="4" py="2" cursor="pointer" onMouseEnter={markAsRead} >
		<Flex alignItems="center">
			<Box mr="4">
				<Avatar
					size="lg"
					name={description}
					src={image}
				/>
			</Box>
			<Box>
				<Heading size="md">{title}</Heading>
				<Text>{artist}</Text>
			</Box>
		</Flex>
		{
			description &&
			<Text mt="2" color="#72727d" fontSize="md" >{description}</Text>
		}
		{
			period &&
			<Text mt="2" color="#72727d" textTransform="uppercase" fontSize="sm" >{formatDistance(subDays(new Date(period), 3), new Date(), { addSuffix: true })} - {type}</Text>
		}
	</Box>
}