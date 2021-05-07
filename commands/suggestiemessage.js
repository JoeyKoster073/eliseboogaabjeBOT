module.exports = {
    name: 'suggestiebericht',
    description: 'suggestiebericht',
    execute(message, args, cmd, client, discord){
        const suggestiemessageEmbed = {
            color: 15158332,
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
            fields: [{
                name: "Ideeënbox",
                value: "Hier kun je een suggestie indienen. Zowel voor de discord, als voor de streams etc."
                },
                {
                    name: "Disclaimer!",
                    value: "*Ga hier niet in typen als je de command niet gaat uitvoeren!*"
                },
                {
                    name: "Command:",
                    value: "```!suggestie [bericht]```"
                }],
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };
        
        const errorEmbed = {
            color: 15158332,
            fields: [{
                name: "Error met uirvoeren van de command.",
                value: "**Reden:** *Je bent niet bevoegd deze command uit te voeren!*"
                }],
                
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };

        if(message.member.roles.cache.has('637282843025997825')){
        message.channel.send({embed: suggestiemessageEmbed});
        } else {
            message.channel.send({embed: errorEmbed});
        }
        message.delete();
    }
}