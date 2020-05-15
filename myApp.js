console.log("Hello World");

var findEditThenSave = function(personId, done) {
    var foodToAdd = "hamburger";
    Person.findById({ _id: personId }, function(err, data) {
      data.favoriteFoods.push(foodToAdd);
      
    });
  };