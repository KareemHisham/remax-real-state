import axios from "axios";

export const BaseURL = "https://bayut.p.rapidapi.com";
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "01164c56dbmshe67a0210d63f2bep1db00ejsn19a5cbcf826c",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const apartmentData = await axios.get(url, options);
  return apartmentData;
};