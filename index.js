module.exports = {
    SlashCommand(clientObj, cmdName, cmdDescription, type, callback, CompletedMessage, guildId) {
        require('./src/SlashCommand.js').SlashCmd(clientObj, cmdName, cmdDescription, type, callback, CompletedMessage, guildId)
    }
}