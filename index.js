const mineflayer = require('mineflayer')


bot=mineflayer.createBot({
	host: 'redesky.com'
	port: '25565'
	username: 'SrStevon'
})

bot.on('spawn',function() {
    bot.chat('/login 81998993470')
});

