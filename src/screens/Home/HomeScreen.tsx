import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../../components/SearchBar/SearchBar';
import Chip from '../../components/Chip/Chip';
import RoomCard, { RoomItem } from '../../components/RoomCard/RoomCard';
import theme from '../../theme/theme';
import roomsData from '../../data/sample-rooms.json';

export default function HomeScreen({ navigation }: any) {
	const [query, setQuery] = useState('');
	const [active, setActive] = useState('All');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [rooms, setRooms] = useState<RoomItem[]>([] as any);

	useEffect(() => {
		setTimeout(() => {
			setRooms(roomsData as any);
			setLoading(false);
		}, 600);
	}, []);

	const filtered = rooms.filter(r => active === 'All' || r.tags.includes(active.replace('PS', 'PS')));

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
			<StatusBar barStyle="light-content" />
			<View style={{ paddingBottom: theme.spacing.lg }}>
				<LinearGradient colors={[theme.colors.primaryGradientStart, theme.colors.primaryGradientEnd]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ paddingTop: theme.spacing.xl, paddingBottom: theme.spacing.xl, paddingHorizontal: theme.spacing.xl, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
					<Text style={{ color: '#fff', fontSize: theme.typography.heading.sizes.lg, fontWeight: '700', marginBottom: theme.spacing.md }}>PlaySpace</Text>
					<SearchBar value={query} onChange={setQuery} onFilterPress={() => {}} />
					<View style={{ marginTop: theme.spacing.md, flexDirection: 'row' }}>
						<FlatList horizontal showsHorizontalScrollIndicator={false} data={[ 'All', 'PS5', 'PS4', 'Xbox', 'VR' ]} keyExtractor={(i) => i} renderItem={({ item }) => (
							<View style={{ marginRight: theme.spacing.sm }}>
								<Chip label={item} active={active === item} onPress={() => setActive(item)} />
							</View>
						)} />
					</View>
				</LinearGradient>
			</View>
			<View style={{ paddingHorizontal: theme.spacing.xl, flex: 1 }}>
				<Text style={{ color: '#fff', fontSize: theme.typography.heading.sizes.md, fontWeight: '700', marginBottom: theme.spacing.md }}>Nearby Rooms</Text>
				{loading && <ActivityIndicator color="#fff" />}
				{!loading && !error && filtered.length === 0 && (
					<View style={{ alignItems: 'center', marginTop: theme.spacing.xl }}>
						<Text style={{ color: theme.colors.mutedText }}>No rooms found</Text>
					</View>
				)}
				{!loading && !error && (
					<FlatList
						data={filtered}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<RoomCard room={item} onPress={() => navigation.navigate('RoomDetail', { id: item.id })} />
						)}
						contentContainerStyle={{ paddingBottom: theme.spacing.xl }}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}