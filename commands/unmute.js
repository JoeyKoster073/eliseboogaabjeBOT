module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
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
                value: "**Reden:** *De persoon is niet gevonden!*"
                }],
                
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };
        if(message.member.roles.cache.has('637282843025997825')){
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    
                let memberTarget= message.guild.members.cache.get(target.id);
    
                memberTarget.roles.remove(muteRole.id);
                const unmuteEmbed = {
                    color: 15158332,
                    fields: [{
                        name: "Unmute",
                        value: `<@${memberTarget.user.id}> is unmuted!`
                        }],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                message.channel.send({embed: unmuteEmbed});
            } else{
                message.channel.send({embed: unfindEmbed});
            }
        } else {
            message.channel.send({embed: errorEmbed});
        }
        message.delete();
    }
}