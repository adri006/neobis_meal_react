import React from "react";
import Header from "./Header";
import PromoMeal from "./PromoMeal";
import Search from "./Search";

function MainPage() {
    return(
        <>
        <Header/>
        <div className="home">
            <PromoMeal/>
            <h2 class="h2">Find your Meal</h2>
            <Search/>
        </div>
        </>
    )
}

export default MainPage