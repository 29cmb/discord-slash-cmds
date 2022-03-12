const colors = require('colors/safe')
class SlashCommand {
    constructor(clientObj,cmdName,cmdDescription,type,callback,CompletedMessage,guildId){
        setTimeout(() => {
            if (clientObj) {
                if (cmdName) {
                    if (cmdDescription) {
                        if (type) {
                            if (callback) {
                                if (CompletedMessage) {
                                    if (guildId) {
                                        console.log(colors.red.underline(`Creating guild command: ${cmdName}, description: ${cmdDescription}.`))
                                        clientObj.api.applications(clientObj.user.id).guilds(guildId).commands.post({
                                            data: {
                                                name: cmdName,
                                                description: cmdDescription,
                                            }
                                        });
                                        clientObj.ws.on('INTERACTION_CREATE', async interaction => {
                                            const command = interaction.data.name.toLowerCase();
                                            const args = interaction.data.options;

                                            if (command == cmdName) {
                                                callback(args)
                                                clientObj.api.interactions(interaction.id, interaction.token).callback.post({
                                                    data: {
                                                        type: type,
                                                        data: await createAPIMessage(interaction, CompletedMessage, clientObj),
                                                    }
                                                });
                                            }
                                        })
                                    } else {
                                        console.log(colors.red.underline(`Creating global command: ${cmdName}, description: ${cmdDescription}.`))
                                        clientObj.api.applications(clientObj.user.id).commands.post({
                                            data: {
                                                name: cmdName,
                                                description: cmdDescription,
                                            }
                                        });
                                        clientObj.ws.on('INTERACTION_CREATE', async interaction => {
                                            const command = interaction.data.name.toLowerCase();
                                            const args = interaction.data.options;

                                            if (command == cmdName) {
                                                callback(args)
                                                clientObj.api.interactions(interaction.id, interaction.token).callback.post({
                                                    data: {
                                                        type: type,
                                                        data: await createAPIMessage(interaction, CompletedMessage, clientObj),
                                                    }
                                                });
                                            }
                                        })
                                    }
                                } else {
                                    throw new Error("You must provide a message to send after execution")
                                }
                            } else {
                                throw new Error("You must provide a callback function (What to do after execution)")
                            }
                        } else {
                            throw new Error("You must provide a command type")
                        }
                    } else {
                        throw new Error("You must provide a command description")
                    }
                } else {
                    throw new Error("You must provide a command name")
                }
            } else {
                throw new Error("You must provide a client object")
            }
        }, 1 * 1000)
    }
}

const Discord = require("discord.js")
async function createAPIMessage(interaction, content, clientObj) {
    const apiMessage = await Discord.APIMessage.create(clientObj.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();

    return { ...apiMessage.data, files: apiMessage.files };
}


module.exports = SlashCmds
