module.exports = {
    name: 'reactionroles',
    description: 'reactionroles',
    async execute(message, args, Discord, client){

        const channel = '763367482987511818';

        const role1 = message.guild.roles.cache.find(role => role.name === "🚙Rocket League");
        const role2 = message.guild.roles.cache.find(role => role.name === "🕵️Among Us");
        const role3 = message.guild.roles.cache.find(role => role.name === "⛳Golf With Your Friends");

        const emoji1 = '🏎️';
        const emoji2 = '🕵️';
        const emoji3 = '⛳';

        const reactionrolesEmbed = {
            color: 15158332,
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
            description: '**Welke games speel jij? Reageer met de emoji hieronder!**',
            fields: [{
                name: "🏎️ | Rocket League",
                value: "Speel jij Rocket League? Reageer dan met de emoji hieronder!"
                },
                {
                    name: "🕵️ | Among Us",
                    value: "Speel jij Among Us? Reageer dan met de emoji hieronder!"
                },
                {
                    name: "⛳ | Golf With Your Friends",
                    value: "Speel jij Golf With Your Friends? Reageer dan met de emoji hieronder!"
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
        let reaction = await message.channel.send({embed: reactionrolesEmbed})
        reaction.react(emoji1);
        reaction.react(emoji2);
        reaction.react(emoji3);

        } else {
            message.channel.send({embed: errorEmbed});
        }
        message.delete();

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
                }
                if (reaction.emoji.name === emoji3) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role3);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                }
                if (reaction.emoji.name === emoji3) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role3);
                }
            } else {
                return;
            }
        });
    }
}