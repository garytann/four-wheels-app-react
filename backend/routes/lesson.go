package routes

import (
	"net/http"

	"github.com/garytann/four-wheels-app-react/backend/controllers"
	"github.com/gin-gonic/gin"
)

func addLessonRoutes(rg *gin.RouterGroup) {
	lessons := rg.Group("/lessons")

	// Health check for /lessons API endpoint
	lessons.GET("/healthz", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"response": "pong"})
	})

	lessons.GET("/", controllers.FindLesson)
	lessons.POST("/", controllers.CreateLesson)
	lessons.PUT("/:id", controllers.UpdateLesson)
}
