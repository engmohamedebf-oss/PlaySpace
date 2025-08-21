import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme/theme';

interface ChipProps {
	label: string;
	active?: boolean;
	onPress?: () => void;
	style?: ViewStyle;
}

export default function Chip({ label, active, onPress, style }: ChipProps) {
	const inner = (
		<View style={{
			paddingHorizontal: theme.spacing.lg,
			height: 36,
			minWidth: 48,
			borderRadius: theme.radii.pill,
			alignItems: 'center', justifyContent: 'center',
			backgroundColor: active ? theme.colors.card : 'transparent'
		}}>
			<Text style={{ color: '#E6E6E6', fontSize: theme.typography.body.sizes.sm }} allowFontScaling>
				{label}
			</Text>
		</View>
	);

	if (active) {
		return (
			<LinearGradient colors={[theme.colors.primaryGradientStart, theme.colors.primaryGradientEnd]} style={{ padding: 2, borderRadius: theme.radii.pill }}>
				<TouchableOpacity accessibilityRole="button" accessibilityLabel={label} onPress={onPress} activeOpacity={0.85} style={style}>
					{inner}
				</TouchableOpacity>
			</LinearGradient>
		);
	}
	return (
		<TouchableOpacity accessibilityRole="button" accessibilityLabel={label} onPress={onPress} activeOpacity={0.85} style={[{ borderRadius: theme.radii.pill, borderWidth: 1, borderColor: theme.colors.mutedText }, style]}>
			{inner}
		</TouchableOpacity>
	);
}