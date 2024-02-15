//THIS IS GOING TO BE THE MAIN PAGE

import React from "react";
import RecipeList from "../components/RecipeList";
import recipes from "../data/recipes.json";
import { useState } from 'react';
import AddRecipe from "../components/AddRecipe";
import RecipeDetailsPage from "./RecipeDetailsPage";



function Dashboard(){

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle the selection of a recipe
  const handleRecipeSelection = (recipe) => {
      setSelectedRecipe(recipe);
  };

    return(
        <section>

          <div >
          <RecipeList />
          {/* <RecipeDetailsPage  key = {recipeList.id} recipe = {recipeList}/> */}
          </div>
        </section>
   
    )

    
}

export default Dashboard





