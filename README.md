# PlaySpace - Gaming Arcade Booking App

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

### Code Style
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture

### State Management
- Redux Toolkit for global state
- React hooks for local state
- RTK Query for API calls (planned)

### Testing
- Unit tests (planned)
- Integration tests (planned)
- E2E tests (planned)

## 📊 Database Schema

The app is designed with a comprehensive database schema including:

- Users and authentication
- Arcades and rooms
- Bookings and payments
- Reviews and ratings
- Notifications and preferences

## 🌐 Internationalization

- English (LTR) and Arabic (RTL) support
- Dynamic language switching
- RTL layout support
- Localized content

## 🔒 Security

- Secure authentication flow
- Input validation
- Data encryption (planned)
- API security (planned)

## 📈 Performance

- Optimized bundle size
- Lazy loading
- Image optimization (planned)
- Caching strategies (planned)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team

## 🗺 Roadmap

### Phase 1: Foundation ✅
- [x] Project setup
- [x] Authentication system
- [x] Basic UI components
- [x] Navigation structure

### Phase 2: Core Features 🚧
- [ ] Search and filtering
- [ ] Room details
- [ ] Booking flow
- [ ] Payment integration

### Phase 3: Advanced Features 📋
- [ ] Real-time updates
- [ ] Push notifications
- [ ] Offline support
- [ ] Advanced analytics

### Phase 4: Polish & Launch 📋
- [ ] Performance optimization
- [ ] Testing
- [ ] App store preparation
- [ ] Production deployment

---

**Built with ❤️ for the gaming community**
