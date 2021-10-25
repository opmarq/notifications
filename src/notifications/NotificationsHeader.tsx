
import React from 'react';
import { Heading, IconButton, Flex, Badge } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface NotificationsHeaderProps {
	label: string;
	count: number;
	onClear?: () => void;
}

export const NotificationsHeader = ({ label, count, onClear }: NotificationsHeaderProps) => {
	return <Flex justifyContent="space-between" alignItems="center" zIndex="sticky" left="0" top="0" bgColor="black" width="full" position="absolute" p="4">
		<Heading size="lg">
			{label} {count > 0 && <Badge fontSize="md">{count}</Badge>}
		</Heading>
		<IconButton onClick={onClear} colorScheme="teal" aria-label="clear" icon={<DeleteIcon />} />
	</Flex>
}