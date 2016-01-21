import axios from 'axios';

const API_KEY = '7e785789886b861c7184d85202c6f263';
//http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=2de143494c0b295cca9337e1e96b00e0
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather ( city ){

    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

  //  console.log ('request: ', request );

    return {
        type: FETCH_WEATHER,
        payload: request

    };
}
