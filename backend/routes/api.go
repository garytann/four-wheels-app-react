package routes

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var router = gin.Default()

// Run will start the server
func Run() {
	router.Use(cors.Default())
	// router.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"http://localhost:3000", "http://127.0.0.1:3000"},
	// 	AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
	// 	AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
	// 	ExposeHeaders:    []string{"Content-Length"},
	// 	AllowCredentials: true,
	// 	MaxAge:           12 * time.Hour,
	// }))
	getRoutes()
	router.Run(":9000")
}

// getRoutes will create our routes of our entire application
// this way every group of routes can be defined in their own file
// so this one won't be so messy
func getRoutes() {
	v1 := router.Group("/api/v1")
	addLessonRoutes(v1)
	addBookingRoutes(v1)

	// v2 := router.Group("/v2")
	// addPingRoutes(v2)
}
