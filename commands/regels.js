module.exports = {
    name: 'regelbericht',
    description: 'regelbericht',
    execute(message, args, cmd, client, discord){
        const regelEmbed = {
            color: 15158332,
            thumbnail: {
                url: 'https://media.discordapp.net/attachments/657346394113441812/840242059088494652/EB.png',
            },
            description: '***Om de community zo gezellig mogelijk te houden voor iedereen, zijn er een aantal basisregels opgesteld waar iedereen zich aan moet houden. Deze staan hieronder vermeld.***',
            fields: [{
                name: "- Adverteren",
                value: "Het is niet toegestaan je eigen of andermans community, online platvorm, zoals je Youtube - of Twitch kanaal of iets anders te promoten. Ook al vallen privé berichten buiten ons bereik, is het ook niet toegestaan leden van deze community te benaderen met zelfpromotie in privé berichten."
                },
                {
                    name: "- Spammen",
                    value: "Het spammen van berichten in de tekstkanalen is niet toegestaan."
                },
                {
                    name: "- Taalgebruik",
                    value: "Bij het sturen van je bericht of het praten in een voicekanaal dien je op je taalgebruik te letten. Het schelden, racistische en discriminerende opmerkingen maken is dus verboden."
                },
                {
                    name: "- NSFW",
                    value: "NSFW houdend materiaal plaatsen in een van de tekstkanalen is niet toegestaan. Je plaatst als voorbeeld dus geen seksueel getinte plaatsjes of video's."
                },
                {
                    name: "- Moderators",
                        value: "Moderators zijn mensen speciaal gekozen die een oogje in het zeil houden op zowel het Twitch account als deze Discord community. Daarom is het ook belangrijk dat je naar de moderators luisterd, en de keuzes van moderators respecteerd."
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
        message.channel.send({embed: regelEmbed});
        } else {
            message.channel.send({embed: errorEmbed});
        }
        message.delete();
    }
}