import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/HomeScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import RoomDetailScreen from '../screens/Room/RoomDetailScreen';
import theme from '../theme/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BookingsScreen() { return <View style={{ flex: 1, backgroundColor: theme.colors.bg, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#E6E6E6' }}>Bookings</Text></View>; }
function ProfileScreen() { return <View style={{ flex: 1, backgroundColor: theme.colors.bg, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#E6E6E6' }}>Profile</Text></View>; }

function BottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarStyle: { backgroundColor: theme.colors.panel, borderTopColor: 'transparent', height: 64, paddingBottom: 8, paddingTop: 8, marginHorizontal: 12, marginBottom: 12, borderRadius: 16, position: 'absolute' },
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: theme.colors.mutedText,
				tabBarIcon: ({ color, size, focused }) => {
					const icon = route.name === 'HomeTab' ? 'home' : route.name === 'BookingsTab' ? 'calendar' : 'person';
					return <Ionicons name={icon as any} size={24} color={color} />;
				}
			})}
		>
			<Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
			<Tab.Screen name="BookingsTab" component={BookingsScreen} options={{ title: 'Bookings' }} />
			<Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ title: 'Profile' }} />
		</Tab.Navigator>
	);
}

export default function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.bg } }}>
			<Stack.Screen name="Onboarding" component={OnboardingScreen} />
			<Stack.Screen name="AuthLogin" component={LoginScreen} />
			<Stack.Screen name="AuthSignup" component={SignupScreen} />
			<Stack.Screen name="Main" component={BottomTabs} />
			<Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
		</Stack.Navigator>
	);
}