const recipes = [
  {
    id: 1,
    title: "Chicken Masala",
    category: "High Protein",
    image: "images/chicken-masala.png",
    prepTime: "5 mins",
    cookTime: "12 mins",
    link: "recipes/chicken_masala.html",
    ingredients: ["chicken thighs", "chilli powder", "turmeric", "garam masala", "tandoori masala", "ginger-garlic paste", "ghee"]
  },
  {
    id: 2,
    title: "Carrot Coconut Curry",
    category: "Curries",
    image: "images/carrot-curry.png",
    prepTime: "10 mins",
    cookTime: "15 mins",
    link: "recipes/carrot_coconut_curry.html",
    ingredients: ["carrots", "coconut", "mustard seeds", "cumin", "chana dal", "urad dal", "onion", "curry leaves", "green chilies"]
  },
  {
    id: 3,
    title: "South Indian Sambar (Serves 4)",
    category: "South Indian",
    image: "images/south-indian-sambar.png",
    prepTime: "15 mins",
    cookTime: "30 mins",
    link: "recipes/south_indian_sambar.html",
    ingredients: ["toor dal", "turmeric", "oil", "salt", "mustard seeds", "cumin seeds", "garlic", "curry leaves", "dry red chillies", "hing", "asafoetida", "drumstick", "onion", "tomato", "green chillies", "brinjal", "okra", "bottle gourd", "red chilli powder", "tamarind", "sambar powder", "coriander leaves"]
  },
  {
    id: 4,
    title: "Sambar Recipe (Serves 2–3)",
    category: "South Indian",
    image: "images/sambar-serves-2-3.png",
    prepTime: "10 mins",
    cookTime: "25 mins",
    link: "recipes/sambar_serves_2_3.html",
    ingredients: ["toor dal", "pigeon peas", "garlic", "turmeric", "oil", "mustard seeds", "fenugreek seeds", "cumin seeds", "asafoetida", "hing", "curry leaves", "onion", "green chilli", "tomato", "brinjal", "eggplant", "sambar powder", "tamarind", "coriander leaves", "salt"]
  },
  {
    id: 5,
    title: "Tomato Curry",
    category: "South Indian",
    image: "images/tomato-curry.png",
    prepTime: "10 mins",
    cookTime: "15 mins",
    link: "recipes/tomato_curry.html",
    ingredients: ["oil", "fenugreek seeds", "cumin seeds", "mustard seeds", "curry leaves", "dry red chilli", "green chillies", "onion", "garlic", "turmeric", "tomatoes", "tamarind", "salt", "red chilli powder", "roasted cumin powder", "jeera powder", "coriander powder", "coriander leaves"]
  },
  {
    id: 6,
    title: "Palakura Pappu (With Ground Spice Paste)",
    category: "South Indian",
    image: "images/palakura-pappu.png",
    prepTime: "15 mins",
    cookTime: "25 mins",
    link: "recipes/palakura_pappu_ground_spice.html",
    ingredients: ["toor dal", "turmeric", "curry leaves", "oil", "garlic", "dried red chilies", "cumin seeds", "mustard seeds", "hing", "onion", "spinach", "salt", "tamarind juice", "ghee"]
  },
  {
    id: 7,
    title: "Simple Andhra Palakura Pappu",
    category: "South Indian",
    image: "images/palakura-pappu.png",
    prepTime: "10 mins",
    cookTime: "20 mins",
    link: "recipes/simple_andhra_palakura_pappu.html",
    ingredients: ["toor dal", "spinach", "green chilies", "salt", "oil", "tamarind juice", "popu dinusulu", "mustard seeds", "cumin seeds", "garlic", "curry leaves", "onion", "coriander"]
  },
  {
    id: 8,
    title: "Aloo Masala Curry (Creamy Tomato Gravy)",
    category: "Curries",
    image: "images/aloo-masala.png",
    prepTime: "15 mins",
    cookTime: "30 mins",
    link: "recipes/aloo_masala_curry.html",
    ingredients: ["potatoes", "tomatoes", "coconut powder", "cashews", "poppy seeds", "gasagasalu", "oil", "cumin seeds", "jeera", "cinnamon stick", "cloves", "cardamom", "onion", "green chilies", "turmeric", "red chili powder", "roasted cumin powder", "salt", "kasuri methi"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const recipeGrid = document.getElementById('recipe-grid');
  const searchInput = document.getElementById('search-input');
  const categoryBtns = document.querySelectorAll('.category-btn');

  // Check if we are on the home page (has recipe grid)
  if (recipeGrid) {
    renderRecipes(recipes);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
      filterRecipes();
    });

    // Category filtering
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove active class from all
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        e.target.classList.add('active');
        filterRecipes();
      });
    });
  }

  function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategoryBtn = document.querySelector('.category-btn.active');
    const category = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'All';

    const filtered = recipes.filter(recipe => {
      // Check search match (title, category, or ingredients)
      const matchesSearch = 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.category.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));

      // Check category match
      const matchesCategory = category === 'All' || recipe.category === category;

      return matchesSearch && matchesCategory;
    });

    renderRecipes(filtered);
  }

  function renderRecipes(recipesToRender) {
    recipeGrid.innerHTML = '';

    if (recipesToRender.length === 0) {
      recipeGrid.innerHTML = '<div class="no-results">No recipes found. Try a different search!</div>';
      return;
    }

    recipesToRender.forEach(recipe => {
      const card = document.createElement('a');
      card.href = recipe.link;
      card.className = 'recipe-card';
      
      card.innerHTML = `
        <div class="recipe-img-container">
          <img src="${recipe.image}" alt="${recipe.title}">
        </div>
        <div class="recipe-info">
          <span class="recipe-category">${recipe.category}</span>
          <h3 class="recipe-title">${recipe.title}</h3>
          <div class="recipe-meta">
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${recipe.prepTime}
            </div>
            <div class="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              ${recipe.cookTime}
            </div>
          </div>
        </div>
      `;
      recipeGrid.appendChild(card);
    });
  }
});
