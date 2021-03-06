module.id = 'fortune';

exports.execute = function(msg, callback) {
	msgs = [];
	for(i in fortunes) {
		eval(i+' = fortunes.'+i+'[Math.floor(Math.random()*fortunes.'+i+'.length)];');
		msgs.push((i.slice(0,1).toUpperCase() + i.slice(1)) + ': ' + (eval(i)));
	}
	
	callback(msgs.join(' | '));
};

exports.help = "Tells you your daily fortune, Japanese style. Very random.";

var fortunes = {
	luck: [
		"Daikyou (Catastrophe)",
		"Kyou (Misfortune)",
		"Hankyou (Semi-misfortune)",
		"Shoukyou (Small misfortune)",
		"Suekichi (Uncertain)",
		"Shoukichi (A little luck)",
		"Chuukichi (Fair Luck)",
		"Kichi (Good Luck)",
		"Daikichi (Great Luck)"
	],
	wishes: [
		"Not anytime soon.",
		"Someone's in the way.",
		"Something unexpected in your way.",
		"Something unexpected may happen.",
		"Be patient.",
		"Don't spread your luck too thin.",
		"Don't force it.",
		"Change your mind, do your best.",
		"Fulfilled, but late.",
		"Don't go to extremes.",
		"Focus on the beginning.",
		"Take your time.",
		"Be patient.",
		"Someone will help.",
		"Others will help.",
		"Leave everything to others.",
		"Just as you expected.",
		"Seems impossible, but true.",
		"It will be spontaneous."
	],
	visitors: [
		"Something's wrong.",
		"Useless to wait.",
		"They won't come, nor write.",
		"No good news.",
		"They won't come.",
		"Probably won't come.",
		"They'll say they can't come.",
		"You'll hear from them.",
		"They'll come, but later.",
		"They'll come without notice.",
		"Late, but sure to come.",
		"Likely to come.",
		"They'll come with a friend.",
		"A little late.",
		"They will come.",
		"They'll come soon.",
		"They'll come very soon."
	],
	businesses: [
		"The market will collapse.",
		"Not so good now.",
		"Prices changing.",
		"Don't buy now.",
		"No gain nor loss.",
		"There's little profit.",
		"Don't buy so much.",
		"Be patient.",
		"Take your time.",
		"It's OK, but stay cool.",
		"Prices are stable.",
		"Someone will help.",
		"If promising, you'll profit.",
		"High time to buy.",
		"It's time to sell.",
		"You'll profit later.",
		"You'll never lose.",
		"You'll win."
	],
	studies: [
		"Study very hard.",
		"Work hard or fail.",
		"Devote yourself.",
		"Work hard to succeed.",
		"Be diligent.",
		"Work hard & pass the exam.",
		"Study on.",
		"Have confidence.",
		"Don't hesitate.",
		"Keep studying.",
		"Study with confidence.",
		"No problem.",
		"You can make it."
	],
	love: [
		"You'll be betrayed.",
		"It won't work.",
		"They're unfaithful.",
		"Your hearts won't connect.",
		"Don't lose yourself.",
		"Parents won't like them.",
		"It's platonic only.",
		"Watch your rival.",
		"Not now, be patient.",
		"Make a fresh start.",
		"Ask your parents.",
		"All's well.",
		"See their heart.",
		"Don't hesitate.",
		"Study your lover.",
		"Be faithful.",
		"You'll soon be happy.",
		"Believe in love.",
		"They're a good person.",
		"You'll be happy.",
		"The one you should follow.",
		"It was meant to be."
	],
	travel: [
		"Something bad will happen.",
		"Put it off.",
		"Better cancel it.",
		"Not now.",
		"No profit.",
		"You'll feel uncomfortable.",
		"Another time.",
		"Be careful.",
		"Be alert for thieves.",
		"Don't go so far.",
		"Start on a rainy day.",
		"Take care of yourself.",
		"Don't overindulge.",
		"No problem.",
		"All right.",
		"You can travel now.",
		"You'll be satisfied.",
		"Take it easy.",
		"Any direction will do.",
		"Date to go.",
		"Take your time and enjoy.",
		"It will do you good.",
		"It will be fun.",
		"It will pay well." 
	]
};