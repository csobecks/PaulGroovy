// const { Client } = require("discord.js");
const { useMainPlayer } = require("discord-player");
// const playdl = require("play-dl");
const google = require("googlethis");
const config = require("./config.json");


const picops = [
    "./ethan/ethan.png",
    "./ethan/ethan1.png",
    "./ethan/ethan2.png",
    "./ethan/ethan3.png",
    "./ethan/ethan4.png",
    "./ethan/ethan5.png",
    "./ethan/ethan6.png",
    "./ethan/ethan7.png",
    "./ethan/ethan8.png",
    "./ethan/ethan9.png",
]

const messagePrompts=[
    'Enough Sucky\nTime for Fucky',
    'Why would god give you hands if they weren`t meant for beating women?',
    'My brain is so fractalized',
    'My fingers smell like crayons',
    'I have the mental power of two 50 cal machine guns',
    'I feel like I can do it, how hard can it be? (no fap)',
    'Your fingers will be Lara croft in my bum',
    'Sleep is a subjective concept',
    'Iʼm open 24/7 Waffle House ass. Iʼll give you the syrup you need. You want jemima, Iʼll give jemima. Iʼm cumming jemima everywhere',
    'I canʼt focus Iʼm running veggie tales in my head.',
    'If I get robbed at gun point Iʼm gonna be really upset',
    'Get off Emily. Itʼs time for sucky not fucky.',
    'I wanna watch waterworld extended edition',
    'I ate her afterbirth',
    'What would we do without fire? What would we use to burn down abortion clinics?',
    'If a cop tries to arrest us Iʼll reach for the gun. I wonʼt let him take my lacroix.',
    'Kpop makes me rapey',
    'Just ate a piece of sushi off his plate with his mouth and snorted',
    'I have 6 title 9 cases against me. Me and my dog keep fucking.',
    'My dog is tr$nsgender.',
    'I just came to college to get PUSSY',
    'Iʼd fuck anything bro. Iʼd fuck a fence post at this point.',
    'They wanna fuck my rolls',
    'What is chick-fil-a?',
    'Just cuz I like fruit doesn`t mean I`m drunk you asshole',
    'I`m gonna tickle your little ballsack',
    'Do you think my grandma had sex with a velociraptor?',
    'I`m the epitome of strength wisdom intelligence etc',
    'I want casey to buy me Taco Bell then fuck me in the ass',
    'What if the characters of shrek were in this movie (pirates of the Caribbean)',
    'Give me the succ grandma',
    'Whatʼs your favorite world of Warcraft expansion? (To a room full of girls)',
    'Iʼm prob$bly big enough to rape people now',
    'Senior year is gonna be such a meme. Iʼm gonna walk into class tomorrow shit my pants and walk out.',
    'Girls canʼt burp thatʼs why god gave them queefing',
    'Iʼm gonna kill someone at the party',
    'Wait tomorrowʼs 9/11? YES! I hate Americans!',
    'Itʼs not rape grandma!',
    'Iʼll hammer your clit',
    'I donʼt want nicotine because Iʼve been holding in a poop',
    'Iʼm gonna make this kid cum. Iʼm making a gay kid cum',
    'Idk what time I went to bed last night.',
    'Was it before or after I raped you?',
    'If you donʼt bring her back and fuck her so I can listen and jerk off Iʼll be so pissed',
    'Wait I watched this video of a cop getting shot itʼs dope as fuck',
    'You guys wanna join my protest? Weʼre gonna protest that coconuts classify as mammals',
    '(watching himself) This makes me wanna cum dude',
    'Do you think there are people who jerk off to 9/11 footage?',
    'Can you even strangle a dog',
    'How come thereʼs no news about isis anymore? Did trump get rid of isis',
    'Sheʼs gonna peg me',
    'They get into your head like little cockroaches. Just kidding Iʼm not sexist',
    'Paul the only reason you like the rain is because you live in your room in an anime universe',
    'Would you rather hear the thumping of my music or the thumping of my cock',
    'I can feel the nicotine and the caffeine coursing through my veins',
    'If we watch a movie today Iʼm gonna cream',
    'Time to push like my grandmas push up bra',
    'Iʼm rich. I have a lot of money and girls wanna FUCK ME',
    'You look like goomba from Mario but Iʼll still fuck',
    'Iʼm gonna projectile scrum all over your pussy',
    'I swear to god Iʼm gonna rape every fucking dog I see',
    'Hey if you ever need pods let me buy them. If I buy six packs of pods from k-mart I get a free juul',
    'Your juul hits like a motherfucker. When they hunted the juul pods on the Sahara desert yours was the alpha. Stop juul poaching',
    'I honestly just signed up for this class for the anime',
    'My leg hair will keep me warm',
    'You did drive here you lying succubus (to Sierra)',
    'Its always small business Saturday when you fuck a hooker.',
    'Wow! Thanks for the hilarious meme! I really appreciate it!'
  ]

const vpics=["./violet/moon.JPG"]

const vquote=[
    "I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight.",
    "People involved in a revolution don’t become part of the system; they destroy the system… The Negro revolution is no revolution because it condemns the system and then asks the system it has condemned to accept them",
    "A new world order is in the making, and it is up to us to prepare ourselves that we may take our rightful place in it.",
    "Speaking like this doesn’t mean that we’re anti-white, but it does mean we’re anti-exploitation, we’re anti-degradation, we’re anti-oppression.",
    "A man who stands for nothing will fall for anything.",
    "I don't advocate violence; but if a man steps on my toes, I'll step on his",
    "If you turn the other cheek, you can be enslaved for 1,000 years.",
    "Concerning nonviolence, it is criminal to teach a man not to defend himself when he is the constant victim of brutal attacks.",
    "Be peaceful, be courteous, obey the law, respect everyone; but if someone puts his hand on you, send him to the cemetery.",
    "You can't have capitalism without racism.",
    "I see America through the eyes of the victim. I don't see any American dream--I see an American nightmare.",
    "If you have a dog, I must have a dog. If you have a rifle, I must have a rifle. If you have a club, I must have a club. This is equality.",
    "Sometimes you have to pick the gun up to put the Gun down.",
    "It's just like when you've got some coffee that's too black, which means it's too strong. What do you do? You integrate it with cream, you make it weak. But if you pour too much cream in it, you won't even know you ever had coffee. It used to be hot, it becomes cool. It used to be strong, it becomes weak. It used to wake you up, now it puts you to sleep.",
    "I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight.",
    "It’s hard for anyone intelligent to be nonviolent.",
    "Nobody can give you freedom. Nobody can give you equality or justice or anything. If you're a man, you take it.",
    "The Negro revolution is controlled by foxy white liberals, by the Government itself. But the Black Revolution is controlled only by God.",
    "I'm a man who believes that I died 20 years ago. And I live like a man who is dead already. I have no fear whatsoever of anybody or anything.",
    "You can't separate peace from freedom because no one can be at peace unless he has his freedom.",
    "No man has believed perfectly until he wishes for his brother what he wishes for himself.",
    "If you are born in America with a black skin, you're in prison",
    "I believe in human beings, and that all human beings should be respected as such, regardless of their color"
]

export async function execute(interaction) {
    const player = useMainPlayer();
    const channel =- interaction.member.voice.channel;
    if(!channel) return interaction.reply('You are not connected to a voice channel!');
    const query = interaction.options.getString('query',true);

    await interaction.deferReply();

    try{
        const{ track } = await player.play(channel,query,{
            nodeOptions:{
                metadata:interaction
            }
        });

        return interaction.followUp(`**${track.title}** enqueued!`);
    } catch(e){
        return interaction.followUp(`Something went wrong: ${e}`);
    }
}


