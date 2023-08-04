
export class WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];

  constructor(name: string, temp: number, description: string) {
    this.name = name;
    this.main = { temp };
    this.weather = [{ description }];
  }
}