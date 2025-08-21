import React, { useEffect } from 'react';
import { I18nManager, Platform, UIManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as Localization from 'expo-localization';
import './src/i18n/i18n';
import theme from './src/theme/theme';
import RootNavigator from './src/navigation/index';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }>{
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() { return { hasError: true }; }
	componentDidCatch(error: any) { console.error('App ErrorBoundary caught', error); }
	render() {
		if (this.state.hasError) {
			return null;
		}
		return this.props.children as any;
	}
}

export default function App() {
	useEffect(() => {
		const isArabic = (Localization.locale || '').startsWith('ar');
		if (I18nManager.isRTL !== isArabic) {
			I18nManager.allowRTL(isArabic);
			I18nManager.forceRTL(isArabic);
			// Reload on next launch for layout direction
		}
	}, []);

	return (
		<SafeAreaProvider>
			<ErrorBoundary>
				<NavigationContainer theme={{
					colors: { background: theme.colors.bg, card: theme.colors.card, text: '#E6E6E6', border: theme.colors.panel, primary: theme.colors.accent, notification: theme.colors.accent },
					dark: true
				}}>
					<RootNavigator />
				</NavigationContainer>
			</ErrorBoundary>
		</SafeAreaProvider>
	);
}