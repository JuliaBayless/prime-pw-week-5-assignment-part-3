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
