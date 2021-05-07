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
                name: "<:Instagram:722377322241589288> | Instagram",
                value: "Eliseboogaabje",
                },
                {
                    name: "<:Snapchat:722377407612583996> | Snapchat",
                    value: "Eliseboogaabje",
                },
                {
                    name: "<:twitch:722377894390661124> | Twitch",
                    value: "https://twitch.tv/eliseboogaabje",
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