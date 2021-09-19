console.log('***** Music Collection *****')
let collection = [];

//creating fucntion to push object into collection
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return console.log('new album added', collection)
}

//checking to see if function addToCollection works.
addToCollection('Violater', 'Depeche Mode', '1990');
addToCollection('Amor Prohibido', 'Selena', '1994');
addToCollection('All Eyez on Me', 'Tupac Shakur', '1996');
addToCollection('Songs of Faith and Devotion', 'Depeche Mode', '1993');
addToCollection('Energía', 'J Balvin', '2016');
addToCollection('A Day at the Races', 'Queen', '1976')

//creating a function to log each album
function showCollection(arrayP) {
  console.log('The number of albums logged is', arrayP.length);
  for(let i = 0; i < arrayP.length; i++){
    console.log(arrayP[i].title, 'by', arrayP[i].artist, 'published in', arrayP[i].yearPublished);
  } //I feel like there is an easier way to write this log out...
};
showCollection(collection);

function findByArtist(artist) {
  let findArtist = [];
  for(let i = 0; i < artists.length; i++){
    if( i === artist){
      console.log( artist[i].artist);
    } else {
      console.log('No results');
    }
  }
}

console.log(findByArtist(collection));
