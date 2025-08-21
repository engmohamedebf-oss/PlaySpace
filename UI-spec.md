## PlaySpace UI Spec (Mobile-first)

- **Theme tokens**: see `src/theme/theme.ts` for colors, typography, spacing, radii, elevation.
- **Palette**: bg #0F1115, panel #141618, card #191b1f, gradient #7B61FF→#FF5CA1, accent #4AA3FF, success #2ECC71, danger #E74C3C.
- **Typography**: Heading sizes xl 24, lg 20, md 16; Body md 14, sm 12.
- **Spacing**: 4/8/12/16/24/32. Radii: 6/12/20/pill.
- **Elevation**: low 2, mid 6, high 12.

### Components
- Button: 48px height, gradient primary, variants primary/secondary/ghost.
- Input: label, error text, defensive styles.
- Chip: pill, active gradient ring.
- SearchBar: rounded, left search icon, right filter button.
- RoomCard: thumbnail left, details right, status badge top-right.
- OnboardingCarousel: FlatList paging, dots, CTA.
- Badge: pill for statuses.

### Screens
- Onboarding: 3 slides, next/get started, safe areas.
- Home: Gradient header, SearchBar, filters row, banner placeholder, Nearby Rooms list.
- Auth (Login/Signup): Centered card, keyboard-aware.
- Room Detail: Cover image, title, sticky CTA.

### Behaviors
- Loading: show ActivityIndicator; shimmer can be added.
- Empty: friendly message with CTA.
- Error: inline message with retry.
- Press feedback: opacity; Android ripple via Touchable* if desired.
- Animations: header fade+slide, button scale (0.98) on press (future), badge fade.

### Accessibility & RTL
- All interactive elements have accessibilityLabel/hints.
- Text allows font scaling.
- RTL via I18nManager in `App.tsx` based on locale.

### Testing
- Widths: 320/375/411/768.
- RTL by switching device language to Arabic and relaunching app.
- Validate tab navigation, login keyboard behavior.