package controllers

import (
	"net/http"

	"github.com/garytann/four-wheels-app-react/backend/models"
	"github.com/gin-gonic/gin"
)

// GET /books
// Get all books
func FindLesson(c *gin.Context) {
	var lessons []models.Lessons
	models.DB.Find(&lessons)

	c.JSON(http.StatusOK, gin.H{"data": lessons})
}

// POST /lessons
// Create a new lesson
func CreateLesson(c *gin.Context) {
	var lesson models.Lessons
	if err := c.ShouldBindJSON(&lesson); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := models.DB.Create(&lesson).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create lesson"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": lesson})
}

// PUT /lessons/:id
// Update a lesson
func UpdateLesson(c *gin.Context) {
	var lesson models.Lessons
	if err := models.DB.Where("id = ?", c.Param("id")).First(&lesson).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Lesson not found"})
		return
	}

	if err := c.ShouldBindJSON(&lesson); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Save(&lesson)

	c.JSON(http.StatusOK, gin.H{"data": lesson})
}

// DELETE /lessons/:id
// Delete a lesson
func DeleteLesson(c *gin.Context) {
	var lesson models.Lessons
	if err := models.DB.Where("id = ?", c.Param("id")).First(&lesson).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Lesson not found"})
		return
	}

	models.DB.Delete(&lesson)

	c.JSON(http.StatusOK, gin.H{"data": true})
}
