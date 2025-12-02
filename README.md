# AXON - Professional Developer Portfolio

A modern, multilingual portfolio website for selling development services. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **4 Languages**: English, German, French, Arabic (with RTL support)
💱 **Multi-Currency**: EUR and MAD with automatic conversion
🎨 **Modern Design**: Clean, professional UI with smooth animations
📱 **Fully Responsive**: Optimized for all devices
🚀 **Performance**: Built with Next.js 15 App Router
🎯 **3 Pricing Tiers**: Basic, Standard, Premium packages

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **i18n**: next-intl
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000/en](http://localhost:3000/en)

## Available Languages

- `/en` - English
- `/de` - German (Deutsch)
- `/fr` - French (Français)
- `/ar` - Arabic (العربية) with RTL support

## Project Structure

```
axon/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with i18n
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Hero.tsx           # Hero section with animations
│   ├── Services.tsx       # Services showcase
│   ├── Pricing.tsx        # Pricing tiers
│   ├── Contact.tsx        # Contact form
│   ├── Navigation.tsx     # Responsive nav with language/currency switchers
│   └── Footer.tsx         # Footer component
├── contexts/
│   └── CurrencyContext.tsx # Currency management
├── messages/
│   ├── en.json           # English translations
│   ├── de.json           # German translations
│   ├── fr.json           # French translations
│   └── ar.json           # Arabic translations
├── i18n.ts               # i18n configuration
└── middleware.ts         # Locale routing middleware
```

## Customization

### Update Pricing

Edit the pricing values in `messages/{locale}.json`:

```json
"pricing": {
  "basic": {
    "price": "650"
  }
}
```

### Change Colors

Modify the Tailwind config in `tailwind.config.ts` or update gradient colors in components.

### Add More Services

Edit the `services` array in [components/Services.tsx](components/Services.tsx) and add translations to the message files.

### Update Contact Info

Edit the contact links in [components/Contact.tsx](components/Contact.tsx) and [components/Footer.tsx](components/Footer.tsx).

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
npm start
```

## Performance Features

- ✅ Server-side rendering
- ✅ Static page generation
- ✅ Optimized images
- ✅ Code splitting
- ✅ Modern CSS (Tailwind)
- ✅ Smooth animations (Framer Motion)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Contact

For questions or customization requests, reach out through the contact form on the website.
