const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args, client) {
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
            const target = message.mentions.users.first();
            if (target) {
    
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    
                let memberTarget = message.guild.members.cache.get(target.id);
                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    const logEmbed = {
                        color: 15158332,
                        title: "Mute",
                        fields: [{
                            name: `${message.member.user.tag} voerde de mute command uit.`,
                            value: `<@${memberTarget.user.id}> is gemute.`
                            }
                        ],
                            
                        footer: {
                                text: '© Eliseboogaabje',
                                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                        },
                    };
                    const muteEmbed = {
                        color: 15158332,
                        fields: [{
                            name: "Gemute",
                            value: `<@${memberTarget.user.id}> is gemute!`
                            }],
                            
                        footer: {
                                text: '© Eliseboogaabje',
                                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                        },
                    };
                    message.channel.send({embed: muteEmbed});
                    channel.send({embed: logEmbed});
                    message.delete();
                    return
                }
                memberTarget.roles.add(muteRole.id);
                const log2Embed = {
                    color: 15158332,
                    title: "Mute",
                    fields: [{
                        name: `${message.member.user.tag} voerde de mute command uit.`,
                        value: `<@${memberTarget.user.id}> is gemute voor ${ms(ms(args[1]))}.`
                        }
                    ],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                const tempmuteEmbed = {
                    color: 15158332,
                    fields: [{
                        name: "Gemute",
                        value: `<@${memberTarget.user.id}> is gemute voor ${ms(ms(args[1]))}!`
                        }],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                message.channel.send({embed: tempmuteEmbed});
                channel.send({embed: log2Embed});
    
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send({embed: unfindEmbed});
            }
        } else if(message.member.roles.cache.has('678608648485863424')){
            const target = message.mentions.users.first();
            if (target) {
    
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    
                let memberTarget = message.guild.members.cache.get(target.id);
                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    const logEmbed = {
                        color: 15158332,
                        title: "Mute",
                        fields: [{
                            name: `${message.member.user.tag} voerde de mute command uit.`,
                            value: `<@${memberTarget.user.id}> is gemute.`
                            }
                        ],
                            
                        footer: {
                                text: '© Eliseboogaabje',
                                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                        },
                    };
                    const muteEmbed = {
                        color: 15158332,
                        fields: [{
                            name: "Gemute",
                            value: `<@${memberTarget.user.id}> is gemute!`
                            }],
                            
                        footer: {
                                text: '© Eliseboogaabje',
                                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                        },
                    };
                    message.channel.send({embed: muteEmbed});
                    channel.send({embed: logEmbed});
                    message.delete();
                    return
                }
                memberTarget.roles.add(muteRole.id);
                const log2Embed = {
                    color: 15158332,
                    title: "Mute",
                    fields: [{
                        name: `${message.member.user.tag} voerde de mute command uit.`,
                        value: `<@${memberTarget.user.id}> is gemute voor ${ms(ms(args[1]))}.`
                        }
                    ],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                const tempmuteEmbed = {
                    color: 15158332,
                    fields: [{
                        name: "Gemute",
                        value: `<@${memberTarget.user.id}> is gemute voor ${ms(ms(args[1]))}!`
                        }],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                message.channel.send({embed: tempmuteEmbed});
                channel.send({embed: log2Embed});
    
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send({embed: unfindEmbed});
            }
        } else {
            message.channel.send({embed: errorEmbed});
        }
        message.delete();
    }
}