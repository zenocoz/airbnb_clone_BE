const express = require("express")

const server = express()
const listEndpoints = require("express-list-endpoints")

//routes
const placesRoutes = require("./services/places")

server.use("/places", placesRoutes)

const port = process.env.PORT || 3001

console.log(listEndpoints(server))
server.listen(() => {
  console.log("server listening on port", port)
})
