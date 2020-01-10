import axios from "axios";
const BASEURL = "https://api.sportsdata.io/v3/nfl/pbp/json/PlayByPlay/";
const APIKEY = "?key=20ae0fa9e90e482f98d8799f523e3a4f";
const SEASON = "/2019REG";
const WEEK = "/1/"

export default {
  search: function(query) {
    return axios.get(BASEURL + SEASON + WEEK + was + APIKEY);
  }
};