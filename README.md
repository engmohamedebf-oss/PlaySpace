# PlaySpace (Expo + TypeScript)

Mobile-first dark/neon gaming-arcade booking UI.

## Run

```bash
npm install
npm start
# or
npm run ios
npm run android
```

## Features
- Dark theme, neon gradients
- Stack + Bottom Tabs
- Reusable components: Button, Input, Chip, SearchBar, RoomCard, OnboardingCarousel
- RTL (Arabic) ready via `I18nManager`
- Accessibility labels/hints added to interactive elements

## Test Checklist
- Visual on 320/375/411/768 widths
- RTL switch to Arabic (set device language); relaunch app
- Accessibility: verify labels and color contrast
- Interaction: keyboard on Login, tab bar states
- Edge: long titles, empty list, loading shimmer (placeholder), error state (simulate)

## Assets Needed
- Icons: search, options, bell, person, location, star, back
- Images: banner.png, placeholder-room.jpg, onboarding illustrations (2x/3x)

## Localization
- Strings in `src/i18n/en.json`, `src/i18n/ar.json`

## Defensive Coding
- Optional chaining for styles (e.g., containerStyle?.marginBottom ?? theme.spacing.md)
- ErrorBoundary in `App.tsx`
