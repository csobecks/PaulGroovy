export async function deployment(message) {
    if (message.author.bot || !message.guild) return;
    // if (!client.application?.owner) await client.application?.fetch();
    
    if (message.content.includes("!deploy")){ //&& message.author.id === client.application?.owner?.id) {
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
            },
            {
                name:"bitrate",
                description:"set the bitrate for the player",
                options: [
                    {
                        name: "bitrate",
                        description: "pick a bitrate",
                        type: 3,
                        required: true
                    }
                ]
            },
            {
                name:"eggorleg",
                description:"get an egg or a leg"
            },
            {
                name:"paulpager",
                description:"beep beep beep beep beep"
            },
            {
                name:"d20roll",
                description:"roll a d20"
            }
        ]);
        console.log("Deployed");
        await message.reply("Deployed!");
    }
}