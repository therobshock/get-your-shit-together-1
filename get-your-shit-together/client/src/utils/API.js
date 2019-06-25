import axios from "axios";

export default {
  // Gets all shit
  getShit: function() {
    return axios.get("/api/shit");
  },
  // Gets the shit with the given id
  getOneShit: function(id) {
    return axios.get("/api/shit/" + id);
  },
  // Deletes the shit with the given id
  deleteShit: function(id) {
    return axios.delete("/api/shit/" + id);
  },
  // Saves a shit to the database
  saveShit: function(shitData) {
    return axios.post("/api/shit", shitData);
  }
};
