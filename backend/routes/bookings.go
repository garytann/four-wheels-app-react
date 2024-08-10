package routes

import (
	"net/http"

	"github.com/garytann/four-wheels-app-react/backend/controllers"
	"github.com/gin-gonic/gin"
)

func addBookingRoutes(rg *gin.RouterGroup) {
	bookings := rg.Group("/bookings")

	// Health check for /lessons API endpoint
	bookings.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"response": "pong"})
	})

	bookings.GET("/", controllers.FindBooking)
	bookings.POST("/", controllers.CreateBooking)
	bookings.PUT("/:id", controllers.UpdateBooking)
	bookings.DELETE("/:id", controllers.DeleteBooking)

}
