import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: theme.colors.card,
		borderRadius: theme.radii.lg,
		elevation: theme.elevation.low,
		marginBottom: theme.spacing.lg,
		padding: theme.spacing.md
	},
	thumb: { width: 96, height: 72, borderRadius: theme.radii.md, marginRight: theme.spacing.md, backgroundColor: theme.colors.panel },
	title: { color: '#fff', fontSize: theme.typography.body.sizes.md, fontWeight: '700' },
	subtitle: { color: theme.colors.mutedText, fontSize: theme.typography.body.sizes.sm, marginTop: 2 },
	row: { flexDirection: 'row', alignItems: 'center', marginTop: theme.spacing.sm, justifyContent: 'space-between' },
	badge: { position: 'absolute', right: theme.spacing.md, top: theme.spacing.md, paddingHorizontal: theme.spacing.md, height: 24, borderRadius: theme.radii.pill, alignItems: 'center', justifyContent: 'center' },
	badgeText: { color: '#fff', fontSize: 12 }
});