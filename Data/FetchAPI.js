import axios from "axios";

export const BaseURL = "https://bayut.p.rapidapi.com";
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_REAL_STATE_API,
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const apartmentData = await axios.get(url, options);
  return apartmentData;
};