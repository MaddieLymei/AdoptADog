const {db} = require('../DataAccess/config');

db.connect(function(err) {

    //Select all breeds and return the result object:
    db.query("SELECT * FROM Breed", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    //getAllDogsPerBreed
    db.query("SELECT d.Microchip_ID, Dog_Name, Sex, Age, b.Breed_Name FROM Dog d INNER JOIN Dog_Breed ON d.Microchip_ID = Dog_Breed.Microchip_ID INNER JOIN Breed b ON Dog_Breed.Breed_ID = b.Breed_ID Where b.Breed_Name = 'Pit Bull'", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    
    //getAllDogsPerSize
    db.query("SELECT d.Microchip_ID, Dog_Name, Sex, Age, s.Size_Name FROM Dog d INNER JOIN Size s ON s.Size_ID = d.Size_ID Where d.Size_ID = 5", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    //getDog(microchip_ID)
    db.query("SELECT d.Microchip_ID, d.Dog_Name, d.sex, d.Age, size.Size_Name, d.Dog_Description, d.Favourite_Activity, d.Favourite_Treat, d.Special_Needs, b.Dog_Friendly, b.Cat_Friendly, b.Child_Friendly, b.Adult_Friendly, b.Shed, s.Shelter_Name, s.Contact_Person, s.Cellphone, s.Email, s.Location FROM Dog d INNER JOIN Size size ON d.Size_ID = size.Size_ID INNER JOIN Behaviour b ON d.Microchip_ID = b.Microchip_ID INNER JOIN Shelter s ON d.Shelter_ID = s.Shelter_ID WHERE d.Microchip_ID = 123456789123456", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    //getDogBreed
    db.query("SELECT d.Microchip_ID, d.Dog_Name, b.Breed_Name FROM Dog d INNER JOIN Dog_Breed db ON d.Microchip_ID = db.Microchip_ID INNER JOIN Breed b On db.Breed_ID = b.Breed_ID WHERE d.Microchip_ID = 123456789123456", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    //getDogBreeds
    db.query("SELECT Breed_Name From Breed", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    //getDogSizes
    db.query("SELECT Size_Name From Size", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  

  
