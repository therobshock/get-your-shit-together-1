import axios from "axios"; 

export default {
  // Gets all shit
  getShit: function() {
    return axios.get("http://localhost:3001/api/shit");
  },
  // Gets the shit with the given id
  getOneShit: function(id) {
    return axios.get("http://localhost:3001/api/shit" + id);
  },
  // Deletes the shit with the given id
  deleteShit: function(id) {
    return axios.delete("http://localhost:3001/api/shit" + id);
  },
  // Saves a shit to the database
  saveShit: function(shitData) {
    return axios.post("http://localhost:3001/api/shit", shitData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("http://localhost:3001/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("http://localhost:3001/api/user" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("http://localhost:3001/api/user" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("http://localhost:3001/api/user", userData);
  },
};
