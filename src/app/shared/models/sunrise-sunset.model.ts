export interface SunriseSunsetData {
    astronomical_twilight_begin: string;
    astronomical_twilight_end: string;
    civil_twilight_begin: string;
    civil_twilight_end: string;
    day_length: number;
    nautical_twilight_begin: string;
    nautical_twilight_end: string;
    solar_noon: string;
    sunrise: string;
    sunset: string;
  }
  
  export interface SunriseSunsetDataHttpResponse {
    results: SunriseSunsetData;
    status: SunriseSunsetDataHttpResponseStatusCodes;
  }
  
  export type SunriseSunsetDataHttpResponseStatusCodes =
    | 'OK'
    | 'INVALID_REQUEST'
    | 'INVALID_DATE'
    | 'UNKNOWN_ERROR';
  