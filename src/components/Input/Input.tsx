import React from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle, TextInputProps } from 'react-native';
import styles from './Input.styles';
import theme from '../../theme/theme';

interface InputProps extends TextInputProps {
	value: string;
	onChangeText: (t: string) => void;
	label?: string;
	error?: string | null;
	containerStyle?: ViewStyle;
	testID?: string;
}

export default function Input({ value, onChangeText, label, error, containerStyle, testID, ...rest }: InputProps) {
	const marginBottom = (containerStyle as any)?.marginBottom ?? theme.spacing.md;
	return (
		<View style={[styles.container, { marginBottom }]}>
			{!!label && <Text style={styles.label} allowFontScaling accessibilityRole="text">{label}</Text>}
			<TextInput
				value={value}
				onChangeText={onChangeText}
				style={[styles.input, !!error ? styles.withError : null]}
				placeholderTextColor={theme.colors.mutedText}
				allowFontScaling
				testID={testID}
				{...rest}
			/>
			{!!error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
}