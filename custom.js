
// let moviedata = () => {
//     new Promise((accept, reject) => {
//         const data = fetch(`https://dummyjson.com/products?skip=0&limit=15`)
//         accept(data);
//     }).then((result) => {
//         new Promise((accept, reject) => {
//             accept(result.json())
//         }).then((result) => {
//             displayMovie(result);
//             console.log(result);
//         }).catch((error) => {
//             console.log('Promise Incomplete')
//         })
//     }).catch((error) => {
//         console.log('Promise Incomplete');
//     })
// }

let moviedata = async(limit,skip) => {
    const data = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
    const result = await data.json();
    displayMovie(result);
}


var limit=15;
var skip= 0;
var page = 1;
moviedata(limit,skip);
displayMovie = (result) => {
    var output = '';
    result.products.forEach((v, i) => {
        output += ` 
     <div class="product">
                    <div class="product-image">
                        <img src="${v.thumbnail}">
                    </div>
                    <div class="product-content">
                        <h2>${v.title}</h2>
                        <p>${v.description}</p>
                    </div>
                </div>`;
    })

    document.querySelector('.outer-products').innerHTML = output;
}

document.getElementById('Previous').addEventListener('click',()=>{
    if(page > 1){
        page--;
        skip = (page-1)* limit;
        moviedata(limit,skip);
    }

})

document.getElementById('Next').addEventListener('click',()=>{
    page++;
    skip = (page-1)* limit;
    moviedata(limit,skip);
})