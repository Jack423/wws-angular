import { Deserializable } from './deserializable.model';

export class WeatherStationData implements Deserializable {
  credit?: string;
  credit_URL?: string;
  disclaimer_url?: string;
  copyright_url?: string;
  privacy_policy_url?: string;
  image?: Image;
  suggested_pickup?: string;
  suggested_pickup_period?: string;
  dewpoint_c?: string;
  dewpoint_f?: string;
  dewpoint_string?: string;
  heat_index_c?: string;
  heat_index_f?: string;
  heat_index_string?: string;
  location?: string;
  latitude?: string;
  longitude?: string;
  observation_time?: string;
  observation_time_rfc822?: string;
  pressure_in?: string;
  pressure_mb?: string;
  pressure_string?: string;
  relative_humidity?: string;
  station_id?: string;
  temp_c?: string;
  temp_f?: string;
  temperature_string?: string;
  wind_degrees?: string;
  wind_dir?: string;
  wind_kt?: string;
  wind_mph?: string;
  windchill_c?: string;
  windchill_f?: string;
  windchill_string?: string;
  davis_current_observation?: DavisCurrentObservation;
  time_to_generate?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.davis_current_observation = new DavisCurrentObservation().deserialize(input.davis_current_observation);
    this.image = new Image().deserialize(input.image);
    return this;
  }
}

class DavisCurrentObservation implements Deserializable {
  DID?: string;
  station_name?: string;
  observation_age?: number;
  dewpoint_day_high_f?: string;
  dewpoint_day_high_time?: string;
  dewpoint_day_low_f?: string;
  dewpoint_day_low_time?: string;
  dewpoint_month_high_f?: string;
  dewpoint_month_low_f?: string;
  dewpoint_year_high_f?: string;
  dewpoint_year_low_f?: string;
  et_day?: string;
  et_month?: string;
  et_year?: string;
  heat_index_day_high_f?: string;
  heat_index_day_high_time?: string;
  heat_index_month_high_f?: string;
  heat_index_year_high_f?: string;
  pressure_day_high_in?: string;
  pressure_day_high_time?: string;
  pressure_day_low_in?: string;
  pressure_day_low_time?: string;
  pressure_month_high_in?: string;
  pressure_month_low_in?: string;
  pressure_tendency_string?: string;
  pressure_year_high_in?: string;
  pressure_year_low_in?: string;
  rain_day_in?: string;
  rain_month_in?: string;
  rain_rate_day_high_in_per_hr?: string;
  rain_rate_hour_high_in_per_hr?: string;
  rain_rate_in_per_hr?: string;
  rain_rate_month_high_in_per_hr?: string;
  rain_rate_year_high_in_per_hr?: string;
  rain_storm_in?: string;
  rain_year_in?: string;
  relative_humidity_day_high?: string;
  relative_humidity_day_high_time?: string;
  relative_humidity_day_low?: string;
  relative_humidity_day_low_time?: string;
  relative_humidity_month_high?: string;
  relative_humidity_month_low?: string;
  relative_humidity_year_high?: string;
  relative_humidity_year_low?: string;
  relative_humidity_in?: string;
  relative_humidity_in_day_high?: string;
  relative_humidity_in_day_high_time?: string;
  relative_humidity_in_day_low?: string;
  relative_humidity_in_day_low_time?: string;
  relative_humidity_in_month_high?: string;
  relative_humidity_in_month_low?: string;
  relative_humidity_in_year_high?: string;
  relative_humidity_in_year_low?: string;
  solar_radiation?: string;
  solar_radiation_day_high?: string;
  solar_radiation_day_high_time?: string;
  solar_radiation_month_high?: string;
  solar_radiation_year_high?: string;
  sunrise?: string;
  sunset?: string;
  temp_day_high_f?: string;
  temp_day_high_time?: string;
  temp_day_low_f?: string;
  temp_day_low_time?: string;
  temp_month_high_f?: string;
  temp_month_low_f?: string;
  temp_year_high_f?: string;
  temp_year_low_f?: string;
  temp_in_day_high_f?: string;
  temp_in_day_high_time?: string;
  temp_in_day_low_f?: string;
  temp_in_day_low_time?: string;
  temp_in_f?: string;
  temp_in_month_high_f?: string;
  temp_in_month_low_f?: string;
  temp_in_year_high_f?: string;
  temp_in_year_low_f?: string;
  uv_index?: string;
  uv_index_day_high?: string;
  uv_index_day_high_time?: string;
  uv_index_month_high?: string;
  uv_index_year_high?: string;
  wind_day_high_mph?: string;
  wind_day_high_time?: string;
  wind_month_high_mph?: string;
  wind_ten_min_avg_mph?: string;
  wind_ten_min_gust_mph?: string;
  wind_year_high_mph?: string;
  windchill_day_low_f?: string;
  windchill_day_low_time?: string;
  windchill_month_low_f?: string;
  windchill_year_low_f?: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

class Image implements Deserializable {
  url?: string;
  title?: string;
  link?: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
