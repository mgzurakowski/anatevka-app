export interface OpenWeatherCity {
    name: string;
    /** eg. { en: 'City of London' } */
    local_names: { [countryCode: string]: string };
    /** latitude in decimal degrees */
    lat: string;
    /** longitude in decimal degrees */
    lon: string;
    /** country key, eg. 'GB' */
    country: string;
}
