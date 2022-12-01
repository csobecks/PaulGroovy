const { Client } = require("discord.js");
const { Player } = require("discord-player");
const playdl = require("play-dl");
const config = require("./config.json");
const COOKIE = 'VISITOR_INFO1_LIVE=Z__vCrcG6lE; _ga=GA1.2.1990068215.1657892905; LOGIN_INFO=AFmmF2swRQIhAKM97YCcGTegaO9BsxU3lVC5cWwIVLk615JRbAVWIVVlAiAPv3hruowhNtMcybiZ-bkeJ2Z07IV2YgGVS7lmkLseIQ:QUQ3MjNmemMtaV9ucnp6amxJcFF6RnBBcE5Lc3g0V3Q0cUJyVlJxY2h3d041UUtnRGk2NHBmdjJyWDFPanEwaVBmc3JhRnlRTzhTUU5wU3d5WFBOUUtOR2VxbG00bzlqb2FULTBJSTV5UFR2MWlnWW5lenpEcUNnQlM5bU5IU3pRdVVsQV9VT3J1RjFtMk9NWWVNSUpHS2pZUnBUdEtJVFJQV1dkSHhhVGNkMWtEX0RwUkkyNjhad0Y2cURTdUhsQXRjcEstNEhMUTBweHFCc0xYTXRRQmFqRzlxU0ZST0Fydw==; SID=QQi-cbMT5_kKEArKirWGUgUVzCVecFNPBvRjgV29T9tscDLKiCcG0wZy7PA4qnod2z55lA.; __Secure-1PSID=QQi-cbMT5_kKEArKirWGUgUVzCVecFNPBvRjgV29T9tscDLK9toDT2qIkech_bCm9Vdp9Q.; __Secure-3PSID=QQi-cbMT5_kKEArKirWGUgUVzCVecFNPBvRjgV29T9tscDLKBr9VqCkcRkPHAaAQy65fyw.; HSID=AGOAqah32iIQtR2mc; SSID=AkLVCthH9ZZnvcMsa; APISID=DMh8vTNqPlqCkkds/AE8tEW3YQ8y74FZ3l; SAPISID=3N7fFFJqQhySOq5X/AjhT8tXOaW69yRdO8; __Secure-1PAPISID=3N7fFFJqQhySOq5X/AjhT8tXOaW69yRdO8; __Secure-3PAPISID=3N7fFFJqQhySOq5X/AjhT8tXOaW69yRdO8; PREF=f6=40000080&tz=America.New_York&f7=100; YSC=T7Nqbpebcis; SIDCC=AIKkIs3EdoXF47mekq-lUPShLONX1NiTR-bwWle44cpCyptxjxIge-hBDLaHpHsG1oNtMO79wQ; __Secure-1PSIDCC=AIKkIs2yTuqULU3xWl2NPBLBL1lTZXyAXgbcMKvfvhrNzHjSc5yhEcVRIhZScx8LBWXnYhf8hg; __Secure-3PSIDCC=AIKkIs3-ARpb_REN3kEnxs8L1ab4Bfd4VsOuBOuyjkTRdThdpxrlbZDHxEM-SfWSNviUP7mLmQ';

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

const client = new Client({
    intents: [
        "Guilds",
        "GuildVoiceStates",
        "GuildMessages",
        "DirectMessages",
        "MessageContent"
    ]
});

let queue;

const player = new Player(client,
    {
    ytdlOptions: {
        requestOptions:{
            Headers:{
                cookie: COOKIE
            }
        }
    },
    ytdlDownloadOptions:{
        filter:"audioonly",
        quality: 'highestaudio',
        highWaterMark: 1 << 25
    }
});

client.on("ready", async (client) => {
    console.log("Bot is online!");
    client.user.setActivity({
        name: "Ram Ranch",
        type: 2
    });
});

client.on("error", console.error);
client.on("warn", console.warn);

player.on("error",(queue,error)=>{
    console.log(`[${queue.guild.name}]Error emitted from the queue: ${error.message}`);
    queue=player.getQueue(queue.guild);
    queue.metadata.channel.send("cannot complete song request");
    return 0;
})

// player.on("connectionCreate",async (queue,connection)=> {
//     queue = await player.createQueue(connection.
//         interaction.guild, {
//         metadata: { channel: interaction.channel}
//     });
// })

player.on("connectionError", (queue, error) => {
    console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
    // console.log(`Error emitted from the connection: ${error.name}`);
});

player.on("trackStart", (queue, track) => {
    queue.metadata.channel.send(`🎶 | Started playing: **${track.title}** in **${queue.connection.channel.name}**!`);
});

player.on("trackAdd", (queue, track) => {
    queue.metadata.channel.send(`🎶 | Track **${track.title}** queued!`);
});

player.on("botDisconnect", (queue) => {
    queue.metadata.channel.send("❌ | I was manually disconnected from the voice channel, clearing queue!");
});

player.on("channelEmpty", (queue) => {
    queue.metadata.channel.send("❌ | Nobody is in the voice channel, leaving...");
});

player.on("queueEnd", (queue) => {
    queue.metadata.channel.send("✅ | Queue finished!");
});


client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return;
    if (!client.application?.owner) await client.application?.fetch();
    
    if (message.content.includes("!deploy") && message.author.id === client.application?.owner?.id) {
        await message.guild.commands.set([
            {
                name: "play",
                description: "Plays a song",
                options: [
                    {
                        name: "query",
                        type: 3,
                        description: "The song you want to play",
                        required: true
                    }
                ]
            },
            {
                name: "skip",
                description: "Skip to the current song"
            },
            {
                name:"pause",
                description:"pause the player"
            },
            {
                name: "stop",
                description: "Stop the player"
            },
            {
                name:"resume",
                description:"Resume the player"
            },
            {
                name: "ethan",
                description: "Ethan quote"
            },
            {
                name: "violet",
                description: "Violet Pic"
            },
            {
                name:"help",
                description:"shows the help message"
            },
            {
                name:"queue",
                description:"shows the current queue"
            }
        ]);
        console.log("Deployed");
        await message.reply("Deployed!");
    }
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand() || !interaction.guildId) return;

    if (!interaction.member.voice.channel) {
        if (interaction.commandName === "ethan"){
            await interaction.deferReply();
            let messageChoice= Math.floor(Math.random()*messagePrompts.length);
            let message = messagePrompts[messageChoice];
            let picChoice= Math.floor(Math.random()*picops.length);
            let pic= picops[picChoice]
            return void interaction.followUp({ files: [pic], content: message  });
        }else if (interaction.commandName === "violet"){
            await interaction.deferReply();
            let vmessageChoice= Math.floor(Math.random()*vquote.length);
            let vmessage = vquote[vmessageChoice];
            let vpicChoice= Math.floor(Math.random()*vpics.length);
            let vpic= vpics[vpicChoice]
            
            return void interaction.followUp({ files: [vpic], content: vmessage  });
        }else if(interaction.commandName==="help"){
            await interaction.deferReply();
            message="This music bot has the following functions:\n/Play will try to play the song provided.\n/Pause - This will pause the player.\n/Resume - This will resume the player.\n/Skip - This will skip the current song.\n/Stop - This will stop the player.\n/Ethan - This will give you a special message and picture from Ethan!\n/Violet - This will give you a nice quote and picture of Violet!\n/Help - This message will print again.\n";
            return void interaction.followUp({content: message});
        }else{
            return void interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
        }
        
    }

    // if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) {
    //     return void interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
    // }

    if (interaction.commandName === "play") {
        await interaction.deferReply();

        const query = interaction.options.getString("query");
        let searchResult;
        try {
            searchResult = await player.search(query, {requestedBy: interaction.user});
        } catch(ex) {
            return interaction.followUp({content: `something happend womp ${ex.toString()}`})
        }
        
        if (!searchResult || !searchResult.tracks.length)
            return interaction.followUp({ content: "No results were found!" });

        
        if(!queue){
            queue = await player.createQueue(interaction.guild, {
                metadata: { channel: interaction.channel},
                async onBeforeCreateStream(track, source, _queue) {
                    // only trap youtube source
                    if (source === "youtube") {
                        // track here would be youtube track
                        return (await playdl.stream(track.url, { discordPlayerCompatibility : true })).stream;
                        // we must return readable stream or void (returning void means telling discord-player to look for default extractor)
                    }
                }
            });
        }
        else{
            queue=player.getQueue(interaction.guildId)
        }

        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            return await interaction.followUp({ content: "Could not join your voice channel, try again" });
        }

        await interaction.followUp({content: `⏱ | Loading your track...`});
        // console.log({searchResult});
        // console.log(searchResult.tracks[0].url);

        queue.addTrack(searchResult.tracks[0]);

        if (!queue.playing) await queue.play();
    
    } else if (interaction.commandName === "skip") {
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return void interaction.followUp({ content: "❌ | No music is being played!" });
        const currentTrack = queue.current;
        const success = queue.skip();
        return void interaction.followUp({
            content: success ? `✅ | Skipped **${currentTrack}**!` : "❌ | Something went wrong!"
        });
    } else if (interaction.commandName === "stop") {
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return void interaction.followUp({ content: "❌ | No music is being played!" });
        queue.destroy();
        return void interaction.followUp({ content: "🛑 | Stopped the player!" });
    } else if (interaction.commandName==="pause") {
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return void interaction.followUp({ content: "❌ | No music is being played!" });
        queue.setPaused(1);
        return void interaction.followUp({content: "pausing"});
    } else if(interaction.commandName==="resume") {
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        queue.setPaused(0);
        return void interaction.followUp({content: "resuming"});
    }else if (interaction.commandName==="queue"){
        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        if(!queue) return void interaction.followUp({content: "queue is empty"});
        console.log(queue.tracks.forEach.toString());
        return void interaction.followUp({content: queue.tracks.toString()});
    }else if (interaction.commandName === "ethan"){
        await interaction.deferReply();
        let messageChoice= Math.floor(Math.random()*messagePrompts.length);
        let message = messagePrompts[messageChoice];
        let picChoice= Math.floor(Math.random()*picops.length);
        let pic= picops[picChoice]
        return void interaction.followUp({ files: [pic], content: message  });
    }else if (interaction.commandName === "violet"){
        await interaction.deferReply();
        let vmessageChoice= Math.floor(Math.random()*vquote.length);
        let vmessage = vquote[vmessageChoice];
        let vpicChoice= Math.floor(Math.random()*vpics.length);
        let vpic= vpics[vpicChoice]
        
        return void interaction.followUp({ files: [vpic], content: vmessage  });
    }else if(interaction.commandName==="help"){
        await interaction.deferReply();
        message="This music bot has the following functions:\n/Play will try to play the song provided.\n/Pause - This will pause the player.\n/Resume - This will resume the player.\n/Skip - This will skip the current song.\n/Stop - This will stop the player.\n/Ethan - This will give you a special message and picture from Ethan!\n/Violet - This will give you a nice quote and picture of Violet!\n/Help - This message will print again.\n";
        return void interaction.followUp({content: message});
    }else {
        interaction.reply({
            content: "Unknown command!",
            ephemeral: true
        });
    }
});

client.login(config.token);