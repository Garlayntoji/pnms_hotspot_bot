const discord = require('discord.js');
const {pp} = require('../../profilepic.json')

module.exports = {
	name: 'info',
	description: 'Shows the bot\'s informations',
	execute(message, args) {
		async function info() {
					const infoEmbed = new discord.MessageEmbed()
			.setColor('#c75a00')

			.setTitle('informations page, click here for GitHub page')

			.setDescription('There is the informations page. Here you can find all the bot\'s specs, and it\'s GitHub page, and also a link to the bot\'s server (click on Garlayn Toji).')

			.setThumbnail(pp)

			.setAuthor('Garlayn Toji (click on me!)', 'https://cdn.discordapp.com/avatars/266216852785594379/76c550744bcef3f7caf665c90bb6d9cb.png', 'https://discord.gg/stSuDjS')

			.setURL('https://github.com/Garlayntoji/bradpitch.exe/')

			.addFields(
					{ name: 'Programming language', value: 'Node.js' },
					{name: 'Bot version', value: 'v1.0.0'},
					{ name: 'Hosting method', value: 'Raspberry Pi 3 Model B' },
					{ name: 'Speaking languages', value: 'English only, multi-lingual will come later.'},
					{ name: 'Development state:', value: 'Released'},

				)

			.setImage('https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg')

			.setTimestamp()

			.setFooter('Brad Pitch.exe', 'https://media.discordapp.net/attachments/489384737752875009/651385255525351425/thumbs.jpg');

				await message.channel.send(infoEmbed);

			console.log('Info command executed successfully.')
		};
		info().catch(err => {
			console.error('Error when executing the Info command.')
			console.error(err);
		});
	},
};
