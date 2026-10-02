# Recipe Book Developer Guide

## Project Overview
This repository contains a clean, client-side **Recipe Book** web application. It features dynamic recipe filtering, live search functionality (by title, ingredients, or category), category tags, and responsive, detail-rich recipe layout pages.

## Tech Stack
- **Languages**: HTML5, CSS3, JavaScript (ES6)
- **Frameworks/Libraries**: Pure Vanilla JS & CSS (no framework or build tool required)
- **Fonts**: Inter (via Google Fonts)

## Project Directory Structure
- `index.html`: Main landing page featuring the search bar, category filtering buttons, and recipe grid injection target.
- `css/style.css`: Design system variables, layout styles, cards, responsiveness, and typography.
- `js/script.js`: App controller containing the `recipes` database array, DOM interaction, search filtering logic, and card HTML generation.
- `recipes/`: Contains individual detail pages for each recipe.
  - `aloo_masala_curry.html`
  - `carrot_coconut_curry.html`
  - `chicken_masala.html`
  - `palakura_pappu_ground_spice.html`
  - `sambar_serves_2_3.html`
  - `simple_andhra_palakura_pappu.html`
  - `south_indian_sambar.html`
  - `tomato_curry.html`
- `images/`: High-quality recipe photos (PNG/JPG format).

## Development Commands
This is a purely static website. No compiler, packager, or builder is needed.
- **Run locally**: Open [index.html](file:///home/captain/Documents/GitHub/recipebook/index.html) directly in a web browser, or run a simple local web server in this directory:
  ```bash
  python3 -m http.server 8000
  ```
  Then navigate to `http://localhost:8000`.

## How to Add or Update Recipes
To add a new recipe to the book, follow these three steps:
1. **Add Recipe Image**: Save a food photo in [images/](file:///home/captain/Documents/GitHub/recipebook/images/) (preferably PNG or JPG, square or 16:10 aspect ratio).
2. **Register in Database**: Add the recipe object metadata to the `recipes` array in [js/script.js](file:///home/captain/Documents/GitHub/recipebook/js/script.js):
   ```javascript
   {
     id: UNIQUE_ID,
     title: "Recipe Name",
     category: "Category Name", // e.g. "South Indian", "Curries", "High Protein"
     image: "images/your-image.png",
     prepTime: "X mins",
     cookTime: "Y mins",
     link: "recipes/your_recipe_file.html",
     ingredients: ["ingredient1", "ingredient2", ...] // for search index
   }
   ```
3. **Create Recipe Detail Page**: Create a new HTML file under [recipes/](file:///home/captain/Documents/GitHub/recipebook/recipes/) using other recipes as a blueprint. Ensure it links properly to `../css/style.css` and links back to `../index.html`.
