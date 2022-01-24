const mineflayer = require('mineflayer')

bot=mineflayer.createBot({
	host: 'jogar.survivalcomplecxo2.ga',
	port: '22875',
	username: 'SrStevon3',
	version: '1.13'
})

bot.on('spawn',function() {
    bot.chat('/login 123123')
});
