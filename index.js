/*
The MIT License (MIT)

Copyright (c) 2016 Saiid Al-Halawi
*/


var quotes = [
  ['War is delightful to those who have had no experience of it.', 'Desiderius Erasmus'],
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
  ['To carry on war, three things are necessary: money, money, and yet more money.', 'Gian Giacomo Trivulzio'],
  ['Once more unto the breach, dear friends, once more!', 'Shakespeare, King Henry V, iii, 1'],
  ['I speak Spanish to God, Italian to women, French to men, and German to my horse.', 'Charles V, Holy Roman Emperor'],
  ['Had I been present at the creation, I would have given some useful hints for the better ordering of the universe.', 'Alfonso X, the Wise, King of Castile'],
  ['There is now no hope of escaping. If you fight you will conquer, but if you flee you will fall.', 'Fulcher of Chartres'],
  ['O world, thy slippery turns!', 'William Shakespeare, Coriolanus, IV.iv.12'],
  ['Often it does seem such a pity that Noah and his party did not miss the boat.', 'Mark Twain'],
  ['O Liberty! What crimes are committed in thy name!', 'Madame Roland'],
  ['Put your shoulder to the wheel.', 'Aesop'],
  ['Oh farmers, pray that your summers be wet and your winters clear.', 'Virgil'],
  ['Trust not too much to appearances.', 'Virgil'],
  ['I fear the Greeks, even when they bring gifts.', 'Virgil'],
  ['Mind moves matter.', 'Vergil']
  ['Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?', 'Romans 9:21'],
  ['Do not throw the arrow which will return against you.', 'Kurdistan proverb'],
  ['It is from their foes, not their friends, that cities learn the lesson of building high walls.', 'Aristophanes'],
  ['If you speak the truth, have a foot in the stirrup.', 'Turkish proverb'],
  ['A god from the machine.', 'Menander'],
  ['For all who draw the sword will die by the sword.', 'Matthew 26:52'],
  ['A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.', 'Antoine de Saint-Exupéry'],
  ['To achieve great things, two things are needed; a plan, and not quite enough time.', 'Lenard Bernstein'],
  ['Man is essentially ignorant, and becomes learned through acquiring knowledge.', 'Ibn Khaldun'],
  ['Art for art\'s sake is an empty phrase. Art for the sake of truth, art for the sake of the good and the beautiful, that is the faith I am searching for.', 'George Sand'],
  ['To administer is to govern: to govern is to reign. That is the essence of the problem.', 'Honore Gabriel Riqueti, comte de Mirabeau'],
  ['Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.', 'Francis Bacon'],
  ['Liberty, not the daughter of order, but the MOTHER of order.', 'Pierre-Joseph Proudhon'],
  ['To name a thing is easy: the difficulty is to discern it before its appearance.', 'Pierre-Joseph Proudhon'],
  ['I have gained this by philosophy: that I do without being commanded what others do only from fear of the law.', 'Aristotle'],
  ['I cannot live without books.', 'Thomas Jefferson'],
  ['The whole is more than the sum of its parts.', 'Aristotle'],
  ['You may delay, but time will not. ', 'Benjamin Franklin'],
  ['They who have put out the people\'s eyes reproach them of their blindness.', 'John Milton'],
  ['Any society that would give up a little liberty to gain a little security will deserve neither and lose both.', 'Benjamin Franklin'],
  ['Like Odysseus, the President looked wiser when he was seated.', 'John Maynard Keynes'],
  ['Compound interest is the most powerful force in the universe.', 'Albert Einstein'],
  ['It has been said that democracy is the worst form of government except all the others that have been tried.', 'Winston Churchill'],
  ['Logic: The art of thinking and reasoning in strict accordance with the limitations and incapacities of the human misunderstanding.', 'Ambroce Bierce'],
  ['History is an account, mostly false, of events, mostly unimportant, which are brought about by rulers, mostly knaves, and soldiers, mostly fools.', 'Ambroce Bierce'],
  ['I must study politics and war that my sons may have liberty to study mathematics and philosophy.', 'John Adams, The 2nd President of United States'],
  ['For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return.', 'Leonardo da Vinci'],
  ['The only thing worse than being talked about is not being talked about.', 'Oscar Wild'],
  ['A good teacher is like a candle – it consumes itself to light the way for others.', 'Arabic proverb'],
  ['Any sufficiently advanced technology is indistinguishable from magic.', 'Arthur C. Clarke'],
  ['Be happy for this moment. This moment is your life.', 'Omar Khayyam'],
  ['When a man appreciates only eating and sleeping, what excellence has he over the reptiles?', 'Saadi Shirazi'],
  ['Those who do not move, do not notice their chains.', 'Rosa Luxenburg'],
  ['Freedom is always the freedom of dissenters.', 'Rosa Luxenburg'],
  ['Liberty cannot be established without morality, nor morality without faith.', 'Alexis de Tocqueville'],
  ['It\'s time for the human race to enter the solar system.', 'Dan Quayle'],
  ['The future will be better tomorrow.', 'Dan Quayle'],
  ['If we don\'t succeed we run the risk of failure.', 'Dan Quayle'],
  ['Just because you do not take an interest in politics...does not mean that politics won\'t take an interest in you.', 'Pericles'],
  ['Better die standing than live kneeling.', 'Pericles'],
  ['The marketplace is democratic.', 'Pericles'],
  ['Quintilius Varus, give me back my legions!', 'Augustus Caesar'],
  ['Hypocrisy is the homage vice pays to virtue.', 'Francois de La Rochefoucauld'],
  ['No man is clever enough to know all the evil he does', 'Francois de La Rochefoucauld'],
  ['We promise according to our hopes and perform according to our fears.', 'Francois de La Rochefoucauld'],
  ['Competitions are for horses, not artists', 'Bela Bartok'],
  ['Lesser artists borrow, great artists steal.', 'Igor Stravinsky'],
  ['Life well spent is long.', 'Giovanni da Palestrina'],
  ['Do there exist many worlds, or is there but a single world? This is one of the most noble and exalted questions in the study of Nature.', 'Albertus Magnus'],
  ['The world is divided into men who have wit and no religion and men who have religion and no wit.', 'Ibn Sina'],
  ['We live for books.', 'Umberto Eco'],
  ['When men stop believing in God, it isn\'t that they then believe in nothing: they believe in everything.', 'Umberto Eco'],
  ['All poets write bad poetry. Bad poets publish them, good poets burn them.', 'Umberto Eco'],
  ['What you plant here, you will reap there.', 'Ibn Arabi'],
  ['Man is the child of customs, not the child of his ancestors.', 'Ibn Khaldun'],
  ['Lottery: A tax on people who are bad at math.', 'Ambrose Bierce'],
  ['A good marriage would be between a blind wife and a deaf husband.', 'Michel de Montaigne'],
  ['Hell is empty and all the Devils are here', 'William Shakespeare, The Tempest, i, 2'],
  ['I must say I find television very educational. The minute somebody turns it on, I go to the library and read a good book.', 'Groucho Marx'],
  ['Society often forgives the criminal; it never forgives the dreamer.', 'Oscar Wild'],
  ['My advice to you is get married: if you find a good wife you’ll be happy; if not, you’ll become a philosopher.', 'Socrates'],
  ['Abandon all hope, you who enter!', 'Dante Alighieri'],
  ['There is no greater pain than to remember a happy time when one is in misery.', 'Dante Alighieri'],
  ['Furthermore, I think Carthage must be destroyed.', 'Cato the Elder'],
  ['I prefer to do right and get no thanks than to do wrong and receive no punishment.', 'Cato the Elder'],
  ['Truth is often eclipsed but never extinguished.', 'Livy'],
  ['Envy, like flames, soars upwards.', 'Livy'],
  ['Woe to the conquered.', 'Livy'],
  ['All religions are equally sublime to the ignorant, useful to the politician, and ridiculous to the philosopher.', 'Livy'],
  ['Acquaintance lessens fame.', 'Claudius, Roman Emperor'],
  ['Say not always what you know, but always know what you say.', 'Claudius, Roman Emperor'],
  ['Death is less bitter punishment than death\'s delay.', 'Ovid'],
  ['If you wish to be a writer; write!', 'Epictetus'],
  ['There is no wealth like knowledge, no poverty like ignorance.', 'Ali bin Abi Talib'],
  ['A conqueror is always a lover of peace.', 'Carl von Crausewitz'],
  ['The surest way of achieving your goal is through the single-minded pursuit of simple actions.', 'Helmuth von Moltke the Elder'],
  ['Eternal peace is a dream - and not even a beautiful one.', 'Helmuth von Moltke the Elder'],
  ['God gave humans language so they could conceal their thoughts from one another.', 'Charles Maurice de Talleyrand-Perigord'],
  ['There is one person that is wiser than anybody, and that is everybody.', 'Charles Maurice de Talleyrand-Perigords'],
  ['I do not belong to any faction, I will fight them all.', 'Louis Antoine de Saint-just'],
  ['Soldiers, when I give the command to fire, fire straight at my heart. Wait for the order. It will be my last to you. I protest against my condemnation. I have fought a hundred battles for France, and not one against her ... Soldiers, fire!', 'Michel Ney'],
  ['Science never solves a problem without creating ten more.', 'George Bernard Shaw'],
  ['Work is the curse of the drinking classes.', 'Oscar Wilde'],
  ['There is only one thing in life worse than being talked about, and that is not being talked about.', 'Oscar Wilde'],
  ['The old believe everything, the middle-aged suspect everything, the young know everything.', 'Oscar Wilde'],
  ['We cannot tear out a single page of our life, but we can throw the whole book in the fire.', 'George Sand'],
  ['Historians are like deaf people who go on answering questions that no one has asked them.', 'Leo Tolstoy'],
  ['Without him nothing was done, and through him everything was done, and the king trusted him more than any other.', 'Jean Froissart'],
  ['Don\'t forget your great guns, which are the most respectable arguments of the rights of kings.', 'Frederick the Great'],
  ['A crown is merely a hat that lets the rain in.', 'Frederick the Great'],
  ['The souls of emperors and cobblers are cast in the same mold.', 'Michel de Montaigne'],
  ['The most certain sign of wisdom is cheerfulness.', 'Michel de Montaigne'],
  ['I am myself the matter of my book.', 'Michel de Montaigne'],
  ['When I quote others I do so in order to express my own ideas more clearly.', 'Michel de Montaigne'],
  ['Once a word has been allowed to escape, it cannot be recalled.', 'Horace'],
  ['O imitators, you slavish herd!', 'Horace'],
  ['Potter is jealous of potter, and craftsman of craftsman; and the poor have a grudge against the poor, and the poet against the poet.', 'Hesiod'],
  ['The art is eternal, their shapes are changing.', 'Rudolf Steiner'],
  ['Beauty is boring because it is predictable.', 'Umberto Eco'],
  ['One can be a great poet and be politically stupid.', 'Umberto Eco'],
  ['Of all the noises known to man, opera is the most expensive.', 'Moriere'],
  ['The more often a stupidity is repeated, the more it gets the appearance of wisdom.', 'Voltaire'],
  ['Don\'t think money does everything or you are going to end up doing everything for money.', 'Voltaire'],
  ['What is history? The lie that everyone agrees on...', 'Voltaire'],
  ['The more I read, the more I acquire, the more certain I am that I know nothing.', 'Voltaire'],
  ['To hold a pen is to be at war.', 'Voltaire'],
  ['The face of tyranny Is always mild at first.', 'Jean Racine'],
  ['All is asleep: the army, the wind, and Neptune.', 'Jean Racine'],
  ['All things are Nothing to Me.', 'Max Stilner'],
  ['The state calls its own violence law, but that of the individual, crime.', 'Max Stilner'],
  ['Each individual is a species unto him/herself.', 'Rudolf Steiner'],
  ['The more I see of men, the better I like my dog.', 'Frederick the Great'],
  ['Diplomacy without military might is like music without instruments.', 'Frederick the Great'],
  ['The manner of giving is worth more than the gift.', 'Pierre Corneille'],
  ['Oh rage! Oh despair! Oh age, my enemy!', 'Pierre Corneille'],
  ['There are now no Pyrenees.', 'Louis XIV, the King of France'],
  ['Clemency is also a revolutionary measure.', 'Camille Desmoulins'],
  ['The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.', 'Bertrand Russell'],
  ['Every great idea starts out as a blasphemy.', 'Bertrand Russell'],
  ['Men are born ignorant, not stupid. They are made stupid by education.', 'Bertrand Russell'],
  ['When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.', 'Noam Chomsky'],
  ['When opportunity knocks, some people are in the backyard looking for four-leaf clovers.', 'Polish proverb'],
  ['I never forget a face—but in your case, I’ll be glad to make an exception.', 'Groucho Marx'],
  ['The farther backward you can look, the farther forward you are likely to see.', 'Winston Churchill'],
  ['The inherent vice of capitalism is the unequal sharing of blessings. The inherent virtue of socialism is the equal sharing of miseries.', 'Winston Churchill'],
  ['The short words are the best, and the old words best of all.', 'Winston Churchill'],
  ['Even wisdom has to yield to self-interest.', 'Pindar'],
  ['If history is deprived of the Truth, we are left with nothing but an idle, unprofitable tale.', 'Polybius'],
  ['The luck of having talent is not enough; one must also have a talent for luck.', 'Hector Berlioz'],
  ['Richard Wagner, a musician who wrote music which is better than it sounds.', 'Richard Wagner'],
  ['Life gives nothing to man without labor.', 'Horace'],
  ['Knowledge without education is but armed injustice', 'Horace'],
  ['The world is divided into men who have wit and no religion and men who have religion and no wit.', 'Ibn Rushd'],
  ['Teach thy tongue to say \'I do not know\', and thou shalt progress.', 'Maimonides'],
  ['I will destroy my enemies by converting them to friends.', 'Maimonides'],
  ['The goal of good health is to enable a person to acquire wisdom.', 'Maimonides'],
  ['If there is a God, whence proceed so many evils? If there is no God, whence cometh any good?', 'Boethius'],
  ['With man, most of his misfortunes are occasioned by man.', 'Pliny the Elder'],
  ['When a building is about to fall down, all the mice desert it.', 'Pliny the Elder'],
  ['Many dishes bring many diseases.', 'Pliny the Elder'],
  ['A mind needs books as a sword needs a whetstone, if it is to keep its edge.', 'George R.R. Martin'],
  ['A reader lives a thousand lives before he dies.', 'George R.R. Martin']
  ['People often claim to hunger for truth, but seldom like the taste when it\'s served up.', 'George R.R. Martin, "A Song of Ice and Fire"'],
  ['He who destroys a good book kills reason itself.', 'John Milton'],
  ['Give me the liberty to know, to utter, and to argue freely according to conscience, above all liberties.', 'John Milton'],
  ['Art is a hammer to beat the world, not a mirror to reflect it.', 'Nikolai Nekrasov'],
  ['Certainly in each social period, youth must be made to venerate the dominant absurdities.', 'Charles Fourier'],
  ['Softness to traitors will destroy us all.', 'Maximilien Robespierre'],
  ['When a Banker jumps out of a window, jump after him - that\'s where the money is.', 'Maximilien Robespierre'],
  ['In everything, there is a share of everything.', 'Anaxagoras'],
  ['The sun provides the moon with its brightness.', 'Anaxagoras'],
  ['Nothing is more useful than silence.', 'Menander'],
  ['There are many wild beasts on land and in the sea, but the beastliest of all is woman.', 'Menander'],
  ['Whom the gods love dies young.', 'Whom the gods love dies young.', 'Menander'],
  ['The workman still is greater than his work.', 'Medander'],
  ['A man that runs away may fight again.', 'Medander'],
  ['Quickly, bring me a beaker of wine, so that I may wet my mind and say something clever.', 'Aristophanes'],
  ['Ignorance can be cured, but stupidity is forever.', 'Aristophanes'],
  ['By words the mind is winged.', 'Aristophanes'],
  ['Comedy is allied to justice.', 'Aristophanes'],
  ['The tyrant is a child of pride.', 'Sophocles'],
  ['What you cannot enforce, do not command.', 'Sophocles'],
  ['It will not always be summer: build barns.', 'Hesiod'],
  ['It is change; all yields its place and goes.', 'Euripides'],
  ['Judge a tree from its fruit, not from its leaves.', 'Euripides'],
  ['Question everything. Learn something. Answer nothing.', 'Euripides'],
  ['Ares hates those who hesitate.', 'Euripides'],
  ['Everyone asks if a man is rich, no one if he is good.', 'Euripides'],
  ['This is slavery, not to speak one\'s thought.', 'Euripides'],
  ['Cleverness is not wisdom.', 'Euripides'],
  ['You will stir up the hornets.', 'Plautus'],
  ['Not by age but by capacity is wisdom acquired.', 'Plautus'],
  ['There is no book so bad that it is not profitable in some part.', 'Pliny the Younger'],
  ['The physician can bury his mistakes, but the architect can only advise his client to plant vines.', 'Frank Lloyd Wright'],
  ['Thou shalt not muzzle the ox when he treadeth out the corn.', 'Deuteronomy 25:4'],
  ['Those who cannot remember the past are condemned to repeat it.', 'George Santayana'],
  ['Computers are like Old Testament gods: lots of rules and no mercy.', 'Joseph Campbell'],
  ['No man ever wetted clay and then left it, as if there would be bricks by chance and fortune.', 'Plutarch'],
  ['I don\'t believe in astrology; I\'m a Sagittarius and we\'re skeptical.', 'Arthur C. Clarke'],
  ['You and I come by road or rail, but economists travel on infrastructure.', 'Margaret Thatcher'],
  ['The single biggest problem in communication is the illusion that it has taken place.', 'George Bernard Shaw'],
  ['He who can, does. He who cannot, teaches.', 'George Bernard Shaw']
  ['Write your Sad times in Sand, Write your Good times in Stone.', 'George Bernard Shaw'],
  ['Tradition will accustom people to any atrocity', 'George Bernard Shaw']
  ['Woe to me, my mother, that you have borne me As a man of strife and a man of contention to all the land! I have not lent, nor have men lent money to me, Yet everyone curses me.', 'Jeremiah 15:10'],
  ['War does not determine who is right - only who is left.', 'Bertrand Russell'],
  ['People never lie so much as after a hunt, during a war or before an election.', 'Otto von Bismarck'],
  ['Woe to the defeated!', 'Brennus'],
  ['Oh, Durendal, how beautiful you are, how clear, how bright! How you shine and flash against the sun!', 'from "the Song of Roland"'],
  ['I will not wear a crown of gold where my Savior wore one of thorns', 'Godfrey of Bouillon'],
  ['Death twitches my ear. Live, he says, I am coming.', 'Virgil'],
  ['Fortune sides with him who dares.', 'Virgil'],
  ['To have died once is enough.', 'Virgil'],
  ['Any old woman can love God better than a doctor of theology can.', 'Bonaventure'],
  ['The three most important virtues are humility, humility, and humility.', 'Bernard of Clairvaux'],
  ['Give light, and the darkness will disappear of itself.', 'Desiderius Erasmus'],
  ['The main hope of a nation lies in the proper education of its youth', 'Desiderius Erasmus'],
  ['Your library is your paradise.', 'Desiderius Erasmus'],
  ['The cat would eat fish but would not get her feet wet.', 'Geoffrey Chaucer'],
  ['Antichrist is Mammon\'s son.', 'John Milton'],
  ['Biochemically, love is just like eating large amounts of chocolate.', 'John Milton'],
  ['Falsehood flies, and the truth comes limping after it.', 'Jonathan Swift'],
  ['Every man desires to live long, but no man wishes to be old.','Jonathan Swift'],
  ['Promises and pie-crust are made to be broken.', 'Jonathan Swift'],
  ['It is the talent of human nature to run from one extreme to another.', 'Jonathan Swift'],
  ['If you want good laws, burn those you have and make new ones.', 'Voltaire'],
  ['Governments need to have both shepherds and butchers.', 'Voltaire'],
  ['It is dangerous to be right when the government is wrong.', 'Voltaire'],
  ['Originality is nothing but judicious plagiarism.', 'Voltaire'],
  ['There are no sects in geometry.', 'Voltaire'],
  ['What is history? The lie that everyone agrees on...', 'Voltaire'],
  ['Democracy is just a filler for textbooks! Do you actually believe that public opinion influences the government?', 'Voltaire'],
  ['Language is a very difficult thing to put into words.', 'Voltaire'],
  ['There is another world, but it is in this one.', 'William Butler Yeats'],
  ['Twelve highlanders and a bagpipe make a rebellion.', 'Scotish Proverb'],
  ['Fools look to tomorrow; wise men use tonight.', 'Scotish Proverb'],
  ['Never marry for money. You can borrow it cheaper.', 'Scotish Proverb'],
  ['Width of life is more important than length of life.', 'Ibn Sina'],
  ['The person who predicts the future is lying, even when he is right.', 'Arabic Proverb'],
  ['Keep away from trouble and sing to it.', 'Syrian Proverb'],
  ['Curiosity is the first step to hell.', 'Polish Proverb'],
  ['Where devil cannot go, he will send a woman.', 'Polish Proverb'],
  ['It is easiest to learn from another man\'s damage.', 'Venetian Proverb'],
  ['Crooked logs make straight fires.', 'Italian Proverb'],
  ['Writing is easy. All you have to do is cross out the wrong words.', 'Mark Twain'],
  ['Man is the Only Animal that blushes. Or needs to.', 'Mark Twain'],
  ['I don\'t like to commit myself about Heaven and Hell, you see, I have friends in both places', 'Mark Twain'],
  ['Cauliflower is nothing but cabbage with a college education.', 'Mark Twain']
  ['Remember that people break down, too, not just machinery.', 'Gregory Benford'],
  ['If you wish for peace, prepare for war.', 'Motto of the British Royal Navy'],
  ['Untutored courage is useless in the face of educated bullets.', 'George Patton'],
  ['It is not wisdom but authority that makes a law.', 'Thomas Hobbes'],
  ['When they are preparing for war, those who rule by force speak most copiously about peace until they have completed the mobilization process.', 'Stefan Zweig'],
  ['Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.', 'Marcus Aurelius'],
  ['Let the boy win his spurs.', 'Edward III of England'],
  ['One of the greatest problems of our time is that many are schooled but few are educated.', 'Thomas More'],
  ['Two evils, greed and faction are the destruction of all justice.', 'Thomas More'],
  ['Hops are a wicked and pernicious weed.', 'Henry VIII of England'],
  ['Sameness is the mother of disgust, variety the cure.', 'Petrarch'],
  ['Journalists are like dogs, when ever anything moves they begin to bark.', 'Arthur Schopenhauer'],
  ['To buy books would be a good thing if we also could buy the time to read them.', 'Arthur Schopenhauer'],
  ['No theory, no ready-made system, no book that has ever been written will save the world. I cleave to no system. I am a true seeker.', 'Mikhail Bakunin'],
  ['People go to church for the same reasons they go to a tavern: to stupefy themselves, to forget their misery, to imagine themselves, for a few minutes anyway, free and happy.', 'Mikhail Bakunin'],
  ['The urge to destroy is a creative urge.', 'Mikhail Bakunin'],
  ['If there is a State, then there is domination, and in turn, there is slavery.', 'Mikhail Bakunin'],
  ['Competition is the law of the jungle, but cooperation is the law of civilization', 'Peter Kropotkin'],
  ['Where there is authority, there is no freedom.', 'Peter Kropotkin'],
  ['Prisons are universities of crime, maintained by the state.', 'Peter Kropotkin'],
  ['Revolutions, we must remember, are always made by minorities.', 'Peter Kropotkin'],
  ['As an anarchist, I cannot reconcile myself to any government.', 'Peter Kropotkin'],
  ['Idlers do not make history: they suffer it!', 'Peter Kropotkin'],
  ['We anarchists do not want to emancipate the people; we want the people to emancipate themselves.', 'Errico Malatesta'],
  ['The artist belongs to his work, not the work to the artist.', 'Novalis'],
  ['The artist is nothing without the gift, but the gift is nothing without work.', 'Emile Zola'],
  ['Pictures must not be too picturesque.', 'Ralph Waldo Emerson'],
  ['The Holy Roman Empire is neither Holy, nor Roman, nor an Empire.', 'Voltaire'],
  ['One catches more flies with a spoonful of honey than with twenty casks of vinegar.', 'Henry IV of France'],
  ['When a king creates an office, Providence creates immediately a fool to buy it.', 'Jean-Baptiste Colbert'],
  ['There is nothing left to me but honor, and my life, which is saved.', 'Francis I of France'],
  ['All is lost! Monks, Monks, Monks! So, now all is gone - Empire, Body, and Soul!.', 'Henry VIII of England'],
  ['Deception is the knowledge of kings.', 'Cardinal Richelieu'],
  ['Never write a letter and never destroy one.', 'Cardinal Richelieu'],
  ['A single word has sometimes lost or won an empire.', 'Cardinal Richelieu']
  ['Judge a man by his questions rather than his answers.', 'Voltaire'],
  ['I find medicine is the best of all trades because whether you do any good or not you still. Get your money.', 'Moliere'],
  ['When you doubt your power, you give power to your doubt.', 'Honore de Balzac'],
  ['Laws are spider webs through which the big flies pass and the little ones get caught.', 'Honore de Balzac'],
  ['The best way to make your dreams come true is to wake up.', 'Paul Valery'],
  ['A poem is never finished, only abandoned.', 'Paul Valery'],
  ['We hope vaguely but dread precisely.', 'Paul Valery'],
  ['Serious people have few ideas. People with ideas are never serious.', 'Paul Valery'],
  ['Books have the same enemies as people: fire, humidity, animals, weather, and their own content.', 'Paul Valery'],
  ['A good name is better than fine perfume, and the day of death better than the day of birth.', 'Ecclesiastes 7:1'],
  ['It is better to live alone in the desert than with a crabby, complaining wife.', 'Proverbs 21:19'],
  [' I recommend the enjoyment of life, for there is nothing better on earth for a person to do except to eat, drink, and enjoy life.', 'Ecclesiastes 8:15'],
  ['Stone is heavy and sand a burden, but a fool\'s provocation is heavier than both.', 'Proverbs 27:3'],
  ['Death and Destruction are never satisfied, and neither are human eyes.', 'Proverbs 27:20'],
  ['The best physician is also a philosopher.', 'Galen'],
  ['Wine is the nurse of old age.', 'Galen'],
  ['The greatest medicine of all is teaching people how not to need it', 'Hippocrates'],
  ['The physician treats, but nature heals.', 'Hippocrates'],
  ['If you are not your own doctor, you are a fool.', 'Hippocrates'],
  ['Make a habit of two things: to help; or at least to do no harm.', 'Hippocrates'],
  ['By desiring little, a poor man makes himself rich.', 'Democritos'],
  ['Each man believes only his experience.', 'Empedocles'],
  ['Iris from sea brings wind or mighty rain.', 'Empedocles'],
  ['To be independent of public opinion is the first formal condition of achieving anything great.', 'Georg Wilhelm Friedrich Hegel'],
  ['We learn from history that we do not learn from history.', 'Georg Wilhelm Friedrich Hegel'],
  ['The owl of Minerva spreads its wings only with the falling of the dusk.', 'Georg Wilhelm Friedrich Hegel'],
  ['Education is the art of making man ethical.', 'Georg Wilhelm Friedrich Hegel'],
  ['They don\'t know it, but they are doing it.', 'Karl Marx'],
  ['Be careful to trust a person who does not like wine.', 'Karl Marx'],
  ['The production of too many useful things results in too many useless people.', 'Karl Marx'],
  ['For the bureaucrat, the world is a mere object to be manipulated by him.', 'Karl Marx'],
  ['History repeats itself, first as tragedy, second as farce.', 'Karl Marx'],
  ['The fate of our times is characterized by rationalization and intellectualization and, above all, by the disenchantment of the world.', 'Max Weber'],
  ['Either one lives for politics or one lives off politics.', 'Max Weber'],
  ['Schools serve the same social functions as prisons and mental institutions- to define, classify, control, and regulate people.', 'Michel Foucault'],
  ['Where there is power, there is resistance.', 'Michel Foucault'],
  ['Our society is not one of spectacle but of surveillance.', 'Michel Foucault'],
  ['I\'m no prophet. My job is making windows where there were once walls.', 'Michel Foucault'],
  ['One makes war to win, not because it\'s just.', 'Michel Foucault'],
  ['It is meaningless to speak in the name of - or against - Reason, Truth, or Knowledge.', 'Michel Foucault'],
  ['A good shepherd shears his flock, not flays them.', 'Suetonius'],
  ['Whilst we deliberate how to begin a thing, it grows too late to begin it.', 'Quintilian'],
  ['If you see the teeth of the lion, do not think that the lion is smiling at you.', 'Al-Mutanabbi'],
  ['It is better to be on hand with ten men than absent with ten thousand.', 'Timur'],
  ['What really counts are good endings, not flawed beginnings.', 'Ibn Taymiyyah'],
  ['If I don\'t enjoy myself now, when shall I?', 'Omar Khayyam'],
  ['He who has one enemy shall meet him everywhere.', 'Omar Khayyam'],
  ['You know how little while we have to stay, And, once departed, may return no more.', 'Omar Khayyam'],
  ['A drink is shorter than a tale.', 'Omar Khayyam'],
  ['Laugh because that is the purest sound.', 'Hafez'],
  ['There is A madman inside of you. Who is always running for office', 'Hafez'],
  ['Poetry reveals that there is no empty space.', 'Hafez'],
  ['Diversity in counsel, unity in command.', 'Cyrus the Great'],
  ['The Athenians govern the Greeks; I govern the Athenians; you, my wife, govern me; your son governs you.', 'Themistocles'],
  ['Strike, if you will, but listen.', 'Themistocles'],
  ['The end of wisdom is consultation and deliberation.', 'Demosthenes'],
  ['Memory is the mother of all wisdom.', 'Aeschylus'],
  ['In war, truth is the first casualty.', 'Aeschylus'],
  ['My will is mine...I shall not make it soft for you.', 'Aeschylus'],
  ['Bronze is the mirror of the form, wine of the mind.', 'Aeschylus'],
  ['The world began without man, and it will complete itself without him.', 'Claude Levi-Strauss'],
  ['People know what they do; frequently they know why they do what they do; but what they don\'t know is what what they do does.', 'Michel Foucault'],
  ['If I only did what I can do, I wouldn\t do anything', 'Jacques Derrida'],
  ['Everything is arranged so that it be this way, this is what is called culture.', 'Jacques Derrida'],
  ['O death! We thank you for the light that you will shed upon our ignorance.', 'Jacques-Benigne Bossuet'],
  ['All is asleep: the army, the wind, and Neptune.', 'Jean Raine'],
  ['He who will travel far spares his steed.', 'Jean Raine'],
  ['Too much virtue can be criminal.', 'Jean Raine'],
  ['He who laughs on Friday will weep on Sunday.', 'Jean Raine'],
  ['The direct use of force is such a poor solution to any problem, it is generally employed only by small children and large nations.', 'David Friedman'],
  ['The users space is lived - not represented or conceived.', 'Henry Lefebvre'],
  ['I am interested in language because it wounds or seduces me.', 'Roland Barthes'],
  ['...language is never innocent.', 'Roland Barthes'],
  ['To make someone wait: the constant prerogative of all power.', 'Roland Barthes'],
  ['Literature is the question minus the answer.', 'Roland Barthes'],
  ['To philosophize with open eyes is to philosophize in the dark. Only the blind can look straight at the sun.', 'Louis Althusser'],
  ['If someone asks, ‘But what in the end is a philosopher?’ I would say ‘A philosopher is a human being who fights in theory.', 'Louis Althusser'],
  ['Bilingualism is for me the fundamental problem of linguistics.', 'Roman Jakobson'],
  ['The most difficult step in the study of language is the first step.', 'Leonard Bloomfield'],
  ['There is no fundamental difference in the ways of thinking of primitive and civilized man. A close connection between race and personality has never been established.', 'Franz Boas'],
  ['We do not condemn it because it is a crime, but it is a crime because we condemn it.', 'Emile Durkheim'],
  ['When morals are sufficient, law is unnecessary; when morals are insufficient, law is unenforceable.', 'Emile Durkheim'],,
  ['When man discovered the mirror, he began to lose his soul.', 'Emile Durkheim'],
  ['It is science, and not religion, which has taught men that things are complex and difficult to understand.', 'Emile Durkheim'],
  ['The risk climate of modernity is thus unsettling for everyone: no one escapes.', 'Anthony Giddens']
  ['The body is thus not simply an \'entity\', but is experienced as a practical mode of coping with external situations and events.', 'Anthony Giddens'],
  ['Oh, this age! How tasteless and ill bred it is!', 'Catullus'],
  ['There is nothing more foolish than a foolish laugh.', 'Catullus'],
  ['The worst thing about getting old is evil men cease to fear you', 'Seneca the Younger'],
  ['We become wiser by adversity; prosperity destroys our appreciation of the right.', 'Seneca the Younger'],
  ['Politicians are not born; they are excreted.', 'Marcus Tullius Cicero'],
  ['If you have a garden and a library, you have everything you need.', 'Marcus Tullius Cicero'],
  ['Any man can make mistakes, but only an idiot persists in his error.', 'Marcus Tullius Cicero'],
  ['Follow your path, and let the people talk.', 'Dante Alighieri'],
  ['The nourishment of body is food, while the nourishment of the soul is feeding others.', 'Ali ibn Abi Ṭalib'],
  ['Meetings are indispensable when you don\'t want to do anything.', 'John Kenneth Galbraith'],
  ['All successful revolutions are the kicking in of a rotten door.', 'John Kenneth Galbraith'],
  ['The only function of economic forecasting is to make astrology look respectable.', 'John Kenneth Galbraith'],
  ['Economics is extremely useful as a form of employment for economists.', 'John Kenneth Galbraith'],
  ['Liberty becomes a question of morals more than of politics.', 'Lord John Acton'],
  ['Although it is not true that all conservatives are stupid people, it is true that most stupid people are conservative.', 'John Stuart Mill'],
  ['One person with a belief is equal to ninety-nine who have only interests.', 'John Stuart Mill'],
  ['Men do not desire to be rich, but to be richer than other men.', 'John Stuart Mill'],
  ['He who does anything because it is the custom, makes no choice.', 'John Stuart Mill'],
  ['I, personally, am unable to accept any revealed religion, Christian or not.', 'Bronislaw Malinowski'],
  ['Language is an anonymous, collective and unconscious art; the result of the creativity of thousands of generations.', 'Edward Sapir'],
  ['A standard international language should not only be simple, regular, and logical, but also rich and creative.', 'Edward Sapir'],
  ['A ship without Marines is like a garment without buttons.', 'Admiral David D. Porter, USN '],
  ['Mankind must put an end to war, or war will put an end to mankind.', 'John F. Kennedy'],
  ['Never forget that your weapon was made by the lowest bidder.', 'Unknown'],
  ['Whether you like it or not, history is on our side. We will bury you!', 'Nikita Khrushchev'],
  ['Nothing is easier than self-deceit.', 'Demosthenes'],
  ['Of all our possessions, wisdom alone is imortal.', 'Isocrates'],
  ['Right is not unlimited, but is limited by the laws.', 'Aeschines'],
  ['No battle plan ever survives contact with the enemy.', 'Helmuth von Moltke the Elder'],
  ['Plans are worthless, but planning is everything.', 'Dwight D. Eisenhower'],
  ['I cannot trust a man to control others who cannot control himself.', 'Robert E. Lee'],
  ['The world needs leaders of vision instead of leaders on television.', 'Lech Walesa'],
  ['I\'m lazy. But it\'s the lazy people who invented the wheel and the bicycle because they didn\'t like walking or carrying things.', 'Lech Walesa'],
  ['I must tell you that the supply of words on the world market is plentiful, but the demand is falling.', 'Lech Walesa'],
  ['Historians are like deaf people who go on answering questions that no one has asked them.', 'Leo Tolstoy'],
  ['The causes of events are ever more interesting than the events themselves.', 'Cicero'],
  ['God cannot alter the past, though historians can.', 'Samuel Butler'],
  ['I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls.', 'George R.R. Martin, The oath of Night\'s Watch'],
  ['He who is virtuous is wise; and he who is wise is good; and he who is good is happy.', 'Boethius'],
  ['“Nothing is miserable unless you think it so.', 'Boethius'],
  ['At the heart of capitalism is creative destruction.', 'Joseph A. Schumpeter'],
  ['The ballot is stronger than bullets.','Joseph A. Schumpeter'],
  ['Politicians like to tell people what they want to hear - and what they want to hear is what won\'t happen.', 'Paul Samuelson']
]

document.addEventListener("DOMContentLoaded", function(event) {

  var availableCollection = JSON.parse(localStorage.getItem('quotes'));
  var remainingQuantity = availableCollection ? availableCollection.length : 0

  if (remainingQuantity > 0 || remainingQuantity != quotes.length) {
    availableCollection = quotes
  }

  var index = Math.floor(Math.random()*remainingQuantity)
  var quote = availableCollection[index];

  document.getElementById('quote-line').innerHTML = quote[0];
  document.getElementById('quote-author').innerHTML = quote[1];
  availableCollection.splice(index, 1);

  localStorage.setItem('quotes', JSON.stringify(availableCollection));
});
