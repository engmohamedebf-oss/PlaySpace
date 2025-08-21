import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import theme from '../../theme/theme';

export default function RoomDetailScreen({ route }: any) {
	const { id } = route.params || {};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
			<ScrollView contentContainerStyle={{ paddingBottom: 96 }}>
				<View style={{ width: '100%', height: 220, backgroundColor: theme.colors.card }} />
				<View style={{ padding: theme.spacing.xl }}>
					<Text style={{ color: '#fff', fontSize: theme.typography.heading.sizes.lg, fontWeight: '700' }}>Room {id}</Text>
					<Text style={{ color: theme.colors.mutedText, marginTop: theme.spacing.sm }}>Status: Available</Text>
				</View>
			</ScrollView>
			<View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: theme.spacing.xl, backgroundColor: theme.colors.panel }}>
				<Button variant="primary" onPress={() => {}} accessibilityLabel="Book room">Book Now</Button>
			</View>
		</SafeAreaView>
	);
}