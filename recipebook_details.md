# Recipe Book - Web Application Details

This document provides a comprehensive overview of the **Recipe Book** website, including its architecture, design system, core features, and directory structure.

---

## 1. Project Overview
The **Recipe Book** is a lightweight, responsive, and aesthetically polished web application designed to host, filter, and search a curated list of cooking recipes. The site is built with a focus on simplicity, readability, and modern aesthetics (clean lines, soft shadows, responsive grids, and typography).

### Technology Stack
- **HTML5**: Standard markup using semantic tags (`<nav>`, `<main>`, `<section>`, `<aside>`).
- **CSS3 (Vanilla)**: Custom styling using CSS variables, flexbox, grid, smooth transitions, and media queries.
- **JavaScript (Vanilla ES6)**: Client-side logic for real-time search, dynamic category filtering, and DOM manipulation.
- **Google Fonts**: Inter typography for a clean, premium, tech-forward presentation.

---

## 2. Key Features

### 🔍 Real-Time Search
The homepage includes a prominent search bar. As the user types, the application dynamically filters the recipes array. The search engine checks:
1. The **title** of the recipe (e.g., "Sambar").
2. The **category** (e.g., "South Indian").
3. The **ingredients** list (e.g., searching "tamarind" shows Sambar and Tomato Curry).

### 🏷️ Category Filtering
Filter buttons (pills) on the homepage allow users to quickly view recipes belonging to a specific category. Selecting a category adjusts the list in real-time, working in tandem with the search bar. Active filters include:
- **All** (Default view)
- **Curries**
- **High Protein**
- **South Indian** (Newly added!)

### 📱 Responsive Design
The website is fully responsive:
- **Grid Layout**: On larger screens, recipes are arranged in a multi-column grid that automatically adjusts column counts based on screen width. On mobile, it displays as a single column.
- **Detail Pages**: The desktop layout features a side-by-side view with ingredients on the left (as an aside) and step-by-step instructions on the right. On screens narrower than `900px`, these stack vertically to ensure text readability.

---

## 3. Directory Structure
The repository is organized as follows:
```text
recipebook/
├── index.html                 # Homepage containing the search, categories, and main container
├── README.md                  # Project instructions and startup guide
├── recipebook_details.md      # Detailed architectural/technical specification of the app (this file)
├── css/
│   └── style.css              # Custom styling, design tokens, variables, and responsive layout
├── js/
│   └── script.js              # Client-side recipe metadata array and search/filter rendering logic
├── images/
│   ├── biryani.jpg            # Recipe image asset
│   ├── carrot-curry.png       # Recipe image asset
│   ├── chicken-masala.png     # Recipe image asset
│   ├── pancakes.jpg           # Recipe image asset
│   ├── pasta.jpg              # Recipe image asset
│   ├── south-indian-sambar.png# New image asset for South Indian Sambar (Serves 4)
│   ├── sambar-serves-2-3.png  # New image asset for Sambar (Serves 2-3)
│   └── tomato-curry.png       # New image asset for Tomato Curry
└── recipes/
    ├── chicken_masala.html    # Chicken Masala detail page
    ├── carrot_coconut_curry.html # Carrot Coconut Curry detail page
    ├── south_indian_sambar.html  # South Indian Sambar (Serves 4) detail page
    ├── sambar_serves_2_3.html # Sambar Recipe (Serves 2-3) detail page
    └── tomato_curry.html      # Tomato Curry detail page
```

---

## 4. Design System & Aesthetics
The visual identity of the website is built upon modern UI patterns:
- **Color Palette**:
  - Primary Background: `#FAFAFA` (soft off-white)
  - Card & Navbar Background: `#FFFFFF` (pure white)
  - Text Primary: `#111827` (dark charcoal)
  - Text Secondary: `#6B7280` (cool grey)
  - Accent Color: `#007AFF` (iOS-like deep blue) for active elements, hover highlights, and bullets.
  - Primary Buttons: `#111111` (rich near-black)
- **Shadows & Transitions**:
  - Cards feature a subtle, soft shadow (`0 10px 30px rgba(0,0,0,0.06)`).
  - Hovering over cards triggers a transition that lifts the card slightly (`transform: translateY(-10px)`) and deepens the shadow.
- **Typography**:
  - The `Inter` font family provides readability across text scales.
  - High-weight titles (font weight 700 to 800) give a clean hierarchy.

---

## 5. Recipe Collection Catalog

### 1. Chicken Masala
* **Category**: High Protein
* **Prep Time**: 5 mins | **Cook Time**: 12 mins
* **Description**: A quick, high-protein chicken thigh stir-fry seasoned with tandoori spices and ghee.

### 2. Carrot Coconut Curry
* **Category**: Curries
* **Prep Time**: 10 mins | **Cook Time**: 15 mins
* **Description**: A traditional coconut-infused carrot stir-fry (poriyal-style) tempered with mustard seeds and curry leaves.

### 3. South Indian Sambar (Serves 4)
* **Category**: South Indian
* **Prep Time**: 15 mins | **Cook Time**: 30 mins
* **Description**: A classic South Indian vegetable stew made with cooked toor dal, mixed vegetables (drumstick, eggplant, okra, bottle gourd), tamarind pulp, and sambar powder.

### 4. Sambar Recipe (Serves 2–3)
* **Category**: South Indian
* **Prep Time**: 10 mins | **Cook Time**: 25 mins
* **Description**: A smaller-batch, quick homestyle Sambar cooked with eggplant, toor dal, and aromatic temperings.

### 5. Tomato Curry
* **Category**: South Indian
* **Prep Time**: 10 mins | **Cook Time**: 15 mins
* **Description**: A tangy, spicy curry made of cooked, lightly mashed tomatoes simmered with green chillies, garlic, spices, and a light touch of tamarind. Excellent accompaniment for idli, dosa, and rice.
