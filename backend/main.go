package main

import (
	"net/http"

	"github.com/garytann/four-wheels-app-react/backend/models"
	"github.com/garytann/four-wheels-app-react/backend/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Health check for index API endpoint
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"response": "pong"})
	})
	models.ConnectToDatabase()

	routes.Run()
}
