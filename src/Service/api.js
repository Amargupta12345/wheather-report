import axios from "axios";

const API_KEY = "dd2b3781e1370c2b4d22ccbc9474c880";
const URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  const data = await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
  return data;
};
