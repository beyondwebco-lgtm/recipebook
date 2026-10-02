# Recipe Book Agent Instructions

## Overview
This repository contains a simple, highly performant **Vanilla HTML, CSS, and JS Recipe Book**. It is a purely static website. 

## Important Guidelines for AI Agents
1. **No Bundlers / Node Modules**: Do NOT install any npm libraries, bundlers (Vite, Webpack), compilers, or frameworks (React, Vue, Next.js) unless explicitly requested by the user. Keep it purely static.
2. **Style Consistency**: 
   - All styling is contained in [css/style.css](file:///home/captain/Documents/GitHub/recipebook/css/style.css).
   - Use CSS custom properties defined in `:root` (e.g. `--primary-bg`, `--card-bg`, `--border-radius`, `--accent-color`) to maintain consistent themes and colors.
   - Do NOT add inlined `<style>` blocks or ad-hoc style libraries like Tailwind CSS unless requested.
3. **Database Registry**: 
   - The homepage loads all recipes dynamically from the `recipes` array inside [js/script.js](file:///home/captain/Documents/GitHub/recipebook/js/script.js).
   - When adding or editing a recipe, always make sure it is registered in `js/script.js` with correct fields, especially the search-optimized `ingredients` array.
4. **HTML Detail Pages**:
   - Recipe detail pages are located inside the [recipes/](file:///home/captain/Documents/GitHub/recipebook/recipes/) directory.
   - Because they are in a subdirectory, always use relative paths going up one level (e.g., `../css/style.css`, `../index.html`, and `../images/image-name.png`).
   - Use semantic HTML: `<nav>` for the navbar, `<main>` for container, `<header>` for stats/intro, and `<aside>` for ingredients/tips.

## Common Operations
- **Locally Previewing**: Run `python3 -m http.server 8000` to serve the files locally.
- **Search and Categories**: Filtering logic and search keyword indexing is handled client-side inside `js/script.js`.
