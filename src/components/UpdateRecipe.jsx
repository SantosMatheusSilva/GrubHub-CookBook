import { useState } from 'react';

function UpdateRecipe(props) {

    const [updatedRecipe, setUpdatedRecipe] = useState({
        id: props.recipe.id,
        name: props.recipe.name,
        calories: props.recipe.calories,
        servings: props.recipe.servings,
        image: props.recipe.image,
        category: props.recipe.category,
    });

    function recipeUpdate(e) {
        const {name, value} = e.target;
        setUpdatedRecipe({...updatedRecipe, [name]: value});
    }

    function handleSubmit(e) {

        function handleSubmit(e) {
            e.preventDefault();
            props.updateRecipe(updatedRecipe); // Use updateRecipe instead of UpdateRecipe
        }

        setUpdatedRecipe({
            id: props.recipe.id,
            name: props.recipe.name,
            calories: props.recipe.calories,
            servings: props.recipe.servings,
            image: props.recipe.image,
            category: props.recipe.type,

        })

    }


    return (
        <section className='UpdateRecipe-container'>
            <h2>Update Recipe</h2>
           <form onSubmit={handleSubmit} className='UpdateRecipe-form'>
           <div className='form-input-div'>
           <label >
               Recipe Name:
            </label>
            <input type="text" name="name" value={updatedRecipe.name} onChange={recipeUpdate} />

            <label>
                Calories:
            </label>
            <input type="number" name="calories" value={updatedRecipe.calories} onChange={recipeUpdate} />

            <label>
                Servings:
            </label>
            <input type="number" name="servings" value={updatedRecipe.servings} onChange={recipeUpdate} />

            <label>
                Category:
            </label>
            <input type="text" name="category" value={updatedRecipe.category} onChange={recipeUpdate} />

            <label >
                Image:
            </label>
            <input type="img" name="img" value={updatedRecipe.image} onChange={recipeUpdate}  />

           </div>
            <button type='submit'>Update</button>
           </form>

        </section>
    )
}

export default UpdateRecipe;