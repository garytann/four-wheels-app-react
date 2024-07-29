package models

import (
	"time"

	"gorm.io/gorm"
)

type Lessons struct {
	ID         uint `json:"id" gorm:"primary_key"`
	CreatedAt  time.Time
	UpdatedAt  time.Time
	DeletedAt  gorm.DeletedAt `gorm:"index"`
	Location   string         `json:"location"`
	Timing     string         `json:"timing"`
	LessonDate string         `json:"lesson_date"`
	Type       string         `json:"type"`
}
