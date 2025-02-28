# Project Setup Instructions

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (LTS version recommended)
- **Yarn** or **npm** (package manager)
- **Git** (for version control)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/i-kohan/financial-dashboard.git
   cd financial-dashboard
   ```
2. **Install dependencies:**
   Using Yarn:
   ```sh
   yarn install
   ```
   Or using npm:
   ```sh
   npm install
   ```

## Running the Application

### Development Mode

To start the development server:

```sh
yarn dev
```

Or using npm:

```sh
npm run dev
```

The app should be available at `http://localhost:5173/` (default Vite port).

### Production Build

To create a production-ready build:

```sh
yarn build
```

Or using npm:

```sh
npm run build
```

To preview the build:

```sh
yarn preview
```

Or using npm:

```sh
npm run preview
```

## Project Structure

```
📂 src/
 ├── 📂 components/       # Reusable UI components
 ├── 📂 context/          # Context providers
 ├── 📂 features/         # Feature-based modules
 ├── 📂 icons/            # Icon components
 ├── 📂 layouts/          # Layout components
 ├── 📂 pages/            # Page components
 ├── 📂 services/         # API calls and external services
 ├── 📜 index.css         # Main styles
 ├── 📜 main.tsx          # Entry point
 ├── 📜 routes.tsx        # Route definitions
```

## Libraries Used

- **Vite** (for fast development server and build process)
- **React 19** with `React.lazy()` and `Suspense` for performance optimization
- **Tailwind CSS** (for styling)
- **React Hook Form** (for form handling and validation)
- **Context API** (for global state management, e.g., user profile data)
- **Lazy-loading & Code Splitting** (for performance optimization)
- **Swiper** (for interactive carousels/sliders)
- **React Chart.js 2** (for data visualizations)
- **Accessibility Features** (ARIA labels, keyboard navigation)

## Known Issues & Future Improvements

- Improve initial load time by optimizing image loading.
- Implement service workers for caching static assets.
- Enhance mobile responsiveness in some areas.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

---

For any issues, contact **Ilya** at **[i.kohanvs@gmail.com](mailto:i.kohanvs@gmail.com)**.
