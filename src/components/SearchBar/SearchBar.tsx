import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme/theme';

interface Props {
	value: string;
	onChange: (t: string) => void;
	onFilterPress?: () => void;
}

export default function SearchBar({ value, onChange, onFilterPress }: Props) {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.card, borderRadius: theme.radii.lg, paddingHorizontal: theme.spacing.lg, height: 48 }}>
			<Ionicons name="search" size={18} color={theme.colors.mutedText} accessibilityLabel="Search" accessibilityHint="Search by location" />
			<TextInput
				value={value}
				onChangeText={onChange}
				placeholder={"Search location…"}
				placeholderTextColor={theme.colors.mutedText}
				style={{ flex: 1, marginHorizontal: theme.spacing.md, color: '#E6E6E6' }}
				allowFontScaling
			/>
			<TouchableOpacity onPress={onFilterPress} accessibilityLabel="Filter" accessibilityHint="Open filters" style={{ padding: theme.spacing.sm, borderRadius: theme.radii.md }}>
				<Ionicons name="options" size={20} color="#fff" />
			</TouchableOpacity>
		</View>
	);
}