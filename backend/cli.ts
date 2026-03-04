#!/usr/bin/env node
const { Command } = require('commander')
const axios = require('axios')
const dotenv = require('dotenv')
const chalk = require('chalk')
const {ApiService} = require('./src/services/ApiService')

dotenv.config()

const program = new Command()
const api = new ApiService();

program
  .name('arise')
  .description(chalk.cyan('The ultimate productivity CLI tool'))
  .version('1.0.0');

program.command("greet <name>").action((name: string) => { console.log(`Hello ${name}`) })

program.command("add <n1> <n2>").description("Add two numbers").action((n1: number, n2: number) => { console.log(Number(n1) + Number(n2) ) })

program.command("sub <n1> <n2>").description("Subtract second number from first number").action((n1: number, n2: number) => { console.log(Number(n1) - Number(n2)) })

program.command("mul <n1> <n2>").description("Multiply two numbers").action((n1: number, n2: number) => { console.log(Number(n1) * Number(n2)) })

program.command("div <n1> <n2>").description("Divide first numbers by second number").action((n1: number, n2: number) => { console.log(Number(n1) / Number(n2)) })

program
  .command("joke")
  .description("Random Joke")
  .action(async() => {
    try {
      console.log(await api.getJoke())
    } catch (error) {
      console.log(error)
    }
  })

program
  .command("quote")
  .description("Random Quote")
  .action(async() => {
    try {
      console.log(await api.getQuote())
    } catch (error) {
      console.log(error)
    }
  })

program
  .command('github <username>')
  .description('Fetch GitHub user profile details')
  .action(async (username: string) => {
    try {
      const user = await api.getGithubUser(username);
      console.log(chalk.yellow(`\nUser: ${user.name || user.login}`));
      console.log(chalk.gray(`Bio: ${user.bio || 'No bio available'}`));
      console.log(chalk.blue(`Repos: ${user.public_repos}`));
    } catch (err) {
      console.log(chalk.red('User not found or API limit reached.'));
    }
  });

program
  .command('pokemon <pokemon_name>')
  .description('Fetch Pokemon Info')
  .action(async (pokemon_name: string) => {
    try {
      console.log( await api.getPokemon(pokemon_name))
    } catch (error) {
      console.log(`Error while fetching Pokemon: ${error}`)
    }
  })

program
  .command('country <country_name>')
  .description('Get Country Basic Info')
  .action(async (country_name: string) => {
    try {
      console.log(await api.getCountry(country_name))
    } catch (error) {
      console.log(`Error While fetching Country: ${error}`)
    }
  })

program
  .command('city <city>')
  .description('Get Weather Report for indivisual city')
  .action(async (city: string) => {
    try {
      console.log(await api.getWeather(city))
    } catch (error) {
      console.log(`Error While fetching ${city} Weather: ${error}`)
    }
  })


program.parse() 