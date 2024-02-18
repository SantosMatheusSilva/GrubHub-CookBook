import {useParams} from 'react-router-dom';
import recipes from '../data/recipes.json'
import NotFound from './NotFound';
import UpdateRecipe from '../components/UpdateRecipe';
import { Link } from 'react-router-dom';
import { PiForkKnifeBold } from "react-icons/pi";
function RecipeDetailsPage() {
    const {id} = useParams();
    const foundRecipe = recipes.find((oneRecipe)=>{
        return oneRecipe.id.toString() === id;})

        function handleUpdate(updatedRecipe) {
            // Implement the logic to update the recipe in your data source
            updatedRecipe = this.recipe.id;
        }

    return (
        <div className="RecipeDetail">
            <article>
                {foundRecipe ? (
                    <div className='recipe-container'>
                        <div className='recipe-intro'>
                        <h1>{foundRecipe.name}</h1>
                        <img  src={foundRecipe.image} alt="" />
                        <div className='recipe-container-info'>
                        <p><strong>Calories: </strong>{foundRecipe.calories}</p>
                        <p><PiForkKnifeBold /> <strong>Servings: </strong>{foundRecipe.servings}</p>
                        <p><strong>Category: </strong>{foundRecipe.type}</p>
                       </div>
                        </div>
                       <div className='instructions-container'>
                       <div className='ingredients'>
                       <h3><strong>Ingredients: </strong></h3>
                       <p>
                            <li>Ingredient 250g</li>
                            <li>Ingredient 250g</li>
                            <li>Ingredient 250g</li>
                            <li>Ingredient 250g</li>
                            <li>Ingredient 250g</li>
                            <li>Ingredient 250g</li>
                            <li>Ingredient 250g</li>
                       </p>
                       </div>
                        <div className='instructions'>
                        <h3><strong>Instructions: </strong></h3>
                       <p >
                            <li>In a large mixing bowl, combine 2 cups of all-purpose flour, 1 teaspoon of baking powder, and a pinch of salt.</li>
                            <li>In a separate bowl, whisk together 2 eggs, 1 cup of milk, and 1/4 cup of melted butter.</li>
                            <li>Gradually add the wet ingredients to the dry ingredients, stirring until just combined.</li>
                            <li>Heat a non-stick skillet over medium heat and lightly grease with butter.</li>
                            <li>Pour 1/4 cup of batter onto the skillet for each pancake.</li>
                            <li>Cook until bubbles form on the surface, then flip and cook until golden brown.</li>
                            <li>Serve hot with maple syrup and fresh berries for a delicious breakfast treat!</li>
                       </p>
                        </div>
                       </div>
                    </div>
                    
                ) : (
                   <NotFound />
                )
                }
                 <div>
                    <UpdateRecipe recipe={foundRecipe} UpdateRecipe={handleUpdate}/>
                </div>
                <Link to={"/"}>
                    <button >Back</button>
                </Link>
            </article>
        </div>
    );
}
export default RecipeDetailsPage;