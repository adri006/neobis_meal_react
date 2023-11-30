import React , {useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function DetailPage() {
    const { id } = useParams(); 
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
        axios.get(API_URL).then((response) => {
            setRecipe(response.data.meals[0]);
        });   
    }, []); 

    return(
        <>
        <Header/>
        <div class="meal-detail">
            <section class="meal-detail-base-info-block">
                <div class="meal-detail-base-info-text">
                    <p class="title" id={recipe.idMeal}>{recipe.strMeal}</p>
                    <p class="meal-detail-base-info">{recipe.strCategory} | {recipe.strArea}</p>
                    <div class="ingredients">
                        <div>
                            {Object.keys(recipe)
                            .filter((item) => item.includes("strIngredient") && recipe[item])
                            .map((item, idx) => (
                                <p>
                                - {recipe[item]} <b>{recipe["strMeasure" + (idx + 1)]}</b>
                                </p>
                            ))}  
                        </div>
                    </div>
                </div>
                <div class="meal-detail-base-info-img">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                </div>
            </section>
            <section class="meal-detail-instruction">
                <h2 class="h2">Instruction</h2>
                <pre>{recipe.strInstructions}</pre>
                <a class="meal-detail-youtube" href={recipe.strYoutube}>Watch on YouTube</a>
            </section>
        </div>
        </>
    )
}

export default DetailPage