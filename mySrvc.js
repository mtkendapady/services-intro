app.service( 'pokeSrvc', function() {
  var trainers = [
    {
        id: 1,
        name: 'Ash',
        "avatar": ""
    },
    {
        id: 2,
        name: 'Misty',
        "avatar": ""
    },
    {
        id: 3,
        name: 'Brock',
        "avatar": ""
    }
];

var pokemons = [
    {
        id: 1,
        name: 'Pikachu',
        level: 35,
        isFavorite: false
    },
    {
        id: 2,
        name: 'Charizard',
        level: 40,
        isFavorite: false
    },
    {
        id: 3,
        name: 'Staryu',
        level: 20,
        isFavorite: false
    },
    {
        id: 4,
        name: 'Horsea',
        level: 22,
        isFavorite: false
    },
    {
        id: 5,
        name: 'Onyx',
        level: 15,
        isFavorite: false
    },
    {
        id: 6,
        name: 'Geodude',
        level: 13,
        isFavorite: false
    }
];

this.getAllTrainers = function() {
  return trainers;
}

this.addTrainer = function( name ) {
  name.id = trainers[ trainers.length - 1].id + 1;
  name.avatar = "";
  console.log(name.id);
  trainers.push( name );
}

this.removeTrainer = function( name ) {
  var trainerIndex = trainers.indexOf( name );
  trainers.splice( trainerIndex, 1 );
}

})
