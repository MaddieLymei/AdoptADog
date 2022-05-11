USE master;
GO

-- ALTER DATABASE adoptADog SET AUTO_CLOSE OFF

DROP DATABASE IF EXISTS adoptADog;

CREATE DATABASE adoptADog;
GO

USE adoptADog;
GO

CREATE TABLE Breed (
	Breed_ID INT PRIMARY KEY IDENTITY(1,1),
	Breed_Name VARCHAR(50) NOT NULL
);

CREATE TABLE Size (
	Size_ID INT PRIMARY KEY IDENTITY(1,1),
	Size_Name VARCHAR(8) NOT NULL
);

CREATE TABLE Shelter (
	Shelter_ID INT PRIMARY KEY IDENTITY(1,1),
	Shelter_Name VARCHAR(50) NOT NULL,
    Contact_Person VARCHAR(50) NULL,
    Email VARCHAR(100) NOT NULL,
    Cellphone VARCHAR(15) NOT NULL,
    Location VARCHAR(150) NOT NULL
);

CREATE TABLE Dog (
	Microchip_ID NVARCHAR(15) PRIMARY KEY,
    Size_ID INT NOT NULL,
    Shelter_ID INT NOT NULL,
    Dog_Name VARCHAR(50) NOT NULL,
    Dog_Description VARCHAR(250) NOT NULL,
    Sex VARCHAR(7) NOT NULL,
    Age INT,
    Special_Needs VARCHAR(100) NULL,
    Favourite_Treat VARCHAR(50) NULL,
    Favourite_Activity VARCHAR(50) NULL,
	FOREIGN KEY (Size_ID) REFERENCES Size(Size_ID)
		ON UPDATE CASCADE,
    FOREIGN KEY (Shelter_ID) REFERENCES Shelter(Shelter_ID)
		ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE Picture (
	Picture_ID INT PRIMARY KEY IDENTITY(1,1),
	Microchip_ID NVARCHAR(15) NOT NULL,
    Picture_Path VARBINARY(MAX) NOT NULL,
    FOREIGN KEY (Microchip_ID) REFERENCES Dog(Microchip_ID)
		ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE Dog_Breed (
    Breed_ID INT NOT NULL,
    Microchip_ID NVARCHAR(15) NOT NULL,
    FOREIGN KEY (Microchip_ID) REFERENCES Dog(Microchip_ID)
		ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (Breed_ID) REFERENCES Breed(Breed_ID)
		ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT PK_Dog_Breed PRIMARY KEY (Breed_ID, Microchip_ID)
);

CREATE TABLE Behaviour (
    Microchip_ID NVARCHAR(15) PRIMARY KEY NOT NULL,
    Cat_Friendly BIT NOT NULL,
    Dog_Friendly BIT NOT NULL,
    Child_Friendly BIT NOT NULL,
    Adult_Friendly BIT NOT NULL,
    Shed BIT NOT NULL,
    FOREIGN KEY (Microchip_ID) REFERENCES Dog(Microchip_ID)
		ON UPDATE CASCADE
        ON DELETE CASCADE
);