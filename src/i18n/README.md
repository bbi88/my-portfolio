# Internationalization (i18n) Setup

This folder structure is prepared for future multilingual support (English, Japanese, Korean).

## Structure

```
i18n/
├── locales/
│   ├── en/     # English translations
│   ├── ja/     # Japanese translations
│   └── ko/     # Korean translations
└── README.md
```

## Future Implementation

To implement i18n, you can use libraries like:
- `next-intl` - Recommended for Next.js App Router
- `react-i18next` - Popular React i18n solution
- `next-i18next` - Next.js specific wrapper for react-i18next

## Example Structure

Each locale folder can contain translation files:
- `common.json` - Common UI text
- `home.json` - Homepage content
- `services.json` - Services section
- `projects.json` - Projects section
- etc.
