const { MessageEmbed } = require('discord.js')
const version = require('../config.json').version
const prefix = require('../config.json').prefix

module.exports = {
    run: async (client, message, args) => {
        message.delete().catch(console.error)
        const embed = new MessageEmbed()
            .setColor("#FF0000")
            .setTitle("🔧 Menu d'aide de SUtility")
            .setDescription(`**Prefix :** '${prefix}'
                \n**Commandes (aliase(s)) : **
                • help (aide)
                • clear (delete)`)
            .setFooter({ text: `${client.user.username} (V${version})`, iconURL: `${client.user.displayAvatarURL()}` })
            .setTimestamp()
        message.channel.send({ embeds: [embed]})
    },
    name: 'help',
    aliases: 'aide',
    description: "Commande pour afficher l'aide"
}