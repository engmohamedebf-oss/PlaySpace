const theme = {
	colors: {
		bg: '#0F1115',
		panel: '#141618',
		card: '#191b1f',
		mutedText: '#BFC4C8',
		primaryGradientStart: '#7B61FF',
		primaryGradientEnd: '#FF5CA1',
		accent: '#4AA3FF',
		success: '#2ECC71',
		danger: '#E74C3C',
		badgeBusy: '#E74C3C',
		badgeAvailable: '#2ECC71'
	},
	typography: {
		heading: { fontFamily: 'Orbitron, Poppins, System', fontWeight: '700', sizes: { xl: 24, lg: 20, md: 16, sm: 14 } },
		body: { fontFamily: 'Inter, System', fontWeight: '400', sizes: { md: 14, sm: 12 } }
	},
	spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 },
	radii: { sm: 6, md: 12, lg: 20, pill: 999 },
	elevation: { low: 2, mid: 6, high: 12 }
} as const;

export type Theme = typeof theme;
export default theme;