# 📖 Recipe Book

A clean, modern, and fully responsive recipe book web application. It features real-time search, category-based filtering, and beautiful card layouts for all recipes.

## 🚀 How to Run the Website Locally

Since this is a static website built with pure HTML, CSS, and JavaScript, it does not require any build steps or database setups! You can run it in two ways:

### Method 1: Open Directly in Browser
Simply navigate to the project directory and double-click `index.html` to open it in your default web browser.

### Method 2: Use a Local HTTP Server (Recommended)
Running the site through a local server ensures correct resolution of paths and browser settings.
- **Python**: If you have Python installed, open your terminal in this directory and run:
  ```bash
  python3 -m http.server 8000
  ```
  Then, open `http://localhost:8000` in your browser.
- **Node.js (http-server)**: If you have Node.js installed, run:
  ```bash
  npx http-server -p 8000
  ```
  Then, open `http://localhost:8000` in your browser.
- **VS Code Extension**: If you use VS Code, right-click `index.html` and select **"Open with Live Server"**.

---

## 🛠️ Project Structure

- `index.html`: The home page of the application, featuring the search input, category filters, and recipe card container.
- `recipebook_details.md`: A detailed breakdown of the application architecture, styles, and features.
- `css/style.css`: Contains CSS variables, typography setups, global layouts, micro-animations, and responsive media queries.
- `js/script.js`: Stores the database of recipes and handles the rendering, search matching, and category filtering.
- `images/`: Directory containing high-quality images for each recipe card.
- `recipes/`: Directory containing HTML pages for each individual recipe (e.g., `chicken_masala.html`, `south_indian_sambar.html`).

---

## 🍳 How to Add a New Recipe

Adding a new recipe to this site is straightforward. Follow these steps:

### Step 1: Add Recipe Metadata
Open `js/script.js` and add a new recipe object to the `recipes` array:
```javascript
{
  id: 6, // Increment the ID
  title: "Recipe Name",
  category: "Category Name",
  image: "images/recipe-image.png",
  prepTime: "X mins",
  cookTime: "Y mins",
  link: "recipes/recipe_file_name.html",
  ingredients: ["ingredient one", "ingredient two"] // Used for search matching
}
```

### Step 2: Add an Image
Save a photo for your recipe in the `images/` directory. Ensure the path matches the `image` field in your metadata.

### Step 3: Create the Detail Page
Create a new HTML file under the `recipes/` directory (e.g., `recipes/recipe_file_name.html`). Copy the layout from an existing recipe like `recipes/tomato_curry.html` and update the content:
- Update the page `<title>`.
- Change the header category, title, description, and stats.
- List the ingredients in the `.ingredients-section` list.
- List the steps in the `.instructions-section` ordered list.

---

## 📝 License
This project is open-source and free to modify. Happy cooking!
