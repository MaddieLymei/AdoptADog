INSERT INTO Breed( Breed_Name)
Values( 'Labrador'), ('German Shepard'), ('Great Dane'), ('Pit Bull'), ('Jack Russel'), ('Pomeranian'), ('Beagle'), ('Africanis'), ('Unknown');

INSERT INTO Shelter(Shelter_Name, Contact_Person, Email, Cellphone, Location)
VALUES('Maddies Rescue', 'Maddie', 'maddie.lymei@gmail.com', '0813728396', 'Centurion, Gauteng');

INSERT INTO Size(Size_Name)
Values('X-Small'), ('Small'), ('Medium'), ('Large'), ('X-Large'), ('XX-Large');

INSERT INTO DOG(Microchip_ID, Size_ID, Shelter_ID, Dog_Name, Dog_Description, Sex, Age, Special_Needs, Favourite_Treat, Favourite_Activity)
VALUES(123456789123456, 3, 1, 'Lucky', 'Found in a dumpster with over 100 ticks on him, and yet he is still alive! How.. lucky? ;)', 'Male', 5, 'Lots of physical activity', 'Training treat', 'Going to the dog park'), (123556789123456, 5, 1, 'Storm', 'Princess that family moved over seas, expects the best and only the best', 'Female', 12, 'Personal Couch','Night night treaty', 'Sleeping on her couch');

INSERT INTO Dog_Breed(Breed_ID, Microchip_ID)
VALUES(4, 123456789123456), (8, 123456789123456), (3, 123556789123456);

INSERT INTO Behaviour(Microchip_ID, Cat_Friendly, Dog_Friendly, Child_Friendly, Adult_Friendly, Shed)
Values(123456789123456, 'True', 'True', 'True', 'True', 'True'), (123556789123456, 'False', 'True', 'True', 'True', 'True');