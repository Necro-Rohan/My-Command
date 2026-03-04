# 🚀 Arise CLI

**Arise** is a high-performance, Object-Oriented Command Line Interface (CLI) tool built with **Node.js**, **TypeScript**, and **Commander**. It features advanced API integrations, mathematical utilities, and formatted terminal output.

---

## ✨ Features

* **OOP Architecture**: Built using classes and modular service layers for scalability.
* **Rich API Integration**: Real-time data from 5+ external APIs.
* **Beautiful UI**: Styled with `chalk` for clear, color-coded terminal feedback.
* **Input Validation**: Built-in checks to handle incorrect parameters and API errors.
* **Developer Friendly**: Fully typed with TypeScript.

---

## 🛠️ Installation & Setup

Follow these steps to get **Arise** running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/backend.git
cd backend

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
RANDOM_JOKE=https://official-joke-api.appspot.com/random_joke
QUOTE_GENERATOR=https://zenquotes.io/api/random
# Add any other API base URLs used in your ApiService

```

### 4. Build and Global Link

This will compile the TypeScript and allow you to use the `arise` command anywhere on your system.

```bash
npm run build
npm link

```

---

## ⌨️ Command Reference

| Category | Command | Description | Example |
| --- | --- | --- | --- |
| **Social** | `arise greet <name>` | Personalized greeting | `arise greet Rohan` |
| **Math** | `arise add <n1> <n2>` | Sum of two numbers | `arise add 12 8` |
| **Math** | `arise sub/mul/div` | Subtraction, Multiplication, Division | `arise mul 4 5` |
| **Humor** | `arise joke` | Fetches a random setup/punchline | `arise joke` |
| **Wisdom** | `arise quote` | Inspirational quote of the day | `arise quote` |
| **Weather** | `arise weather <city>` | Live weather data via wttr.in | `arise weather London` |
| **Gaming** | `arise pokemon <name>` | Stats and moves for any Pokémon | `arise pokemon gengar` |
| **Global** | `arise country <name>` | Capital, population, and region info | `arise country India` |
| **Git**  | `arise github <username>`| Username, Bio, Repos | `arise github Necro-Rohan`|

---

## 🏗️ Technical Architecture

The project follows strict **Object-Oriented Programming (OOP)** principles:

1. **`ApiService` Class**: Encapsulates all logic for external HTTP requests using Axios. It handles URL construction, data mapping, and error catching.
2. **`MathService` Class**: (If implemented) Handles the core logic for mathematical operations separate from the CLI entry point.
3. **Command Layer**: Uses `commander` to map user input to class methods, ensuring the entry file (`cli.ts`) remains clean and readable.

---

## 📦 Dependencies

* [Commander.js](https://github.com/tj/commander.js/) - Command-line interfaces made easy.
* [Axios](https://axios-http.com/) - Promise-based HTTP client.
* [Chalk](https://github.com/chalk/chalk) - Terminal string styling.
* [Dotenv](https://github.com/motdotla/dotenv) - Loads environment variables.

---