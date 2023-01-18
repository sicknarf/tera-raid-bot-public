const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('abouttera')
		.setDescription('who made Tera Raid Bot?'),
	async execute(interaction) {
		await interaction.reply({content: "My name is Francis, you can find me as sicknarf in most places. I'm a developer looking for a job and would love to hear from you. Reach out to me at sicknarf.ttv@gmail.com! You can also find me on my website: \nhttp://francis.technology", ephemeral: true});
	},
};