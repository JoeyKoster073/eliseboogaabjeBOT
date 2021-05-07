module.exports = {
    name: 'suggestie',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, discord){
        const channel = message.guild.channels.cache.find(channel => channel.name === '📱suggesties');
        const suggestieEmbed = {
            color: 15158332,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL({ dynamic: true})
            },
            description: args.join(' '),
        };
        const succesvolEmbed = {
            color: 15158332,
            fields: [{
                name: "Suggestie",
                value: "Je suggestie is succesvol ontvangen, bedankt!"
                }],
                
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };

        channel.send({embed: suggestieEmbed}).then(suggestieEmbed => {
            suggestieEmbed.react('✅');
            suggestieEmbed.react('❌');
        });

        message.delete();
        message.channel
        .send({embed: succesvolEmbed})
        .then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            })
            .catch((err) => {
            throw err;
            });
    }
}