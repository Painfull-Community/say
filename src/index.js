const { Util } = require('discord.js')
module.exports = {
    execute: function (message, args) {
        let cleanMessage = Util.cleanContent(args.join(" "))
        message.channel.send({ content: cleanMessage + "\n-" + Util.cleanContent(message.author.username), allowedMentions: { parse: [] }})
    }
}
