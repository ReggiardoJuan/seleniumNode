import * as dotenv from 'dotenv';
dotenv.config();

import { GeoCodeModel } from '../models/geocoding.model.js';
import { validateResponseSchema } from '../utils/validator.js';
import { request } from './request.js';

const APP_ID = process.env.APP_ID;

export const getTemperature = async (location) => {
    const { lat, lon } = await getLocationWeather(location);
    const searchParams = {
        lat,
        lon,
        units: 'metric',
        appid: APP_ID,
    };
    const response = await request('https://api.openweathermap.org/data/2.5/weather', {
        method: 'GET',
        searchParams,
    });
    return response;
};

/**
 * @param {String} location - City, State
 */
export const getLocationWeather = async (location) => {
    const [city, state] = location.split(',');
    const searchParams = {
        q: city,
        limit: 1,
        appid: APP_ID,
    };

    const response = await request('http://api.openweathermap.org/geo/1.0/direct', {
        method: 'GET',
        searchParams,
    });
    await validateResponseSchema(response, GeoCodeModel);
    return response[0];
};
