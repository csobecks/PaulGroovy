export async function paulpager(interaction, client){
    const user = await client.users.fetch('98474303804149760',false).then((user)=> {
        for(var i; i<5;i++){
            user.send("beep");
        }
    });
    await interaction.deferReply();
    return void interaction.reply({content: "beeping paul"});
}