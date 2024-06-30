const ingredients = [
    "Onion",
    "Tomato",
    "Garlic",
    "Ginger",
    "Cumin",
    "Coriander",
    "Turmeric",
    "Red Chili Powder",
    "Salt",
    "Yogurt",
    "Chicken",
    "Potato",
    "Basmati Rice",
    "Ghee",
    "Garam Masala"
  ];
  const recipes = [
    {
      name: "Chicken Tikka Masala",
      ingredients: ["Chicken", "Tomato", "Onion", "Garlic", "Ginger", "Yogurt", "Cumin", "Coriander", "Turmeric", "Red Chili Powder", "Salt", "Ghee", "Garam Masala"],
      instructions: "1. Marinate chicken in yogurt and spices. 2. Grill chicken. 3. Make a tomato-onion gravy. 4. Add grilled chicken to the gravy. 5. Serve with basmati rice."
    },
    {
      name: "Aloo Gobi",
      ingredients: ["Potato", "Cauliflower", "Onion", "Tomato", "Garlic", "Ginger", "Cumin", "Coriander", "Turmeric", "Red Chili Powder", "Salt", "Ghee"],
      instructions: "1. Sauté onion, garlic, and ginger. 2. Add tomato, potato, and cauliflower. 3. Add spices and salt. 4. Cook until vegetables are tender. 5. Serve hot."
    },
    {
      name: "Biryani",
      ingredients: ["Basmati Rice", "Chicken", "Onion", "Yogurt", "Garlic", "Ginger", "Cumin", "Coriander", "Turmeric", "Red Chili Powder", "Salt", "Ghee", "Garam Masala"],
      instructions: "1. Marinate chicken in yogurt and spices. 2. Layer rice and marinated chicken in a pot. 3. Cook on dum (sealed pot) until rice is tender. 4. Serve hot."
    }
  ];
  const ingredientsContainer = document.getElementById('ingredients-container');
  const submitBtn = document.getElementById('submit-btn');
  const recipesSection = document.getElementById('recipes-section');
  const recipesContainer = document.getElementById('recipes-container');
  ingredients.forEach(ingredient => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = ingredient;
    checkbox.classList.add('ingredient-checkbox');
    const label = document.createElement('label');
    label.textContent = ingredient;
    ingredientsContainer.appendChild(checkbox);
    ingredientsContainer.appendChild(label);
    ingredientsContainer.appendChild(document.createElement('br'));
  });
  submitBtn.addEventListener('click', () => {
    const selectedIngredients = Array.from(document.querySelectorAll('.ingredient-checkbox:checked')).map(checkbox => checkbox.value);
    const matchingRecipes = recipes.filter(recipe => {
      const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.toLowerCase());
      return selectedIngredients.every(ingredient => recipeIngredients.includes(ingredient.toLowerCase()));
    });
    recipesContainer.innerHTML = '';
    matchingRecipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      const h3 = document.createElement('h3');
      h3.textContent = recipe.name;
      const ingredientsList = document.createElement('ul');
      recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });
      const instructionsP = document.createElement('p');
      instructionsP.textContent = `Instructions: ${recipe.instructions}`;
      recipeCard.appendChild(h3);
      recipeCard.appendChild(ingredientsList);
      recipeCard.appendChild(instructionsP);
      recipesContainer.appendChild(recipeCard);
    });
    recipesSection.style.display = 'block';
  });