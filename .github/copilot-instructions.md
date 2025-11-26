# GitHub Copilot Instructions for Portfolio Project

## Project Context

-   **Framework**: React 19 + Vite 6 + TypeScript 5.7
-   **Styling**: Tailwind CSS 4 + CSS Variables (defined in `src/index.css`)
-   **Animation**: Framer Motion + React Three Fiber + tsparticles
-   **Icons**: Lucide React

## Architecture & Structure

-   **Entry Point**: `src/main.tsx` mounts `src/App.tsx`.
-   **Layout**: `src/App.tsx` handles global backgrounds. `src/app/components/home/Home.tsx` is the main layout orchestrator.
-   **Components**: Located in `src/app/components/`. Grouped by feature (e.g., `hero/`, `about/`, `projects/`).
-   **Navigation**: Single-page anchor navigation (`#home`, `#projects`) managed by `Navbar.tsx`.
-   **Assets**: `src/assets/` for static files.

## Styling Conventions

-   **Tailwind v4**: Use direct `className` with arbitrary values for complex styles (e.g., `bg-[rgba(27,27,47,0.78)]`).
-   **Colors**: Use CSS variables from `index.css` (e.g., `var(--isabelline-800)`, `var(--space_cadet-500)`).
-   **Glassmorphism**: Use `backdrop-blur-xl` combined with semi-transparent backgrounds and borders.
-   **Gradients**: Heavy use of linear and radial gradients for backgrounds and borders.
-   **Fonts**: "Poppins" is the primary font.

## Animation Patterns

-   **Framer Motion**: Use `motion.div` (or other elements) with `initial`, `animate`, and `transition` props.
-   **Transitions**: Prefer smooth, spring-based or ease-out transitions (e.g., `duration: 0.6`).
-   **3D**: Use `@react-three/fiber` for 3D elements (e.g., `StarsBackground.tsx`).

## Coding Standards

-   **Components**: Functional components with named interfaces for props.
-   **Exports**: Use `export default` for components.
-   **Naming**: PascalCase for component files, camelCase for utility folders.
-   **Types**: Strict TypeScript usage. Define interfaces for data structures (e.g., `Project`, `TechIcon`).

## Critical Workflows

-   **Dev Server**: `npm run dev` (Vite).
-   **Build**: `npm run build` (tsc + vite build).
-   **Lint**: `npm run lint` (ESLint).

## Key Files

-   `src/index.css`: Global styles and CSS variable definitions.
-   `src/app/components/home/Home.tsx`: Main page structure.
-   `src/app/utils/tech-icons.tsx`: Icon mappings and configurations.
