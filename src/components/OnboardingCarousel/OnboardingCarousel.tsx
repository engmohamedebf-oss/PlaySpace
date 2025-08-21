import React, { useRef } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../Button/Button';
import theme from '../../theme/theme';

const { width } = Dimensions.get('window');

interface Slide {
	title: string;
	desc: string;
}

interface Props {
	slides: Slide[];
	onDone: () => void;
}

export default function OnboardingCarousel({ slides, onDone }: Props) {
	const flatRef = useRef<FlatList>(null);
	const [index, setIndex] = React.useState(0);
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				ref={flatRef}
				data={slides}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item, idx) => `${idx}`}
				onMomentumScrollEnd={(e) => {
					const i = Math.round(e.nativeEvent.contentOffset.x / width);
					setIndex(i);
				}}
				renderItem={({ item }) => (
					<View style={{ width, flex: 1, padding: theme.spacing.xl, alignItems: 'center', justifyContent: 'center' }}>
						<LinearGradient colors={[theme.colors.primaryGradientStart, theme.colors.primaryGradientEnd]} style={{ width: 96, height: 96, borderRadius: 24, marginBottom: theme.spacing.xl }} />
						<Text style={{ color: '#fff', fontSize: theme.typography.heading.sizes.lg, fontWeight: '700', textAlign: 'center', marginBottom: theme.spacing.md }} allowFontScaling>
							{item.title}
						</Text>
						<Text style={{ color: theme.colors.mutedText, fontSize: theme.typography.body.sizes.md, textAlign: 'center' }} allowFontScaling>
							{item.desc}
						</Text>
					</View>
				)}
			/>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: theme.spacing.lg }}>
				{slides.map((_, i) => (
					<View key={i} style={{ width: 8, height: 8, borderRadius: 4, marginHorizontal: 4, backgroundColor: i === index ? '#fff' : theme.colors.mutedText }} />
				))}
			</View>
			<View style={{ paddingHorizontal: theme.spacing.xl, paddingBottom: theme.spacing.xl }}>
				<Button variant="primary" onPress={index === slides.length - 1 ? onDone : () => flatRef.current?.scrollToIndex({ index: index + 1, animated: true })} accessibilityLabel="Next">
					{index === slides.length - 1 ? 'Get Started' : 'Next'}
				</Button>
			</View>
		</View>
	);
}