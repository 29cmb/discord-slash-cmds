# Discord-slash-cmds
<img src="https://img.shields.io/npm/dt/discord-slash-cmds"></img><img src="https://img.shields.io/npm/v/discord-slash-commands"></img>

(This is ONLY for version 12 of discord.js)



This program is used for creating slash commands for discord

*Having trouble? Join our discord server! https://discord.gg/YBtaTV6Va6*


First, you need to set up your discord bot (This project is using env)

```
npm i discord.js
npm i dotenv
```

```js
const Discord = require("discord.js")
const client = new Discord.Client()
require("dotenv").config()

client.on('ready', () => {
    console.log("Online")
}) 

client.login(process.env.TOKEN)
```

Then you need to install the module

```
npm i discord-slash-cmds
```

Then you need to add the module to your code

```js
const discordSlashCmds = require("discord-slash-cmds")
```

Then all you need to do is execute this code to create a command
The example command will be `/hello`
```js
const Discord = require("discord.js")
const client = new Discord.Client()

const { SlashCommand } = require("discord-slash-cmds")
const hellocommand = new SlashCommand(client, "hello", "Says hello!", 4, function(args) { // Now using constructors!
    
}, "Hello, Thanks for using my package!")
```

if you would like to create a slash command just for a specific server, just add more arguments

```js
const Discord = require("discord.js")
const client = new Discord.Client()

const { SlashCommand } = require("discord-slash-cmds")
const hellocommand = new SlashCommand(client, "hello", "Says hello!", 4, function(args) { // Now using constructors!

}, "Hello, Thanks for using my package!", 1234567890) // Replace '1234567890' with the id of the server
```

 

# Arguments

```
Client object - The discord client, Required.

Command name - The name of the slash command, Required.

Command description - The description of the slash command, Required.

Command type (All command types: https://discord.com/developers/docs/interactions/slash-commands#data-models-and-types) - The type of command, Required.

Command callback - The code to execute when the command is executed (Do not include sending a message), Required.

Completed Message - The message to send after the command is executed. Required

Guild id - The guild to add the command for (If you do not add this argument, it will be global), Not required. 
```
