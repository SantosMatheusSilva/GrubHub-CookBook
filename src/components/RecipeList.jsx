import { useState } from 'react';
import recipes from '../data/recipes.json';
import React from 'react';
import AddRecipe from '../components/AddRecipe';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { PiForkKnifeBold } from "react-icons/pi";
function RecipeList() {
    const [cook, setCook] = useState(recipes);
    const deleteRecipe = (recipeId) => {
        const updatedCook = cook.filter((recipe) => recipe.id !== recipeId);
        setCook(updatedCook);
    };
    function addNewRecipe(newCook) {
        /* setCook([...cook, setCook]); */
        const updatedRecipeList = [...cook, newCook];
        setCook(updatedRecipeList); //<<<<<< updatedRecipeList is the new array with the new recipe.
    }
    return (
        <div className="RecipePage">
            <div>
                <AddRecipe AddRecipe={addNewRecipe} />
            </div>
            <section>
                <h2>My Recipes</h2>
                <div className="RecipeList">
                    {cook.map((recipe) => (
                            <div className="Recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
                                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                                <h3>{recipe.name}</h3>
                                </Link>
                                <div className="Recipe-card-info">
                                    <p><strong>{recipe.type}</strong></p>
                                    <p><strong>Calories: </strong>{recipe.calories} </p>
                                    <p><strong>Servings: </strong> <PiForkKnifeBold /></p>
                                    <button onClick={() => deleteRecipe(recipe.id)}>
                                        <MdDelete style={{ width: "30px", height: "30px", color: "black" }} />
                                    </button>
                                </div>
                            </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default RecipeList;





