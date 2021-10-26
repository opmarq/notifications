
import React from 'react';
import { Heading, IconButton, Flex, Badge } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { INotification } from '../api/API';

interface NotificationsHeaderProps {
	label: string;
	notifications: INotification[];
	onClear?: () => void;
}

export const NotificationsHeader = ({ label, notifications, onClear }: NotificationsHeaderProps) => {

	const nonReadNotifications = notifications.filter(({ read }) => !read);

	return <Flex justifyContent="space-between" alignItems="center" zIndex="sticky" left="0" top="0" bgColor="black" width="full" position="absolute" p="4">
		<Heading size="lg">
			{label} {notifications.length > 0 && <Badge as="sup" color="white" fontSize="md">{nonReadNotifications.length}/{notifications.length}</Badge>}
		</Heading>
		<IconButton role="clear-all" onClick={onClear} colorScheme="teal" aria-label="clear-all" icon={<DeleteIcon />} />
	</Flex>
}