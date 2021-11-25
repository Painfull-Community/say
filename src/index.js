const { Util } = require('discord.js')
module.exports = {
    execute: function (message, args) {
        let cleanMessage = Util.cleanContent(args.join(" "))
        message.channel.send(cleanMessage + " " + message.author.username) 
    }
}