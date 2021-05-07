module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
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
        const target = message.mentions.users.first();

        const unfindEmbed = {
            color: 15158332,
            fields: [{
                name: "Error met uirvoeren van de command.",
                value: "**Reden:** *De persoon is niet gevonden of kan niet gebanned worden!*"
                }],
                    
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };
        if(message.member.roles.cache.has('637282843025997825')){
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                const channel = message.guild.channels.cache.find(channel => channel.name === 'modlogs');
                memberTarget.ban();
                const banEmbed = {
                    color: 15158332,
                    fields: [{
                        name: "Gebanned",
                        value: `<@${memberTarget.user.id}> is gebanned!`
                        },
                        {
                        name: "Reden",
                        value: args.join(' ')
                        }],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                message.channel.send({embed: banEmbed});
            } else {
                message.channel.send({embed: unfindEmbed});
            }
        } else {
            message.channel.send({embed: errorEmbed})
        }
        message.delete();
    }
}