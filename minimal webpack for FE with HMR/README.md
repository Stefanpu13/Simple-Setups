# Minimal webpack dev config

## Steps (if first time install and no packages.json present)
* **npm init**
* **npm i --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin clean-webpack-plugin**
* clean up **package.json** file (remove **entry** property)
* add 'start' command in 'scripts' property in **package.json**:  "start": "**webpack-dev-server**"
* create **webpack.config.js** file with basic content (check out  **Bundle it** on https://webpack.js.org/)
* create **index.html** file
* add `<script src="bundle.js"></script>`
* create **src** dir
* create **index.js** file in **src**
* add module file in **src** (for example **dev1.js**)
  * add some code to the file and export it
* import **dev1** into **index.js** and use it
* **npm start**
* go to **http://localhost:9194** (or change `devServer:{ port: * }` in **webpack.config.js** to your desired port)
* write  code

## Steps (if you have downloaded this code)
* **npm i**
* npm **start**
* go to **http://localhost:9194**
* write code



