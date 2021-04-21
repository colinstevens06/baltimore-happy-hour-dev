import axios from "axios"

const API = {
  getRestaurants: function () {
    console.log("api front end")
    return axios.get("/api/restaurants")
  },

  getRestaurant: function (slug) {
    return axios.get("/api/restaurants/" + slug)
  },

}

export default API;