function connectApi() {
    var searchText = document.getElementById('search').value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => showData(data));
    document.getElementById('search').value = "";
   
  }
  function showData(data) {
  
    var oldContent = document.getElementById('container');
    oldContent.textContent = "";
    for (var i = 0; i < document.getElementById('number').value ; i++) {
      var newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class="card" style="width:18rem;">
                            <img src="${data.meals[i].strMealThumb}" class="card-img-top">
                            <div class="card-body">
                            <h4 class="card-title">${data.meals[i].strMeal}</h4>
                            <a href="https://www.themealdb.com/meal/${data.meals[i].idMeal}" class="btn">See Recipe</a>
                            </div>
                            </div>`;
    
      oldContent.appendChild(newDiv);
    }
    document.getElementById('number').value = "";
  }