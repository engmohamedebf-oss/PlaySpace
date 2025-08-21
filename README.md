1) Short AI command (copy / paste)
Build a mobile-first React Native (Expo + TypeScript) UI for "PlaySpace" — a dark/neon gaming-arcade booking app focused on a polished mobile UX. Deliver component-first code (reusable Input, Button, Card, Chip, BottomTab, OnboardingCarousel, SearchBar, RoomCard), a theme file (colors, typography, spacing), navigation setup (stack + bottom tabs), RTL support (Arabic) and sample JSON data. Follow the detailed UI spec: dark background, neon gradient header, rounded cards, 48px tap targets, subtle elevation, smooth micro-animations, and precise states (loading, empty, error, busy/available badges). Output folder structure, each component file, StyleSheet-based styles + type definitions, and a sample screen flow JSON. Provide notes for accessibility, localization, assets needed, and test instructions.       
            
2) Full UI specification (detailed, actionable — give this to the AI for an exact build)
Overview (one-line)

A mobile-first, dark-theme, neon-accent React Native UI for PlaySpace that prioritizes a polished, accessible, RTL-capable interface for booking gaming lounges.

Global design tokens (single source of truth)

Provide a theme.ts exported object.

{
  "colors": {
    "bg": "#0F1115",
    "panel": "#141618",
    "card": "#191b1f",
    "mutedText": "#BFC4C8",
    "primaryGradientStart": "#7B61FF",
    "primaryGradientEnd": "#FF5CA1",
    "accent": "#4AA3FF",
    "success": "#2ECC71",
    "danger": "#E74C3C",
    "badgeBusy": "#E74C3C",
    "badgeAvailable": "#2ECC71"
  },
  "typography": {
    "heading": {"fontFamily":"Orbitron, Poppins, System","fontWeight":"700","sizes": {"xl": 24, "lg":20, "md":16, "sm":14}},
    "body": {"fontFamily":"Inter, System","fontWeight":"400","sizes": {"md":14, "sm":12}}
  },
  "spacing": {"xs":4,"sm":8,"md":12,"lg":16,"xl":24,"xxl":32},
  "radii": {"sm":6,"md":12,"lg":20,"pill":999},
  "elevation": {"low":2,"mid":6,"high":12}
}


Use StyleSheet or CSS-in-JS. Export tokens to allow consistent spacing/typography across components.

Palette & visual identity

Dark primary surface: #0F1115 (app background).

Panel/card: #141618 / #191b1f with 8–14% white overlay for subtle contrast.

Primary accent: neon gradient #7B61FF -> #FF5CA1. Use for header background, CTA buttons, and card accents.

Secondary accent: #4AA3FF (links, price).

Badges: green #2ECC71 for Available, red #E74C3C for Busy.

Typography: headline font bold & geometric (Orbitron or Poppins bold), body font Inter/Poppins regular.

Shadows: soft, slightly bluish glow for cards and neon elements.

Core screens & flow

Onboarding (carousel)

Full-screen cards with icon, short title, description, pager dots, CTA button nav.next (rounded rectangular gradient).

Safe-area top and bottom; center the content vertically.

Welcome / Home (main)

Top gradient header with location and icons (bell, user).

SearchBar inside header (rounded, placeholder "Search location…", left icon magnifier, right filter chip).

Filters row: Chip components (All, PS5, PS4, Xbox, VR) — horizontally scrollable. Active chip filled with gradient ring.

Banner card (rounded) for promotions.

Section "Nearby Rooms" with RoomCard list (vertical scroll). Each RoomCard: thumbnail, title, subtitle (location + distance), tags (chips), rating, price, availability badge (right top). Tappable to RoomDetail.

Auth Flow (Login / Signup / OTP)

Centered card with inputs, primary CTA gradient button, secondary text link.

Input component shows label, error text, icon. Error states use red outline and small helper message.

Keyboard-aware scroll view for smaller devices.

Room Details (planned)

Large cover image, title, availability status, gallery, booking CTA sticky bottom.

Bookings / Profile Tabs

Bottom tab navigation with Home, Bookings, Profile icons; tab bar elevated with rounded corners.

Reusable components (spec & props)

Provide TypeScript interfaces and file-per-component.

Button (Button.tsx)

Props: variant: 'primary'|'secondary'|'ghost', onPress, loading, disabled, icon?, accessibilityLabel?.

Primary uses gradient background, white text, 48px height, 16px border-radius.

Input (Input.tsx)

Props: value, onChangeText, label?, placeholder, keyboardType, secureTextEntry?, error?, containerStyle?, testID?.

Must guard style props with optional chaining; never access .marginBottom on undefined.

Example defensive style usage:

const marginBottom = containerStyle?.marginBottom ?? theme.spacing.md;


Card / RoomCard (RoomCard.tsx)

Props: room (object), onPress.

Display thumbnail left, content right, availability badge top-right.

Chip (Chip.tsx)

Props: label, active, onPress.

Active: filled with gradient border + inner background; otherwise outline.

SearchBar (SearchBar.tsx)

Props: value, onChange, onFilterPress.

Use TouchableOpacity for filter button with funnel icon.

OnboardingCarousel (OnboardingCarousel.tsx)

Use FlatList horizontal paging, page indicator.

Badge (Badge.tsx)

Small pill with text and background color; used for status.

Component states & behavior

Loading: skeleton card placeholders (animated gradient shimmer).

Empty: friendly illustration + CTA.

Error: card-level error message and retry button.

Disabled: buttons reduced opacity & not tappable.

Press feedback: ripple on Android, opacity/haptic feedback on iOS.

Layout & spacing rules

Base grid: 4px unit. Spacing scale: 4 / 8 / 12 / 16 / 24 / 32.

Content horizontal padding: 16px on small devices, 20–24px on large devices.

Border radius: card 20px, small button 12px, chips 999px (pill).

Tap targets: minimum 48x48 px.

Animations & micro-interactions

Header gradient entrance: fade + slide-down.

Buttons: small scale on press (0.98).

Card press: slight elevation boost and scale.

Badge transitions: fade + slide.

Page transitions: default stack transitions with subtle fade on details.

Accessibility & localization (must include)

Labels: every icon and input must have accessibilityLabel and accessibilityHint.

Color contrast: ensure text over cards meets AA contrast (use muted white for body text #E6E6E6).

RTL: all layouts must flip for Arabic — use I18nManager forcing RTL when Arabic selected; test padding/margins; ensure icons mirror when appropriate.

Dynamic font sizes: support system font scaling (use allowFontScaling).

Keyboard navigation: KeyboardAvoidingView and ScrollView for forms.

Platform specifics

iOS: use SafeAreaView top notch safe area & default haptics.

Android: ensure back button handler for modals and exit flows; use ripple effects.

Folder & file deliverables (exact)
src/
  components/
    Button/
      Button.tsx
      Button.styles.ts
    Input/
      Input.tsx
      Input.styles.ts
    RoomCard/
      RoomCard.tsx
      RoomCard.styles.ts
    Chip/
      Chip.tsx
    SearchBar/
      SearchBar.tsx
    OnboardingCarousel/
      OnboardingCarousel.tsx
  screens/
    Onboarding/
      OnboardingScreen.tsx
    Auth/
      LoginScreen.tsx
      SignupScreen.tsx
    Home/
      HomeScreen.tsx
    Room/
      RoomDetailScreen.tsx
  navigation/
    index.tsx
  theme/
    theme.ts
  assets/
    images/
      banner.png
      placeholder-room.jpg
  i18n/
    en.json
    ar.json
  data/
    sample-rooms.json

Sample JSON: room object (for UI rendering / seed data)
{
  "id": "r1",
  "title": "Elite Gaming Zone",
  "location": "Downtown Mall",
  "distanceKm": 0.5,
  "tags": ["PS5","PS4","Xbox"],
  "rating": 4.8,
  "pricePerHour": 25,
  "status": "available",
  "thumbnail": "assets/images/room-elite.jpg"
}

Defensive coding checks (to avoid your marginBottom error)

Never read properties from possibly-undefined style objects. Always use:

const marginBottom = props.containerStyle?.marginBottom ?? theme.spacing.md;


Validate props with TypeScript types or PropTypes. Example interface:

interface InputProps {
  value: string;
  onChangeText: (t: string) => void;
  containerStyle?: ViewStyle;
  error?: string | null;
}


Add runtime guards in render:

if (!value && required) { /* show error UI */ }


Add an Error Boundary at app root to catch render errors and show fallback UI.

Assets & icons (list)

Icons: search, filter, bell, user, location pin, star, back arrow, menu. Use vector icons (react-native-vector-icons or svg).

Images: promo banner, room thumbnails (3 sizes), onboarding illustrations. Provide both 2x and 3x densities.

Testing & QA checklist

Visual QA: verify in small phones (320px width), medium (375–411), large (768).

RTL QA: switch to Arabic and verify every screen.

Accessibility: run axe/react-native-a11y checks (labels, contrast).

Interaction: test keyboard behavior on Login; test bottom tab navigation state.

Edge cases: long titles, no-image rooms, network error, slow loading.

Delivery format expected from the AI

A zipped folder with src/ files above, component code in TypeScript, working navigation, sample data & assets, README.md with run steps, and a UI-spec.md summarizing tokens & design rules.

Provide a short CHANGELOG and HOW TO TEST steps.

Example small code snippet to include in the UI (Input defensive pattern)
// Input.tsx (excerpt)
import React from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import theme from '../../theme/theme';

interface Props {
  value: string;
  onChangeText: (t: string) => void;
  containerStyle?: ViewStyle;
  error?: string | null;
  placeholder?: string;
}

export default function Input({ value, onChangeText, containerStyle, error, placeholder }: Props) {
  const marginBottom = (containerStyle as any)?.marginBottom ?? theme.spacing.md;
  return (
    <View style={[styles.container, { marginBottom }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        allowFontScaling
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  input: { height: 48, paddingHorizontal: 12, borderRadius: 12, color: '#E6E6E6' },
  error: { color: theme.colors.danger, marginTop: 6, fontSize: 12 },
});

Deliverables checklist (what I produced here)

Short, copy-paste AI command to generate the UI. ✅

Full, detailed UI specification focused entirely on mobile UI (components, tokens, screens, behaviors, accessibility, RTL). ✅

Component list and file/folder structure for implementation. ✅

Defensive coding guidelines and a sample Input.tsx snippet to avoid marginBottom undefined. ✅

JSON schema example for rooms and seed data. ✅                                                                         # PlaySpace - Gaming Arcade Booking App

A comprehensive React Native application for booking PlayStation gaming arcades, built with Expo and TypeScript.

## 🎮 Features

### ✅ Completed Features
- **Authentication System**
  - Login/Register screens with form validation
  - Forgot password functionality
  - OTP verification system
  - Social login placeholders

- **Onboarding Flow**
  - Welcome screen with animations
  - Feature introduction carousel
  - Language selection (English/Arabic)

- **Core UI Components**
  - Custom Button component with multiple variants
  - Input component with validation
  - Card component
  - Loading screen with animations

- **Navigation Structure**
  - Bottom tab navigation
  - Stack navigation for different flows
  - Authentication flow
  - Onboarding flow

- **Home Screen**
  - Location-based content
  - Featured rooms display
  - Nearby arcades
  - Quick filters
  - Search functionality placeholder

- **Design System**
  - Comprehensive theming (Light/Dark)
  - Typography system with Arabic support
  - Spacing system
  - Color palette

### 🚧 In Progress
- Search functionality
- Room details screens
- Booking flow
- Payment integration
- User profile management

### 📋 Planned Features
- Real-time availability
- Push notifications
- Offline support
- Advanced filtering
- Reviews and ratings
- Owner dashboard

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation v7
- **State Management**: Redux Toolkit
- **UI Components**: Custom design system
- **Backend**: Supabase (planned)
- **Authentication**: Custom implementation

## 📱 Platform Support

- iOS (iPhone & iPad)
- Android (Phones & Tablets)
- Web (React Native Web)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playBooking
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on specific platform**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Basic components (Button, Input, Card)
│   ├── forms/          # Form-specific components
│   ├── ui/             # Custom UI elements
│   └── animations/     # Animation components
├── screens/            # Application screens
│   ├── auth/           # Authentication screens
│   ├── onboarding/     # Onboarding flow
│   ├── home/           # Home screen
│   ├── search/         # Search functionality
│   ├── bookings/       # Booking management
│   ├── profile/        # User profile
│   └── common/         # Common screens (Loading, etc.)
├── navigation/         # Navigation configuration
├── hooks/              # Custom React hooks
├── store/              # Redux store and slices
├── services/           # API and external services
├── styles/             # Design system and themes
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎨 Design System

The app uses a comprehensive design system with:

- **Themes**: Light and dark mode support
- **Typography**: Multi-language font support (English/Arabic)
- **Colors**: Consistent color palette
- **Spacing**: Systematic spacing scale
- **Components**: Reusable UI components

## 🔧 Development
