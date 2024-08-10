package models

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDatabase() {

	// database, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	// dbDriver := "mysql"
	// dbName := "test"
	// dbUser := "user"
	// dbPassword := "your password"
	// dbTcp := "@tcp(127.0.0.1:3306)/"
	// gormDb, err := gorm.Open(dbDriver, dbUser+":"+dbPassword+dbTcp+dbName+
	// 	"?charset=utf8&parseTime=True")

	dsn := "user:password@tcp(127.0.0.1:3306)/db?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	err = db.AutoMigrate(&Lessons{})

	if err != nil {
		return
	}

	err = db.AutoMigrate(&Bookings{})
	if err != nil {
		return
	}

	DB = db

}
