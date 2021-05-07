module.exports = {
    name: 'leden',
    description: 'leden',
    execute(message, args, cmd, client){
        const staticsEmbed = {
            color: 15158332,
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
            fields: [{
                name: "Leden in de Eliseboogaabje Discord:",
                value: message.guild.memberCount,
            }],
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };

        message.channel.send({embed: staticsEmbed});
        message.delete();
    }
}