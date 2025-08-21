import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './RoomCard.styles';
import theme from '../../theme/theme';

export interface RoomItem {
	id: string;
	title: string;
	location: string;
	distanceKm: number;
	tags: string[];
	rating: number;
	pricePerHour: number;
	status: 'available' | 'busy';
	thumbnail: string;
}

interface Props {
	room: RoomItem;
	onPress?: () => void;
}

export default function RoomCard({ room, onPress }: Props) {
	const badgeColor = room.status === 'available' ? theme.colors.badgeAvailable : theme.colors.badgeBusy;
	return (
		<TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.9} accessibilityLabel={room.title} accessibilityRole="button">
			<Image source={{ uri: room.thumbnail }} style={styles.thumb as any} />
			<View style={{ flex: 1 }}>
				<Text style={styles.title} numberOfLines={1} allowFontScaling>{room.title}</Text>
				<Text style={styles.subtitle} numberOfLines={1} allowFontScaling>{room.location} • {room.distanceKm} km</Text>
				<View style={styles.row}>
					<Text style={{ color: theme.colors.accent }}>★ {room.rating.toFixed(1)}</Text>
					<Text style={{ color: '#fff', fontWeight: '700' }}>${room.pricePerHour}/h</Text>
				</View>
			</View>
			<View style={[styles.badge, { backgroundColor: badgeColor }]}>
				<Text style={styles.badgeText}>{room.status === 'available' ? 'Available' : 'Busy'}</Text>
			</View>
		</TouchableOpacity>
	);
}