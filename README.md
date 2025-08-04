 # Hipster App

The Hipster App is a React-based web application showcasing a responsive, theme-switchable UI for a modern, stylish experience. It features three distinct themes (Minimalist, Dark with Sidebar, Colorful Card-based), a hamburger menu for navigation on small screens, and a theme switcher dropdown. The app includes pages for Home, About, and Contact, with a product grid for displaying content (e.g., products or deals).

## Features
- **Responsive Design**: Adapts to mobile (`<640px`), tablet, and desktop screens, with a hamburger menu dropdown on mobile.
- **Theme Switching**: Three unique themes:
  - **Theme 1 (Minimalist)**: Light background, centered grid, Roboto font, spacious layout.
  - **Theme 2 (Dark with Sidebar)**: Dark gradient, sidebar layout, Playfair Display font, compact with metallic accents.
  - **Theme 3 (Colorful Card-based)**: Colorful gradient, card-based grid, Pacifico font, vibrant design.
- **Navigation**: Sticky header with navlinks (`Home`, `About`, `Contact`) and theme switcher, collapsing into a hamburger menu on small screens.
- **Consistent Styling**: Dark red (`#8B0000`, hover `#A52A2A`) navlinks and dark yellow (`#B8860B`) text across all themes.
- **Product Grid**: Displays content in a responsive grid (1-4 columns based on screen size) with hover effects.
- **Hamburger Menu**: On mobile, the dropdown appears directly below the hamburger icon, showing navlinks and the theme switcher.

## Prerequisites
- **Node.js**: Version 14.x or higher (recommended: 18.x).
- **npm**: Version 6.x or higher (included with Node.js).
- **Git**: For cloning the repository.
- **Browser**: Chrome, Firefox, or any modern browser for testing.

## Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/hipster-app.git
   cd hipster-app

   Install Dependencies:
Install required packages (React, TypeScript, React Router, etc.):

npm install


Verify project structure

hipster-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ProductCard.tsx
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   ├── types.ts
│   ├── styles.css
│   ├── index.tsx
│   ├── App.tsx
├── package.json
├── tsconfig.json
├── README.md


run usin npm start
