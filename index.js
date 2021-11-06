const handleMealSearch = () => {
    let searchMail = document.getElementById('searchMail').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchMail}`)
        .then(res => res.json())
        .then(data => showSearchResults(data))
}

const showSearchResults = allMeals => {
    // console.log(allMeals);
    let totalMeals = allMeals.meals;
    let container = document.getElementById('showResult');
    for (let i = 0; i < totalMeals.length; i++) {
        const singleMeals = totalMeals[i];
        let div = document.createElement("div");
        mailInfo = `
        <div class="card mailComponent m-2">
            <img src=${singleMeals.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${singleMeals.strMeal}</h5>
                <button href="#" class="btn btn-primary" onclick="showDeatailsMeal('${singleMeals.idMeal}')">Show Details</button>
            </div>
        </div>
        `
        div.innerHTML = mailInfo;
        container.appendChild(div);
    }
}
const showDeatailsMeal = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => mealDbAtAGlance(data))
}

const mealDbAtAGlance = (idMealDetail) => {
    const singleMealDetail = document.getElementById('singleMailDbDetails');
    const div = document.createElement('div');
    singleMail = `
        <div class="card mailComponent m-2">
            <img src=${idMealDetail.meals[0].strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${idMealDetail.meals[0].strMeal}</h5>
                <p class="card-text">${idMealDetail.meals[0].strMeasure1 + ' ' + idMealDetail.meals[0].strIngredient1}</p>
                <p class="card-text">${idMealDetail.meals[0].strMeasure2 + ' ' + idMealDetail.meals[0].strIngredient2}</p>
                <p class="card-text">${idMealDetail.meals[0].strMeasure3 + ' ' + idMealDetail.meals[0].strIngredient3}</p>
                <p class="card-text">${idMealDetail.meals[0].strMeasure4 + ' ' + idMealDetail.meals[0].strIngredient4}</p>
                <p class="card-text">${idMealDetail.meals[0].strMeasure5 + ' ' + idMealDetail.meals[0].strIngredient5}</p>
                <p class="card-text">${idMealDetail.meals[0].strMeasure6 + ' ' + idMealDetail.meals[0].strIngredient6}</p>
            </div>
        </div>                                          
    `
    div.innerHTML = singleMail;
    // document.write(div);
    singleMealDetail.appendChild(div);
    console.log(idMealDetail.meals[0]);

}




