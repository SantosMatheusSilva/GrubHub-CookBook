import { useParams } from "react-router-dom";

function RecipeDetailsPage(props) {

        const {recipe} = props;

    return (
        <div>
            <article>
                <div>
                    <h1>{recipe.name}</h1>
                    <img style={{width: "300px", height: "300px"}} src={recipe.image} alt="" />
                    <p>{recipe.calories}</p>
                    <p>{recipe.servings}</p>
                    <p>{recipe.type}</p>  
                </div>
            </article>
        </div>

    )
}

export default RecipeDetailsPage;