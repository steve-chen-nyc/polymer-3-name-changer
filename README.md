
# Polymer 3.0 Name Changer Demo
Learning how to create web components with polymer 3.0 &amp; JS ES6 Modules. Creates a Hello World, "Name" and input box to change name.


## Getting Started And Installation
1. Run `yarn install` from project directory.  
2. Run `polymer serve` to start local web server.
3. Goto `localhost:8080` to view demo.
4. Create a `config.js` file in the src directory and include function below.
```
export function apiConfig(name) {
    return `
        https://api.giphy.com/v1/gifs/search?api_key=GIPHY_API_KEY=${name}&limit=25&offset=0&rating=G&lang=en
    `
};
```

### Prerequisites
```
1.Yarn - `npm install -g yarn`
2. Polymer Cli - `npm install -g polymer-cli`
3. Giphy API key
```

### Demo
```
    <name-changer name="Douglas Crockford" readonly></name-changer>
```

### Attributes
```
    1. name="name" - optional. Default = "You Guyzzz"
    2. readonly - optional
```
