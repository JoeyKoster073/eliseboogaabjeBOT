module.exports = {
    name: 'socials',
    description: 'socials',
    execute(message, args){
        const socialsEmbed = {
            color: 15158332,
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
            fields: [{
                name: "<:anus:840313148233613343> | Instagram",
                value: "Eliseboogaabje",
                },
                {
                    name: "<:anus:840313148233613343> | Snapchat",
                    value: "Eliseboogaabje",
                },
                {
                    name: "<:anus:840313148233613343> | Twitch",
                    value: "twitch.tv/eliseboogaabje",
                }],
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };

        message.channel.send({embed: socialsEmbed});
        message.delete();
    }
}