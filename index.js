const {fetchBreedDescription} = require('./breedFetcher1');

const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Breed does not exist', error);
  } else console.log(description);
});