import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export default StyleSheet.create({
	container: { width: '100%' },
	label: { color: '#E6E6E6', marginBottom: theme.spacing.xs, fontSize: theme.typography.body.sizes.md },
	input: {
		height: 48,
		paddingHorizontal: theme.spacing.lg,
		borderRadius: theme.radii.md,
		backgroundColor: theme.colors.panel,
		color: '#E6E6E6'
	},
	errorText: { color: theme.colors.danger, marginTop: theme.spacing.xs, fontSize: theme.typography.body.sizes.sm },
	withError: { borderWidth: 1, borderColor: theme.colors.danger }
});