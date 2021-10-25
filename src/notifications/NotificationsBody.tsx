
import React from 'react';
import { Box } from "@chakra-ui/react";

interface NotificationsBodyProps {
	children: React.ReactNode
}

export const NotificationsBody = ({ children }: NotificationsBodyProps) => {
	return <Box maxHeight="600px" overflow="scroll">
		{
			children
		}
	</Box>
}