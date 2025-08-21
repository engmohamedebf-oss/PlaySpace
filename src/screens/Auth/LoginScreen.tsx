import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import theme from '../../theme/theme';

export default function LoginScreen({ navigation }: any) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const onLogin = async () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigation.replace('Main');
		}, 800);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ padding: theme.spacing.xl, flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled">
					<View style={{ backgroundColor: theme.colors.panel, borderRadius: theme.radii.lg, padding: theme.spacing.xl }}>
						<Text style={{ color: '#fff', fontSize: theme.typography.heading.sizes.lg, fontWeight: '700', marginBottom: theme.spacing.lg }}>Login</Text>
						<Input value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" autoCapitalize="none" containerStyle={{ marginBottom: theme.spacing.lg }} />
						<Input value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry containerStyle={{ marginBottom: theme.spacing.lg }} />
						<Button variant="primary" onPress={onLogin} loading={loading} accessibilityLabel="Login">
							Login
						</Button>
						<Text style={{ color: theme.colors.mutedText, marginTop: theme.spacing.lg }}>Don't have an account?</Text>
						<Button variant="ghost" onPress={() => navigation.navigate('AuthSignup')} accessibilityLabel="Go to Sign up">
							Sign Up
						</Button>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}