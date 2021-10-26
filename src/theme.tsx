import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
	components: {
		AlertDialogContent: {
			defaultProps: {
				colorScheme: "blue",
				display: "none"
			},
		},
	},
})
