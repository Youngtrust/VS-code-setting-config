# VS-code-setting-config
VS code setting config

I am using Visual Studio Code  as our Front-End IDE - this is a note place where I can record some settings


Before using we have some recommended setup: 
vs code extensions: 

ES7 React/Redux/GraphQL/React-Native snippet
Prettier-Code formatter
Simple React Snippets


Config vscode settings


    by using "cmd+shift+p " in keyboard  to open the searchbar, then typing settings

the settings(JSON) you can control your settings through JSON format key:value pair (personally preferred ): 

Setting.json in the folder



start & run front-end locally 


check if you have download npm in your computer:

    open terminal: type" npm -v", like below image:

if not, download nodejs:


go to the project folder, in terminal type : "npm install"


after npm install: in terminal ->type "npm start"

you will see above result: and it will open a new tab in your browser (for browser, I suggest you to use google chrome)



Q&A:

After start you see blank page: 

 export NODE_OPTIONS=--max_old_space_size=4096 



