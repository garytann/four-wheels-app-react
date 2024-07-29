package models

type Bookings struct {
	ID    uint   `json:"id" gorm:"primary_key"`
	Title string `json:"title"`
	Name  string `json:"name"`
}
