![WebAssemblt](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/240px-WebAssembly_Logo.svg.png)
# tinygo-wasm-js
Use **Tinygo** to convert Golang to WASM and use in a HTML page with JavaScript.

The project uses NodeJS version 20 to run a demo HTTP server.

## Getting Started
### Clone this repo
```
$ git clone https://github.com/rmarchet/tinygo-wasm-js.git
```
And then move into the project directory to run the commands in the following paragraphs:

```
$ cd tinygo-wasm-js
```

### Install TinyGo
Follow the proper guide for your OS:  
https://tinygo.org/getting-started/install/

Make sure that TinyGO works:
```
$ tinygo version
```

### Install project dependencies


```
$ yarn install
```
or 

```
$ npm install
```

### Build the WASM bundle

```
$ yarn build
```
or 
```
$ npm run build
```
If everithing goes fine, the main.wasm is created in the ./htdocs folder

### Start local HTTP server
This demo project comes with browsersync which runs a local HTTP server and reloads the page everytime there's a change in the files.
To start the server simply run:

```
$ yarn start
```
or 
```
$ npm run start
```

and then visit http://localhost:8088 using your preferred browser.