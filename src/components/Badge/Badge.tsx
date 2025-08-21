import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import theme from '../../theme/theme';

interface Props {
	text: string;
	backgroundColor?: string;
	style?: ViewStyle;
}

export default function Badge({ text, backgroundColor, style }: Props) {
	return (
		<View style={[{ paddingHorizontal: theme.spacing.md, height: 24, borderRadius: theme.radii.pill, alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor || theme.colors.panel }, style]}>
			<Text style={{ color: '#fff', fontSize: 12 }} allowFontScaling>{text}</Text>
		</View>
	);
}