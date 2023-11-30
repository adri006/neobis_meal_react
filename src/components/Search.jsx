import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
    const [meals, setMeals] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchPerformed(true);
        if (inputValue.trim() !== '') {
            const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue;
            axios.get(API_URL).then((response) => {
                setMeals(response.data.meals || []);
            });
        } else {
            setMeals([]);
        }
    };

    return (
        <>
            <form className="search-block" onSubmit={handleSubmit}>
                <input type="text" placeholder="Find your meal" className="search-block-input" value={inputValue} onChange={handleChange} />
                <button type="submit" className="search-block-button">Search</button>
            </form>
            <div>
                {searchPerformed && meals && meals.length > 0 ? (
                    meals.map((meal) => (
                        <div className="meal-block" key={meal.idMeal}>
                            <Link to={{ pathname: `/${meal.idMeal}` }}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-block-img" />
                            </Link>
                            <div>
                                <Link to={{ pathname: `/${meal.idMeal}` }}>
                                    <h3 className="h3">{meal.strMeal}</h3>
                                    <p className="meal-block-info">{meal.strCategory} | {meal.strArea}</p>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </>
    );
}

export default Search;