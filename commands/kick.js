module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args, client){
        const channel = client.channels.cache.get('844262954920312863');
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
                value: "**Reden:** *De persoon is niet gevonden of kan niet gekicked worden!*"
                }],
                    
            footer: {
                    text: '© Eliseboogaabje',
                    icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
        };
        if(message.member.roles.cache.has('637282843025997825')){
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                const logEmbed = {
                    color: 15158332,
                    title: "Kick",
                    fields: [{
                        name: `${message.member.user.tag} voerde de kick command uit.`,
                        value: `<@${memberTarget.user.id}> is gekicked van de discord.`
                        },
                        {
                            name: `Reden:`,
                            value: args.join(' ')
                            }
                    ],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                const kickEmbed = {
                    color: 15158332,
                    fields: [{
                        name: "Gekicked",
                        value: `<@${memberTarget.user.id}> is gekicked!`
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
                message.channel.send({embed: kickEmbed});
                channel.send({embed: logEmbed});
            } else {
                message.channel.send({embed: unfindEmbed});
            }
        } else if(message.member.roles.cache.has('678608648485863424')){
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                const logEmbed = {
                    color: 15158332,
                    title: "Kick",
                    fields: [{
                        name: `${message.member.user.tag} voerde de kick command uit.`,
                        value: `<@${memberTarget.user.id}> is gekicked van de discord.`
                        },
                        {
                            name: `Reden:`,
                            value: args.join(' ')
                            }
                    ],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                const kickEmbed = {
                    color: 15158332,
                    fields: [{
                        name: "Gekicked",
                        value: `<@${memberTarget.user.id}> is gekicked!`
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
                message.channel.send({embed: kickEmbed});
                channel.send({embed: logEmbed});
            } else {
                message.channel.send({embed: unfindEmbed});
            }
        } else {
            message.channel.send({embed: errorEmbed})
        }
        message.delete();
    }
}