import {useParams} from 'react-router-dom';
import recipes from '../data/recipes.json'
import NotFound from './NotFound';
import UpdateRecipe from '../components/UpdateRecipe';
import { Link } from 'react-router-dom';
function RecipeDetailsPage() {
    const {id} = useParams();
    const foundRecipe = recipes.find((oneRecipe)=>{
        return oneRecipe.id.toString() === id;})

        function handleUpdate(updatedRecipe) {
            // Implement the logic to update the recipe in your data source
            console.log('Updated Recipe:', updatedRecipe);
        }

    return (
        <div className="RecipeDetail">
            <article>
                {foundRecipe ? (
                    <div className='recipe-container'>
                        <h1>{foundRecipe.name}</h1>
                        <img  src={foundRecipe.image} alt="" />
                        <div className='recipe-container-info'>
                        <p><strong>Calories: </strong>{foundRecipe.calories}</p>
                        <p><strong>Servings: </strong>{foundRecipe.servings}</p>
                        <p><strong>Category: </strong>{foundRecipe.type}</p>
                       </div>
                    </div>
                    
                ) : (
                   <NotFound />
                )
                }
                 <Link to={"/"}>
                    <button >Back</button>
                </Link>
                 <div>
                    <UpdateRecipe recipe={foundRecipe} UpdateRecipe={handleUpdate}/>
                </div>
            </article>
        </div>
    );
}
export default RecipeDetailsPage;