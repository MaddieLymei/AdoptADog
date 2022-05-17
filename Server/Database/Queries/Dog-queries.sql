-- Statement to select all dogs for the front-end to see which dog you chose.
-- Excludes images, we still need to see how we are going to do that...
-- getAllDogsPerBreed
SELECT d.Microchip_ID, Dog_Name, Sex, Age, b.Breed_Name
FROM Dog d
INNER JOIN Dog_Breed
ON d.Microchip_ID = Dog_Breed.Microchip_ID
INNER JOIN Breed b
ON Dog_Breed.Breed_ID = b.Breed_ID
Where b.Breed_Name = 'Pit Bull'

-- Excludes images, we still need to see how we are going to do that...
-- getAllDogsPerSize
SELECT d.Microchip_ID, Dog_Name, Sex, Age, s.Size_Name
FROM Dog d
INNER JOIN Size s
ON s.Size_ID = d.Size_ID
Where d.Size_ID = 5


-- Basic information for dog for individual page, where statement will include the paramter from the Front End
-- getDog(microchip_ID)
SELECT d.Microchip_ID, d.Dog_Name, d.sex, d.Age, size.Size_Name, d.Dog_Description, d.Favourite_Activity, d.Favourite_Treat, d.Special_Needs, b.Dog_Friendly, b.Cat_Friendly, b.Child_Friendly, b.Adult_Friendly, b.Shed, s.Shelter_Name, s.Contact_Person, s.Cellphone, s.Email, s.Location
FROM Dog d
INNER JOIN Size
ON d.Size_ID = size.Size_ID
INNER JOIN Behaviour b
ON d.Microchip_ID = b.Microchip_ID
INNER JOIN Shelter s
ON d.Shelter_ID = s.Shelter_ID
WHERE d.Microchip_ID = 123456789123456 

-- Dog Breed for individual page, where statement will include the paramter from the Front End
-- getDogBreed
SELECT d.Microchip_ID, d.Dog_Name, b.Breed_Name
FROM Dog d
INNER JOIN Dog_Breed db
ON d.Microchip_ID = db.Microchip_ID
INNER JOIN Breed b
On db.Breed_ID = b.Breed_IDB
WHERE d.Microchip_ID = 123456789123456

-- Get dogs breeds for filtering
-- getDogBreeds
SELECT Breed_Name
From Breed

-- Get dogs size for filtering
-- getDogSizes
SELECT Size_Name
From Size