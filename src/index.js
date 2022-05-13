const { Util } = require('discord.js')
module.exports = {
    execute: function (message, args) {
        message.channel.send({ content: args.join(" ") + "\n-" + message.author.username, allowedMentions: { parse: [] }})
    }
}
