import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export default StyleSheet.create({
	container: {
		height: 48,
		borderRadius: theme.radii.md,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	primary: {
		backgroundColor: 'transparent'
	},
	secondary: {
		backgroundColor: theme.colors.panel
	},
	ghost: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: theme.colors.mutedText
	},
	label: {
		color: '#FFFFFF',
		fontSize: theme.typography.body.sizes.md,
		fontWeight: '600'
	},
	iconLeft: { marginRight: theme.spacing.sm },
	iconRight: { marginLeft: theme.spacing.sm }
});