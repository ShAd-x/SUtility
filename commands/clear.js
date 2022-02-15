const { Permissions } = require('discord.js')

module.exports = {
    run: async (client, message, args) => {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply("Vous n'avez pas les permissions !").catch(console.error);
        if(!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send("Je n'ai pas la permission de supprimer les messages 😢").catch(console.error);
        if(!args[0] || isNaN(args[0])) return message.reply("Vous devez spécifier un nombre de message à supprimer.").catch(console.error);  
        if(args[0] > 100) return message.reply("Houlà ! Doucement, ça fait beaucoup d'un coup là ! Descends un peu ce nombre. (Limite: 100)").catch(console.error);  
        message.channel.bulkDelete(args[0])
            .then(message.channel.send(`${args[0]}`+(args[0] > 1  ? ' messages ont bien été supprimés' : ' message a bien été supprimé')));
    },
    name: 'clear',
    aliases: 'delete',
    description: 'Commande de suppression de message'
}