const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong! (this was left here intentionally for troubleshooting. \nI\'m new to coding so forgive the bad practice)');
	},
};