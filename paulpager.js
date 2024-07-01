export async function paulpager(interaction){
    for(var i=0; i<5;i++){
        await interaction.client.users.send('98474303804149760','beep');
    }
    return await interaction.reply({content: "beeping paul"});
}