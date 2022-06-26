async function getTheName() {
  try {
    return await fetch("https://moviesmern.herokuapp.com/movies/all").then(
      (response) => {
        return response.json();
      }
    );
  } catch (error1) {
    alert("some error");
  } finally {
  }
}


function printNamesToScreen() {
  getTheName()
    .then((result) => {
      result.data.forEach((item) => {
        my_ul.innerHTML += `<li>${item.movieName}</li>`+`<img src='${item.image}'/>`
      });
    })
    .catch(() => {})
    .finally(() => {});
}




const data = {
  
  image:"https://d3m9l0v76dty0.cloudfront.net/system/photos/2556967/large/9f26b1108becb59ae5e27cdfc0c9b55f.jpg",
  linkToMovie: "https://www.icerbox.biz/watch/C3FA6C15B0E23A1",
  movieName: "LiorDawit",
  rating: 8,
  synopsis: "oh snap",
};
async function postTheMovie() {
  try {
    return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie", {
      method: "POST",
      body: JSON.stringify(data),
      headers:{'content-type':'application/json'},
    }).then((response) => response);
  } 
  catch (error) {
    alert("sorry about the error");
  } 
  finally {
  }
}

