import { useState } from 'react';
import recipes from '../data/recipes.json';
import React from 'react';
import AddRecipe from '../components/AddRecipe';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
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
                        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                            <div className="Recipe-card" style={{ backgroundImage: `url(${recipe.image})` }}>
                                <h3>{recipe.name}</h3>
                                {/*  <img src={recipe.image} alt={recipe.name} /> */}
                                <div className="Recipe-card-info">
                                    <p><strong>Calories: </strong>{recipe.calories} </p>
                                    <p><strong>Servings: </strong> {recipe.servings}</p>
                                    <button onClick={() => deleteRecipe(recipe.id)}>
                                        <MdDelete style={{ width: "30px", height: "30px", color: "black" }} />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default RecipeList;





