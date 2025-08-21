import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingCarousel from '../../components/OnboardingCarousel/OnboardingCarousel';
import theme from '../../theme/theme';

export default function OnboardingScreen({ navigation }: any) {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
			<OnboardingCarousel
				slides={[
					{ title: 'Discover Nearby Gaming Rooms', desc: 'Find PS5, Xbox, and VR lounges near you.' },
					{ title: 'Book Instantly', desc: 'Reserve your slot with a tap.' },
					{ title: 'Play With Friends', desc: 'Invite friends and track bookings.' }
				]}
				onDone={() => navigation.replace('Main')}
			/>
		</SafeAreaView>
	);
}