import axios from "axios";

export default {
  // Gets all shit
  getShit: function() {
    return axios.get("/api/shits");
  },
  // Gets the shit with the given id
  getOneShit: function(id) {
    return axios.get("/api/shits/" + id);
  },
  // Deletes the shit with the given id
  deleteShit: function(id) {
    return axios.delete("/api/shits/" + id);
  },
  // Saves a shit to the database
  saveShit: function(shitData) {
    return axios.post("http://localhost:3001/api/shits", shitData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
};
