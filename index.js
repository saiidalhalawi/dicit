var quotes = [
  ['War is delightful to those who have had no experience of it.', 'Erasmus'],
  ['The sinews of war are not gold, but good soldiers.', 'Niccoló Machiavelli'],
  ['He who wishes to be obeyed must know how to command.', 'Niccoló Machiavelli'],
  ['Strike up the drum and march courageously.', 'Christopher Marlowe'],
  ['Better to reign in hell than serve in heav\'n.', 'John Milton'],
  ['He doth nothing but talk of his horse.', 'Shakespeare, The Merchant of Venice, i, 2'],
  ['All the world\'s a stage, And all the men and women merely players.', 'Shakespeare, As You Like It, ii, 7'],
  ['I will kill thee a hundred and fifty ways.', 'Shakespeare, As You Like It, v, 1'],
  ['Here I and sorrows sit; Here is my throne, bid kings come bow to it.', 'Shakespeare, King John, iii, 1'],
  ['Go, bid the soldiers shoot.', 'Shakespeare, Hamlet, iv, 2'],
  ['A man can die but once.', 'Shakespeare, King Henry IV, Part:II. iii, 2'],
  ['Give me another horse: bind up my wounds.', 'Shakespeare, King Richard III, v, 3'],
  ['A horse! A horse! My kingdom for a horse!', 'Shakespeare, King Richard III, v, 4'],
  ['To whom God will, there be the victory.', 'Shakespeare, King Henry the Sixth, Part:III, ii, 5'],
  ['Inflict not on an enemy every injury in your power, for he may afterwards become your friend.', 'Moslih Eddin Saadi'],
  ['Wars begin when you will, but they do not end when you please.', 'Niccoló Machiavelli'],
  ['He who defends everything defends nothing.', 'Fredrick II, Holy Roman Emperor'],
  ['I am the King of Rome, and above grammar.', 'Sigismund, Holy Roman Emperor'],
  ['When you see contention amongst your enemies, go and sit at ease with your friends; but when you see them of one mind, string your bow, and place stones upon the ramparts.', 'Moslih Eddin Saadi'],
  ['I have loved justice and hated inequity; and therefore I die in exile.', 'Pope Gregory VII, Tuscan Pope'],
  ['It is easy to be brave behind a castle wall.', 'Welsh proverb'],
  ['To carry on war, three things are necessary: money, money, and yet more money.', 'Gian Jacopo Trivulzio'],
  ['Once more unto the breach, dear friends, once more!', 'Shakespeare, King Henry V, iii, 1'],
  ['I speak Spanish to God, Italian to women, French to men, and German to my horse.', 'King Charles V King of France'],
  ['Had I been present at the creation, I would have given some useful hints for the better ordering of the universe.', 'Alfonso X, the Wise, King of Castile'],
  ['There is now no hope of escaping. If you fight you will conquer, but if you flee you will fall.', 'Fulcher of Chartres'],
  ['O world, thy slippery turns!', 'William Shakespeare, Coriolanus, IV.iv.12'],
  ['Often it does seem such a pity that Noah and his party did not miss the boat.', 'Mark Twain'],
  ['O Liberty! What crimes are committed in thy name!', 'Madame Roland'],
  ['Put your shoulder to the wheel.', 'Aesop'],
  ['Oh farmers, pray that your summers be wet and your winters clear.', 'Virgil'],
  ['Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?', 'Romans 9:21'],
  ['Do not throw the arrow which will return against you.', 'Kurdistan proverb'],
  ['It is from their foes, not their friends, that cities learn the lesson of building high walls.', 'Aristophanes'],
  ['If you speak the truth, have a foot in the stirrup.', 'Turkish proverb'],
  ['For all who draw the sword will die by the sword.', 'Matthew 26:52'],
  ['To achieve great things, two things are needed; a plan, and not quite enough time.', 'Lenard Bernstein'],
  ['Man is essentially ignorant, and becomes learned through acquiring knowledge.', 'Ibn Khaldun'],
  ['Art for art\'s sake is an empty phrase. Art for the sake of truth, art for the sake of the good and the beautiful, that is the faith I am searching for.', 'George Sand'],
  ['To administer is to govern: to govern is to reign. That is the essence of the problem.', 'Honore Gabriel Riqueti, comte de Mirabeau']
]

document.addEventListener("DOMContentLoaded", function(event) {

  var quote = quotes[Math.floor(Math.random()*quotes.length)];

  document.getElementById('quote-line').innerHTML = quote[0];
  document.getElementById('quote-author').innerHTML = quote[1];
});
