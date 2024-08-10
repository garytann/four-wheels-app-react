package models

import (
	"time"

	"gorm.io/gorm"
)

type Bookings struct {
	ID        uint `json:"id" gorm:"primary_key"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
	Name      string         `json:"name"`
	Contact   string         `json:"contact"`
	Email     string         `json:"email"`
	Pax       uint8          `json:"pax"`
	Location  string         `json:"location"`
	Timing    string         `json:"timing"`
}
