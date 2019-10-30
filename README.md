# VS-code-setting-config
VS code setting config JSON

1.FE code in code browser:
https://code.amazon.com/packages/FactoryLensFE/trees/mainline
create a folder for FE code, under the folder use  command line: "git clone ssh://git.amazon.com/pkg/FactoryLensFE"
IDE:



2.We are using Visual Studio Code  as our Front-End IDE
go to the official website and download based on your OS

Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.47.19 AM.png



3.Before using we have some recommended setup: 
vs code extensions: 

like the image below: left side, this Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.49.31 AM.png icon: click & search extensions

Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.51.03 AM.png

based on that search and download extensions:

ES7 React/Redux/GraphQL/React-Native snippets:Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.53.03 AM.png

Prettier-Code formatter:Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.53.53 AM.png

Simple React Snippets: Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.54.08 AM.png



4.Config vscode settings


    by using "cmd+shift+p " in keyboard  to open the searchbar, then typing settings

   Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.55.48 AM.png

in the settings(JSON) you can control your settings through JSON format key:value pair (personally preferred ): 

below is my own settings

Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 10.57.29 AM.png



{
  "editor.fontSize": 18,
  "editor.formatOnSave": true,
  "workbench.colorCustomizations": {
    "terminal.foreground": "#11c958",
    "terminal.fontSize": 16,
    "terminal.ansiBlack": "#cccccc"
    // "terminal.background": "#383737"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDelete": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "window.zoomLevel": 0,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}


or you can use setting ui to control settings





5.start & run front-end locally 


check if you have download npm in your computer:



    open terminal: type" npm -v", like below image:

Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 11.02.09 AM.png

if not, download nodejs:   Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 11.02.51 AM.png





go to the project folder, in terminal type : "npm install"


after npm install: in terminal ->type "npm start"



Wireless Desense and Integrity > Factory Front End Quick Start > Screen Shot 2019-07-25 at 11.07.25 AM.png

you will see above result: and it will open a new tab in your browser (for browser, we highly suggest you to use google chrome)



Q&A:

After start you see blank page: 

 export NODE_OPTIONS=--max_old_space_size=4096 



