const {db} = require('../DataAccess/config');

// db.query("CREATE DATABASE adoptADog", function (err, result) {
//         if (err) throw err;
//         console.log("Created DB");
// })

db.connect(err=>{

    //CREATE Tables
    var sqlCreateBreed = "CREATE TABLE IF NOT EXISTS Breed (Breed_ID INT PRIMARY KEY AUTO_INCREMENT, Breed_Name VARCHAR(50) NOT NULL)";
    db.query(sqlCreateBreed, function (err, result) {
        if (err) throw err;
        console.log("Table Breed created");
    });

    var sqlCreateSize = "CREATE TABLE IF NOT EXISTS Size (Size_ID INT PRIMARY KEY AUTO_INCREMENT, Size_Name VARCHAR(8) NOT NULL)";
    db.query(sqlCreateSize, function (err, result) {
        if (err) throw err;
        console.log("Table Size created");
    });

    var sqlCreateShelter = "CREATE TABLE IF NOT EXISTS Shelter (Shelter_ID INT PRIMARY KEY AUTO_INCREMENT, Shelter_Name VARCHAR(50) NOT NULL, Contact_Person VARCHAR(50) NULL, Email VARCHAR(100) NOT NULL, Cellphone VARCHAR(15) NOT NULL, Location VARCHAR(150) NOT NULL);";
    db.query(sqlCreateShelter, function (err, result) {
        if (err) throw err;
        console.log("Table Shelter created");
    });

    var sqlCreateDog = "CREATE TABLE IF NOT EXISTS Dog (Microchip_ID NVARCHAR(15) PRIMARY KEY, Size_ID INT NOT NULL, Shelter_ID INT NOT NULL, Dog_Name VARCHAR(50) NOT NULL, Dog_Description VARCHAR(250) NOT NULL, Sex VARCHAR(7) NOT NULL, Age INT, Special_Needs VARCHAR(100) NULL, Favourite_Treat VARCHAR(50) NULL, Favourite_Activity VARCHAR(50) NULL, FOREIGN KEY (Size_ID) REFERENCES Size(Size_ID) ON UPDATE CASCADE, FOREIGN KEY (Shelter_ID) REFERENCES Shelter(Shelter_ID) ON UPDATE CASCADE ON DELETE CASCADE)";
    db.query(sqlCreateDog, function (err, result) {
        if (err) throw err;
        console.log("Table Dog created");
    });

    var sqlCreatePicture = "CREATE TABLE IF NOT EXISTS Picture (Picture_ID INT PRIMARY KEY AUTO_INCREMENT, Microchip_ID NVARCHAR(15) NOT NULL, Picture_Path VARBINARY(42000) NOT NULL, Profile_Picture BIT, FOREIGN KEY (Microchip_ID) REFERENCES Dog(Microchip_ID) ON UPDATE CASCADE ON DELETE CASCADE)";
    db.query(sqlCreatePicture, function (err, result) {
        if (err) throw err;
        console.log("Table Picture created");
    });

    var sqlCreateDogBreed = "CREATE TABLE IF NOT EXISTS Dog_Breed (Breed_ID INT NOT NULL, Microchip_ID NVARCHAR(15) NOT NULL, FOREIGN KEY (Microchip_ID) REFERENCES Dog(Microchip_ID) ON UPDATE CASCADE ON DELETE CASCADE, FOREIGN KEY (Breed_ID) REFERENCES Breed(Breed_ID) ON UPDATE CASCADE ON DELETE CASCADE, CONSTRAINT PK_Dog_Breed PRIMARY KEY (Breed_ID, Microchip_ID))";
    db.query(sqlCreateDogBreed, function (err, result) {
        if (err) throw err;
        console.log("Table Dog_Breed created");
    });

    var sqlCreateBehaviour = "CREATE TABLE IF NOT EXISTS Behaviour (Microchip_ID NVARCHAR(15) PRIMARY KEY NOT NULL, Cat_Friendly BIT NOT NULL, Dog_Friendly BIT NOT NULL, Child_Friendly BIT NOT NULL, Adult_Friendly BIT NOT NULL, Shed BIT NOT NULL, FOREIGN KEY (Microchip_ID) REFERENCES Dog(Microchip_ID) ON UPDATE CASCADE ON DELETE CASCADE)";
    db.query(sqlCreateBehaviour, function (err, result) {
        if (err) throw err;
        console.log("Table Behaviour created");
    });

    //Insert into tables:
    var sqlInsertBreed = "INSERT IGNORE INTO Breed( Breed_Name) Values( 'Labrador'), ('German Shepard'), ('Great Dane'), ('Pit Bull'), ('Jack Russel'), ('Pomeranian'), ('Beagle'), ('Africanis'), ('Unknown')";
    db.query(sqlInsertBreed, function (err, result) {
        if (err) throw err;
        console.log("Recorded inserted into Breed");
    });

    var sqlInsertShelter = "INSERT IGNORE INTO Shelter(Shelter_Name, Contact_Person, Email, Cellphone, Location) VALUES('Maddies Rescue', 'Maddie', 'maddie.lymei@gmail.com', '0813728396', 'Centurion, Gauteng')";
    db.query(sqlInsertShelter, function (err, result) {
        if (err) throw err;
        console.log("Recorded inserted into Shelter");
    });

    var sqlInsertSize = "INSERT IGNORE INTO Size(Size_Name) Values('X-Small'), ('Small'), ('Medium'), ('Large'), ('X-Large'), ('XX-Large')";
    db.query(sqlInsertSize, function (err, result) {
        if (err) throw err;
        console.log("Recorded inserted into Size");
    });

    var sqlInsertDog = "INSERT IGNORE INTO Dog(Microchip_ID, Size_ID, Shelter_ID, Dog_Name, Dog_Description, Sex, Age, Special_Needs, Favourite_Treat, Favourite_Activity) VALUES(123456789123456, 3, 1, 'Lucky', 'Found in a dumpster with over 100 ticks on him, and yet he is still alive! How.. lucky? ;)', 'Male', 5, 'Lots of physical activity', 'Training treat', 'Going to the dog park'), (123556789123456, 5, 1, 'Storm', 'Princess that family moved over seas, expects the best and only the best', 'Female', 12, 'Personal Couch','Night night treaty', 'Sleeping on her couch')";
    db.query(sqlInsertDog, function (err, result) {
        if (err) throw err;
        console.log("Recorded inserted into Dog");
    });

    var sqlInsertDogBreed = "INSERT IGNORE INTO Dog_Breed(Breed_ID, Microchip_ID) VALUES(4, 123456789123456), (8, 123456789123456), (3, 123556789123456)";
    db.query(sqlInsertDogBreed, function (err, result) {
        if (err) throw err;
        console.log("Recorded inserted into Dog_Breed");
    });

    var sqlInsertBehaviour = "INSERT IGNORE INTO Behaviour(Microchip_ID, Cat_Friendly, Dog_Friendly, Child_Friendly, Adult_Friendly, Shed) Values(123456789123456, 'True', 'True', 'True', 'True', 'True'), (123556789123456, 'False', 'True', 'True', 'True', 'True')";
    db.query(sqlInsertBehaviour, function (err, result) {
        if (err) throw err;
        console.log("Recorded inserted into Behaviour");
    });

    var sqlInsertImages = "INSERT IGNORE INTO Picture(Picture_ID, Microchip_ID, Picture_Path, Profile_Picture) VALUES(123456789123456, 'Leiyah_1.jpg', 1), (123456789123456, 'Leiyah_2.jpg', 0), (123456789123456, 'Leiyah_3.jpg', 0), (123556789123456, 'Jimbo_1.jpg', 1), (123556789123456, 'Jimbo_2.jpg', 0), (123556789123456, 'Jimbo_3.jpg', 0)"
    db.query(sqlInsertBehaviour, function (err, result) {
        if (err) throw err;
        console.log("Recorded inserted into Picture");
    });
});

module.exports.db = db;