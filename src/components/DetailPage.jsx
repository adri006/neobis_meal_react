import React from "react";

function DetailPage() {
    return(
        <div class="meal-detail">
            <section class="meal-detail-base-info-block">
                <div class="meal-detail-base-info-text">
                    <p class="title">Lamb Tagine</p>
                    <p class="meal-detail-base-info">Lamb | Moroccan</p>
                    <div class="ingredients">
                        <p>- Olive Oil <b>2 tblsp </b></p>
                        <p>- Onion <b>1 finely sliced</b></p>
                        <p>- Carrots <b>2 chopped</b></p>
                        <p>- Lamb Leg <b>500g</b></p>
                        <p>- Garlic <b>2 cloves minced</b></p>
                        <p>- Cumin <b>½ tsp</b></p>
                        <p>- Ginger <b>½ tsp</b></p>
                        <p>- Saffron <b>¼ tsp</b></p>
                        <p>- Cinnamon <b>1 tsp </b></p>
                        <p>- Honey <b>1 tblsp </b></p>
                        <p>- Apricot <b>100g </b></p>
                        <p>- Vegetable Stock Cube <b>1</b></p>
                        <p>- Butternut Squash <b>1 medium chopped</b></p>
                        <p>- Couscous <b>Steamed</b></p>
                        <p>- Parsley <b>Chopped</b></p>
                    </div>
                </div>
                <div class="meal-detail-base-info-img">
                    <img src="https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg" alt="Lamb Tagine"/>
                </div>
            </section>
            <section class="meal-detail-instruction">
                <h2 class="h2">Instruction</h2>
                <pre>Heat the olive oil in a heavy-based pan and add the onion and carrot. Cook for 3- 4 mins until softened.
                     Add the diced lamb and brown all over. Stir in the garlic and all the spices and cook for a few mins more or until the aromas are released.
                     Add the honey and apricots, crumble in the stock cube and pour over roughly 500ml boiling water or enough to cover the meat. Give it a good stir and bring to the boil. Turn down to a simmer, put the lid on and cook for 1 hour.
                     Remove the lid and cook for a further 30 mins, then stir in the squash. Cook for 20 – 30 mins more until the squash is soft and the lamb is tender. Serve alongside rice or couscous and sprinkle with parsley and pine nuts, if using.</pre>
                <a class="meal-detail-youtube" href="https://www.youtube.com/watch?v=bR5Cqu84S_k">Watch on YouTube</a>
            </section>
        </div>
    )
}

export default DetailPage