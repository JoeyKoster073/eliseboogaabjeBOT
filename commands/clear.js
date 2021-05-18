module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args, client) {
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

    const emptyEmbed = {
        color: 15158332,
        fields: [{
            name: "Error met uirvoeren van de command.",
            value: "**Reden:** *Voer een getal in met de hoeveelheid berichten die je wilt verwijderen!*"
            }],
            
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };

    const nummerEmbed = {
        color: 15158332,
        fields: [{
            name: "Error met uirvoeren van de command.",
            value: "**Reden:** *Voer enkel een getal in!*"
            }],
            
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };

    const maxEmbed = {
        color: 15158332,
        fields: [{
            name: "Error met uirvoeren van de command.",
            value: "**Reden:** *Je kunt niet meer dan 100 berichten in een keer verwijderen!*"
            }],
            
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };

    const zeroEmbed = {
        color: 15158332,
        fields: [{
            name: "Error met uirvoeren van de command.",
            value: "**Reden:** *Je moet op zijn minst één bericht verwijderen!*"
            }],
            
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };

    const logEmbed = {
        color: 15158332,
        title: "Clear",
        fields: [{
            name: `${message.member.user.tag} voerde de clear command uit.`,
            value: `${args[0]} berichten verwijderd in **${message.channel.name}**`
            }],
            
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };

    if(message.member.roles.cache.has('637282843025997825')){
            if (!args[0]) return message.channel.send({embed: emptyEmbed});
    
            if(isNaN(args[0])) return message.channel.send({embed: nummerEmbed});
    
            if(args[0] > 100) return message.channel.send({embed: maxEmbed});
            
            if(args[0] < 1) return message.channel.send({embed: zeroEmbed});
    
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                const clearEmbed = {
                    color: 15158332,
                    fields: [{
                        name: "Clear!",
                        value: `Succesvol **${args[0]}** berichten verwijderd!`
                        }],
                        
                    footer: {
                            text: '© Eliseboogaabje',
                            icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                    },
                };
                message.channel.bulkDelete(messages)
                channel.send({embed: logEmbed})
                message.channel
                .send({embed: clearEmbed})
                .then((msg) => {
                setTimeout(() => msg.delete(), 5000);
                })
                .catch((err) => {
                throw err;
                });
        });
    } else if(message.member.roles.cache.has('678608648485863424')){
        if (!args[0]) return message.channel.send({embed: emptyEmbed});

        if(isNaN(args[0])) return message.channel.send({embed: nummerEmbed});

        if(args[0] > 100) return message.channel.send({embed: maxEmbed});
        
        if(args[0] < 1) return message.channel.send({embed: zeroEmbed});

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            const clearEmbed = {
                color: 15158332,
                fields: [{
                    name: "Clear!",
                    value: `Succesvol **${args[0]}** berichten verwijderd!`
                    }],
                    
                footer: {
                        text: '© Eliseboogaabje',
                        icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
                },
            };
            message.channel.bulkDelete(messages)
            channel.send({embed: logEmbed})
            message.channel
            .send({embed: clearEmbed})
            .then((msg) => {
            setTimeout(() => msg.delete(), 5000);
            })
            .catch((err) => {
            throw err;
            });
    });
    } else {
        message.channel.send({embed: errorEmbed});
        message.delete();
    }
 }
}   