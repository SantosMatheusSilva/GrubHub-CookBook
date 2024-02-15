import { useState } from 'react';



function AddRecipe(props) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        const newRecipe = {
            id : Math.random().toString(16).slice(2),
            name,
            calories,
            servings,
        };

        props.addRecipe(newRecipe); //<<<<<<<<<<<<<<<<<<<<<<

        
        setName("");
        setCalories("");
        setServings("");
        setImage("");
    }


    return (
        <section className='AddRecipe-container'>
            <h2>
                Add a new recipe
            </h2>
            <form onSubmit={handleSubmit} className="AddRecipe-form" >

                <label>
                    Recipe Name:
                </label>

                <input 
                className="input-name" 
                type="text" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />

                <label>
                    Calories:
                </label>
                <input 
                className="input-calories" 
                type="number" 
                name="calories" 
                value={calories} 
                onChange={(e) => setCalories(e.target.value)} />

                <label>
                    Picture:
                </label>
                
                <input 
                type="file" 
                name="img" 
                value={image} 
                onChange={(e) => setImage(e.target.value)} />

                <label>
                    Servings:
                </label>

                <input 
                className="input-servings" 
                type="number" name="servings" 
                value={servings} 
                onChange={(e) => setServings(e.target.value)} />

                <button type="submit">Add Recipe</button>

            </form>
        </section>
    )
}

export default AddRecipe;