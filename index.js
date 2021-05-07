const botConfig = require("./config.json");
const { badwords } = require("./data.json")
const Discord = require('discord.js');

const config = require('./config.json');
const client =  new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () =>{
    console.log('De bot is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '👀Kijker');

    const welkomEmbed = {
        color: 15158332,
        thumbnail: {
            url: `${guildMember.user.displayAvatarURL()}`,
        },
        title: `Hey ${guildMember.user.tag}, welkom op de Discord van **Eliseboogaabje!** 🎉`,
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('678332361418735673').send({embed: welkomEmbed}) // channelid
});


client.on('guildMemberRemove', (member) => {
    const channel = client.channels.cache.get('682349478451478579'); // channelid
    if(member.guild.id != '634106625673789450') return; // serverid
    const houdoeEmbed = {
        color: 15158332,
        thumbnail: {
            url: `${member.user.displayAvatarURL()}`,
        },
        title: `${member.user.tag}, houdoe en bedankt olee olee! 👋`,
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };
    channel.send({embed: houdoeEmbed});
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'suggestie'){
        client.commands.get('suggestie').execute(message, args);
    } else if(command === 'suggestiebericht'){
        client.commands.get('suggestiebericht').execute(message, args);
    } else if(command === 'reactionroles'){
        client.commands.get('reactionroles').execute(message, args, Discord, client);
    } else if(command === 'regelbericht'){
        client.commands.get('regelbericht').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'leden'){
        client.commands.get('leden').execute(message, args, client);
    } else if(command === 'socials'){
        client.commands.get('socials').execute(message, args);
    }
});

client.on("message", async message => {
    const errorEmbed = {
        color: 15158332,
        fields: [{
            name: "Error met sturen van je bericht.",
            value: "**Reden:** *Wat je zojuist probeerde te sturen is niet toegestaan!*"
            }],
            
        footer: {
                text: '© Eliseboogaabje',
                icon_url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
        },
    };
    if (message.author.bot) return;
    if(message.member.roles.cache.has('637282843025997825')) {
        return; 
    } else if(message.member.roles.cache.has('678608648485863424')) {
        return; 
    } else {
        let confirm = false;
        var i;
        for(i = 0;i < badwords.length; i++) {
        
        if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
            confirm = true;
      
        }
        if(confirm) {
            message.delete()
            return message.channel.send({embed: errorEmbed})
        }  
    }
})

client.login(process.env.token);