package routes

import (
	"net/http"

	"github.com/garytann/four-wheels-app-react/backend/controllers"
	"github.com/gin-gonic/gin"
)

func addLessonRoutes(rg *gin.RouterGroup) {
	lessons := rg.Group("/lessons")
	// lessons.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"http://localhost:3000", "http://127.0.0.1:3000"},
	// 	AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
	// 	AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
	// 	ExposeHeaders:    []string{"Content-Length"},
	// 	AllowCredentials: true,
	// 	MaxAge:           12 * time.Hour,
	// }))

	// Health check for /lessons API endpoint
	lessons.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"response": "pong"})
	})

	lessons.GET("/", controllers.FindLesson)
	lessons.GET("/:type", controllers.FindLessonByType)
	lessons.POST("/", controllers.CreateLesson)
	lessons.PUT("/:id", controllers.UpdateLesson)
	lessons.DELETE("/:id", controllers.DeleteLesson)
}
