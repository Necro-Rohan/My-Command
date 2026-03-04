import axios from 'axios';
import chalk from 'chalk';

export class ApiService {
  private readonly jokeUrl = process.env.RANDOM_JOKE!;
  private readonly quoteUrl = process.env.QUOTE_GENERATOR!;
  
  private readonly weatherBase = "https://wttr.in/";
  private readonly pokemonBase = "https://pokeapi.co/api/v2/pokemon/";
  private readonly countryBase = "https://restcountries.com/v3.1/name/";

  async getJoke() {
    const { data } = await axios.get(this.jokeUrl);
    return `${chalk.yellow(data.setup)}\n${chalk.green('→ ' + data.punchline)}`;
  }

  async getQuote() {
    const { data } = await axios.get(this.quoteUrl);
    return `${chalk.italic(`"${data[0].q}"`)} - ${chalk.bold(data[0].a)}`;
  }

  async getWeather(city: string) {
    // format=j1 gives a nice JSON response from wttr.in
    const { data } = await axios.get(`${this.weatherBase}${city}?format=j1`);
    const temp = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;
    return `Weather in ${chalk.cyan(city)}: ${temp}°C, ${desc}`;
  }

  async getPokemon(name: string) {
    const { data } = await axios.get(`${this.pokemonBase}${name.toLowerCase()}`);
    const moves = data.moves
      .slice(0, 5) 
      .map((m: any) => chalk.magenta(m.move.name)) 
      .join(', '); 

    return `${chalk.bold.yellow(data.name.toUpperCase())}
    ${chalk.blue('Type:')} ${data.types.map((t: any) => t.type.name).join('/')}
    ${chalk.blue('Height:')} ${data.height}
    ${chalk.blue('Top Moves:')} ${moves}`.trim();
  }

  async getCountry(countryName: string) {
    const { data } = await axios.get(`${this.countryBase}${countryName}`);
    const country = data[0];
    return `${chalk.blue(country.name.common)} | Capital: ${country.capital[0]} | Population: ${country.population.toLocaleString()}`;
  }
}