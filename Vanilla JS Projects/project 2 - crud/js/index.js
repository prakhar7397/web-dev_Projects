
  // Loading of movies

let movies = [];

if(localStorage.getItem('movies')!==null){
  movies=JSON.parse(localStorage.getItem('movies'));
}
else{
  localStorage.setItem('movies',JSON.stringify(movies));
}



  // To display first 10 movies

let startIndex=null;
let endIndex=null;

let slicedMovies=movies.slice(0,10);



  // Total pages

let totalPages=Math.ceil(movies.length/10);

document.getElementById('total_pages').innerText=totalPages;




  // Current page

let currentPage=1;

document.getElementById('current_page').innerText=currentPage;




  // Fn to display next 10 movies

function nextMovies(){

  if(currentPage<=totalPages && endIndex!==totalPages*10){
    currentPage++;
    endIndex=currentPage*10;
    startIndex=endIndex-10;

    document.getElementById('current_page').innerText=currentPage;

    slicedMovies=movies.slice(startIndex,endIndex);
    displayData(slicedMovies);
  }

}




  // Fn to display previous 10 movies

function prevMovies(){

  if(currentPage>1){
    startIndex-=10;
    endIndex-=10;
    currentPage--;

    document.getElementById('current_page').innerText=currentPage;
    slicedMovies=movies.slice(startIndex,endIndex);
    displayData(slicedMovies);
  }

}



  // Fn to display movie list according to page number input

function skipToPageNo(page_number){

  if(page_number>=1 && page_number<=totalPages){
    currentPage=page_number;
    endIndex=currentPage*10;
    startIndex=endIndex-10;
    document.getElementById('current_page').innerText=currentPage;
    slicedMovies=movies.slice(startIndex,endIndex);
    displayData(slicedMovies);
  }
  else{
    currentPage=1;
    document.getElementById('current_page').innerText=currentPage;
    slicedMovies=movies.slice(0,10)
    displayData(slicedMovies)
    console.log(currentPage)
  }

}




 //  Fn to display movie list

function displayData(arr){

  document.getElementById("data").innerHTML="";

  arr.forEach(function(movie,index){

    let row=document.createElement('tr');
    
    let numberTd=document.createElement('td');
    numberTd.append(index+1);
    row.appendChild(numberTd);


    let titleTd=document.createElement('td');
    titleTd.append(movie.title);
    row.appendChild(titleTd);


    let genreTd=document.createElement('td');
    movie.genres.forEach(function(genre,index){
        if(movie.genres.length>1){
            genreTd.append(genre, '. ');
        }                                                  //............check logic for multi genres separation
        else{
            genreTd.append(genre);
        }
    })
    row.appendChild(genreTd);


    let releaseDateTd=document.createElement('td');
    releaseDateTd.append(movie.releaseDate);
    row.appendChild(releaseDateTd);


    let durationTd=document.createElement('td');
    durationTd.append(movie.duration);
    row.appendChild(durationTd);


    let imdbRatingTd=document.createElement('td');
    imdbRatingTd.append(movie.imdbRating);
    row.appendChild(imdbRatingTd);


    let otherOptionsTd=document.createElement('td');
    otherOptionsTd.classList.add('other_options');
    let viewBtn=document.createElement('i');
    viewBtn.classList.add('fa-solid');
    viewBtn.classList.add('fa-eye');
    otherOptionsTd.appendChild(viewBtn);
    viewBtn.onclick=viewMore.bind(this,movie.id);



    let editBtn=document.createElement('i');
    editBtn.classList.add('fa-solid');
    editBtn.classList.add('fa-pen-to-square');
    otherOptionsTd.appendChild(editBtn);
    editBtn.onclick=editMovie.bind(this,movie.id);


    let deleteBtn=document.createElement('i');
    deleteBtn.classList.add('fa-solid');
    deleteBtn.classList.add('fa-trash-can');
    otherOptionsTd.appendChild(deleteBtn);
    deleteBtn.onclick=deleteMovie.bind(this,movie.id);

    row.appendChild(otherOptionsTd);

    document.getElementById('data').appendChild(row);

  })

}



  // Calling fn to display movie list for the first time 

displayData(slicedMovies);




  //  Fn to view extra details about a movie

function viewMore(movie_id){

  document.getElementById('extra_info').style.display='flex';

  movies.find(function(movie,index){
    if(movie.id===movie_id){
      document.getElementById('movie_poster').setAttribute('src',movie.posterurl);
      document.getElementById('movie_title').innerText=movie.title;
      document.getElementById('releaseDate').innerText=movie.releaseDate;
      document.getElementById('genre').innerText=movie.genres.map(function(genre,index){ return ' ' + genre })
      document.getElementById('actors').innerText=movie.actors.map(function(actor,index){ return ' ' + actor })
      document.getElementById('storyline').innerText=movie.storyline;
      document.getElementById('imdbRating').innerText=movie.imdbRating;
    }

  })

  

}



  // Fn to open a section to edit movie details

let movie_id_toupdate;

function editMovie(movie_id){

  movie_id_toupdate=movie_id;

  document.getElementById('update_movie').style.display='flex';

  movies.find(function(movie,index){

    if(movie_id===movie.id){

      document.getElementById('updateTitle').value=movie.title;
      document.getElementById('updateGenre').value=movie.genres.map(function(genre,index){ return genre});
      document.getElementById('updateReleaseDate').value=movie.releaseDate;
      document.getElementById('updateDuration').value=movie.duration;
      document.getElementById('updateImdbRating').value=movie.imdbRating;
      document.getElementById('updateActors').value=movie.actors;
      document.getElementById('updatePoster').value=movie.posterurl;
      document.getElementById('updateStoryline').value=movie.storyline;

    }

  })
  
}




  // Fn to convert input type text to date (for release date)

function convertToDate(input_section){
  document.getElementById(input_section).type='date';
}



  // Fn to convert input type date to text (for release Date)

function convertToText(input_section){
  document.getElementById(input_section).type='text';
}




  // Fn to update the movie details

function updateMovie(){

  let updatedMovies=[];

  movies.forEach(function(movie,index){

    if(movie.id===movie_id_toupdate){

      if(document.getElementById('updateTitle').value!==null){
        movie.title=document.getElementById('updateTitle').value;
      }

      if(document.getElementById('updateGenre').value!==null){
        movie.genres=document.getElementById('updateGenre').value.split(',');
      }

      if(document.getElementById('updateReleaseDate').value!==null){
        movie.releaseDate=document.getElementById('updateReleaseDate').value;
      }

      if(document.getElementById('updateDuration').value!==null){
        movie.duration=document.getElementById('updateDuration').value;
      }

      if(document.getElementById('updateImdbRating').value!==null){
        movie.imdbRating=document.getElementById('updateImdbRating').value;
      }

      if(document.getElementById('updateActors').value!==null){
        movie.actors=document.getElementById('updateActors').value.split(',');
      }

      if(document.getElementById('updatePoster').value!==null){
        movie.posterurl=document.getElementById('updatePoster').value;
      }

      if(document.getElementById('updateStoryline').value!==null){
        movie.storyline=document.getElementById('updateStoryline').value;
      }


      updatedMovies.push(movie);
      localStorage.setItem('movies',JSON.stringify(movies));
      
    }

    else{
      updatedMovies.push(movie);
    }

  })

  displayData(updatedMovies);
  
  document.getElementById('update_movie').style.display='none';

}




  // Fn to delete a movie from the list

function deleteMovie(movie_id){

  let confirmation=confirm('Are you sure you want to delete the movie?');
  if(confirmation===true){

    let index=movies.findIndex((movie,index)=>{
      return movie.id===movie_id;
    })

    movies.splice(index,1);
    localStorage.setItem('movies',JSON.stringify(movies));

    displayData(movies);
  }
  

}




  // Fn to open section to add a new movie

let add_movie_status=false;

function addNewMovie(){

  if(add_movie_status===false){
    document.getElementById('add_new_movie').style.display='flex';
    add_movie_status=true;
  }
  else{
    document.getElementById('add_new_movie').style.display='none';
    add_movie_status=false;
  }

  // console.log(add_movie_status)

}





  // Fn to close extra details section

function closeInfo(modal){

  if(modal==='add_new_movie'){
    add_movie_status=false;
  }

  document.getElementById(modal).style.display='none';
}
  
  


 
  // Fn to create the movie 

function createMovie(){

  let lastId;

  if(movies.length!==0){
    lastId=movies[movies.length-1].id;
  }
  else{
    lastId=0;
  }

  let newMovie={
    id:lastId+1,
    ratings:[]
  };

  if(document.getElementById('newTitle').value!==null){
    newMovie.title=document.getElementById('newTitle').value.charAt(0).toUpperCase()+document.getElementById('newTitle').value.slice(1);
  }

  if(document.getElementById('newGenre').value!==null){
    newMovie.genres=document.getElementById('newGenre').value.split(',');
  }

  if(document.getElementById('newReleaseDate').value!==null){
    newMovie.releaseDate=document.getElementById('newReleaseDate').value;
  }

  if(document.getElementById('newDuration').value!==null){
    newMovie.duration=document.getElementById('newDuration').value;
  }

  if(document.getElementById('newImdbRating').value!==null){
    newMovie.imdbRating=document.getElementById('newImdbRating').value;
  }

  if(document.getElementById('newActors').value!==null){
    newMovie.actors=document.getElementById('newActors').value.split(',')
  }

  if(document.getElementById('newPoster').value!==null){
    newMovie.posterurl=document.getElementById('newPoster').value;
  }

  if(document.getElementById('newStoryline').value!==null){
    newMovie.storyline=document.getElementById('newStoryline').value;
  }

  movies.push(newMovie);

  localStorage.setItem('movies',JSON.stringify(movies));

  displayData(movies);

  document.getElementById('add_new_movie').style.display='none';

  add_movie_status=false;

  document.getElementById('add_new_movie').reset();


}




// let filters={
//   category:null,
//   minRating:null
// }

 

// function setFilters(filter_type,filter_value){

//   if(filter_value!==null){
//     filters[filter_type]=filter_value;
//     if(filter_type==='minRating'){
//       document.getElementById('minRatingRange').innerText=filter_value;
//     }
//   }
//   else{
//     filters[filter_type]=null;
//   }

// }

  

// function applyFilters(){

//   let filteredMovies=[];

//   if(filters.minRating!==null){
//     filteredMovies=movies.filter(function(movie,index){
//       return (Number(movie.imdbRating)>=Number(filters.minRating));
//     })
//   }

//   if(filters.category!==null){
//     filteredMovies=movies.filter()
//   }

// }














