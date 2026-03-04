"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class ApiService {
    constructor() {
        this.jokeUrl = process.env.RANDOM_JOKE;
        this.quoteUrl = process.env.QUOTE_GENERATOR;
        this.weatherBase = "https://wttr.in/";
        this.pokemonBase = "https://pokeapi.co/api/v2/pokemon/";
        this.countryBase = "https://restcountries.com/v3.1/name/";
    }
    async getJoke() {
        const { data } = await axios_1.default.get(this.jokeUrl);
        return `${chalk_1.default.yellow(data.setup)}\n${chalk_1.default.green('→ ' + data.punchline)}`;
    }
    async getQuote() {
        const { data } = await axios_1.default.get(this.quoteUrl);
        return `${chalk_1.default.italic(`"${data[0].q}"`)} - ${chalk_1.default.bold(data[0].a)}`;
    }
    async getWeather(city) {
        // format=j1 gives a nice JSON response from wttr.in
        const { data } = await axios_1.default.get(`${this.weatherBase}${city}?format=j1`);
        const temp = data.current_condition[0].temp_C;
        const desc = data.current_condition[0].weatherDesc[0].value;
        return `Weather in ${chalk_1.default.cyan(city)}: ${temp}°C, ${desc}`;
    }
    async getPokemon(name) {
        const { data } = await axios_1.default.get(`${this.pokemonBase}${name.toLowerCase()}`);
        const moves = data.moves
            .slice(0, 5)
            .map((m) => chalk_1.default.magenta(m.move.name))
            .join(', ');
        return `${chalk_1.default.bold.yellow(data.name.toUpperCase())}
    ${chalk_1.default.blue('Type:')} ${data.types.map((t) => t.type.name).join('/')}
    ${chalk_1.default.blue('Height:')} ${data.height}
    ${chalk_1.default.blue('Top Moves:')} ${moves}`.trim();
    }
    async getCountry(countryName) {
        const { data } = await axios_1.default.get(`${this.countryBase}${countryName}`);
        const country = data[0];
        return `${chalk_1.default.blue(country.name.common)} | Capital: ${country.capital[0]} | Population: ${country.population.toLocaleString()}`;
    }
}
exports.ApiService = ApiService;
