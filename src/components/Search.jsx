import React from "react";

function Search() {
    return(
        <>
        <form className="search-block">
            <input type="text" placeholder="Find your meal" value="" className="search-block-input"/>
            <button type="submit" className="search-block-button">Search</button>
        </form>
        <div>
            <a href="">
                <div class="meal-block">
                    <img src="https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg" className="meal-block-img" alt="Lamb Tzatziki Burgers"/>
                    <div>
                        <h3 class="h3">Lamb Tzatziki Burgers</h3>
                        <p class="meal-block-info">Dessert | Greek</p>
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}

export default Search