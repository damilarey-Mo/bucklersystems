# Buckler Systems Website

A modern Next.js website for Buckler Systems, a leading provider of armored vehicles and security solutions.

## Features

- Responsive navigation with mobile menu
- Hero section with call-to-action
- Featured vehicles showcase
- Security features highlight
- Contact and consultation booking
- Modern UI with Tailwind CSS

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide Icons

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd buckler-systems
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── vehicles/          # Vehicle pages
│   ├── services/          # Services pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
└── public/               # Static assets
    └── images/           # Vehicle images
```

## Development

- The project uses Next.js 14 with the App Router
- Styling is done with Tailwind CSS
- Vehicle data is currently hardcoded but can be easily replaced with an API
- Images are placeholder images from Unsplash

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
