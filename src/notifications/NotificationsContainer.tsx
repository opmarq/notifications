import React from "react";
import { Container } from "@chakra-ui/react";

interface NotificationsContainerProps {
	children: React.ReactNode;
}

export const NotificationsContainer = ({
	children,
}: NotificationsContainerProps) => {
	return (
		<Container
			position="relative"
			p="0"
			bgColor="black"
			color="white"
			pt="70px"
			borderRadius="md"
			overflow="hidden"
		>
			{children}
		</Container>
	);
};
