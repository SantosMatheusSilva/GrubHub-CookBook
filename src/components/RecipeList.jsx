import { useState } from 'react';
import recipes from '../data/recipes.json';
import React from 'react';
import RecipeDetailsPage from '../pages/RecipeDetailsPage';
import AddRecipe from '../components/AddRecipe';

function RecipeList() {
    const [cook, setCook] = useState(recipes);

    const deleteRecipe = (recipeId) => {
        const updatedCook = cook.filter((recipe) => recipe.id !== recipeId);
        setCook(updatedCook);
    };

    function addNewRecipe(newCook) {
        /* setCook([...cook, setCook]); */
        const updatedRecipeList = [...cook, newCook];
        setCook([...cook, updatedRecipeList]);
    }




    return (
        <div className="RecipePage">
            <div>
                <AddRecipe AddRecipe={addNewRecipe} />
            </div>

            <div className="RecipeList">
                {cook.map((recipe) => (
                    <div key={recipe.id} className="Recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
                        <h3>{recipe.name}</h3>
                        {/*  <img src={recipe.image} alt={recipe.name} /> */}
                        <div className="Recipe-card-info">
                            <p><strong>Calories: </strong>{recipe.calories} </p>
                            <p><strong>Servings: </strong> {recipe.servings}</p>
                            <button onClick={() => deleteRecipe(recipe.id)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;