const mineflayer = require('mineflayer')

bot3=mineflayer.createBot({
	host: 'jogar.survivalcomplecxo2.ga',
	port: '22875',
	username: 'SrStevon3',
	version: '1.13'
})

bot4=mineflayer.createBot({
	host: 'jogar.survivalcomplecxo2.ga',
	port: '22875',
	username: 'SrStevon4',
	version: '1.13'
})

bot3.on('spawn',function() {
    bot.chat('/login 123123')
});


bot4.on('spawn',function() {
    
});
