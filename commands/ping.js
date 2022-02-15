const { MessageEmbed } = require('discord.js')
const version = require('../config.json').version

module.exports = {
    run: async (client, message, args) => {
        message.delete().catch(console.error)
        let waiting = await message.channel.send("Chargement de la latence").catch(console.error);     
        const embed = new MessageEmbed()
            .setTitle("Latence de SUtility", client.user.avatarURL)
            .setColor("RANDOM")
            .setDescription(`**🔧  SUtility **> ${waiting.createdTimestamp - message.createdTimestamp}ms`)
            .setFooter({ text: `${client.user.username} (V${version})`, iconURL: `${client.user.displayAvatarURL()}` })
            .setTimestamp()
        message.channel.send({ embeds: [embed]}).then(waiting.delete())
    },
    name: 'ping',
    aliases: 'latence',
    description: "Commande pour afficher la latence"
}