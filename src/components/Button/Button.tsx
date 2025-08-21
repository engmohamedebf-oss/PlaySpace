import React from 'react';
import { TouchableOpacity, Text, ViewStyle, GestureResponderEvent, ActivityIndicator, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from './Button.styles';
import theme from '../../theme/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
	variant?: ButtonVariant;
	onPress: (e: GestureResponderEvent) => void;
	loading?: boolean;
	disabled?: boolean;
	icon?: keyof typeof Ionicons.glyphMap;
	accessibilityLabel?: string;
	children: React.ReactNode;
	style?: ViewStyle;
}

export default function Button({ variant = 'primary', onPress, loading, disabled, icon, accessibilityLabel, children, style }: ButtonProps) {
	const content = (
		<TouchableOpacity
			activeOpacity={0.85}
			onPress={onPress}
			disabled={disabled || loading}
			style={[styles.container, styles[variant], style, disabled ? { opacity: 0.6 } : null]}
			accessibilityRole="button"
			accessibilityLabel={accessibilityLabel}
			accessibilityState={{ disabled: !!disabled, busy: !!loading }}
		>
			{icon ? <Ionicons name={icon} size={18} color="#fff" style={styles.iconLeft} /> : null}
			{loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.label} allowFontScaling>{children}</Text>}
		</TouchableOpacity>
	);

	if (variant === 'primary') {
		return (
			<LinearGradient
				colors={[theme.colors.primaryGradientStart, theme.colors.primaryGradientEnd]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={{ borderRadius: theme.radii.md }}
			>
				{content}
			</LinearGradient>
		);
	}
	return content;
}