import React ,{useEffect , useState}from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

function PromoMeal() { 
    const [meals, setMeals] = useState({});
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

    useEffect(() => {
        axios.get(apiUrl).then((repos) => {
            setMeals(repos.data.meals)
        });
        }, [])
 
        return (
            <>
                {meals.length > 0 ? (
                    <section className="random-meal-block">
                        <div className="random-meal-block-text">
                            <h2 className="h2">Meal of the Day</h2>
                            <Link to={{ pathname: `${meals[0].idMeal}` }}>
                                <p className="title">{meals[0].strMeal}</p>
                            </Link>
                            <p className="random-meal-info">{meals[0].strCategory} | {meals[0].strArea}</p>
                        </div>
                        <div className="random-meal-block-img">
                            <Link to={{ pathname: `/${meals[0].idMeal}` }}>
                                <img src={meals[0].strMealThumb} alt="#" />
                            </Link>
                        </div>
                    </section>
                ) : (
                    <p>Loading...</p>
                )}
            </>
        )
}

export default PromoMeal