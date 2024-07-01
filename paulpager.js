export async function paulpager(interaction, client){
    for(var i=0; i<5;i++){
        await client.users.send('98474303804149760','beep');
    }
    return interaction.reply({content: "beeping paul"});
}