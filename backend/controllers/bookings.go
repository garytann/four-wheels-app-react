package controllers

import (
	"net/http"

	"github.com/garytann/four-wheels-app-react/backend/models"
	"github.com/gin-gonic/gin"
)

func FindBooking(c *gin.Context) {
	var bookings []models.Bookings
	models.DB.Find(&bookings)

	c.JSON(http.StatusOK, gin.H{"data": bookings})
}

func CreateBooking(c *gin.Context) {
	var booking models.Bookings
	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := models.DB.Create(&booking).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create booking"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": booking})
}

func UpdateBooking(c *gin.Context) {
	var booking models.Bookings
	if err := models.DB.Where("id = ?", c.Param("id")).First(&booking).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Booking not found"})
		return
	}

	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Save(&booking)

	c.JSON(http.StatusOK, gin.H{"data": booking})
}

func DeleteBooking(c *gin.Context) {
	var booking models.Bookings
	if err := models.DB.Where("id = ?", c.Param("id")).First(&booking).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Booking not found"})
		return
	}

	models.DB.Delete(&booking)

	c.JSON(http.StatusOK, gin.H{"data": true})
}
