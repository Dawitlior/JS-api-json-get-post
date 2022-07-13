const BASIC_API = "https://moviesmern.herokuapp.com/movies/";
async function getTheMovie() {
  try {
    return await fetch(
      `${BASIC_API}movie/searchByName/${searchMovies.value}`
    ).then((response) => response.json());
  } catch (error1) {
    alert(error1);
  } finally {
  }
}

async function sendTheMovie() {
  try {
  const data = {
    movie: {
      image: input.value,
      linkToMovie: input1.value,
      movieName: input2.value,
      rating: input3.value,
      synopsis: input4.value,
    },
  };
   return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
  } 
  catch (error) {
    alert(error);} 
  finally {}
}

function printNamesToScreen() {
  getTheMovie()
    .then((result) => {
      result.data.forEach((item) => {
        my_ul.innerHTML =
          `<li>${item.movieName}</li>` + `<img src='${item.image}'/>`;
      });
    })
    .catch(() => {})
    .finally(() => {});
}

// async function getMovieByName() {
//   try {
//     return await fetch(
//       `${BASIC_API}movie/searchByName/${searchMovies.value}`
//     ).then((res) => res.json);
//   } catch (err) {
//     console.log(err);
//   } finally {
//   }
// }
// function showMovieByName(){

//   getMovieByName().then((result)=>{
//     result.data.forEach(movieItem=>
//       div_id.innerHTML +=`<li>${movieItem.}</li>`
//       )
//   })
// }
