export async function paulpager(interaction, client){
    for(var i; i<5;i++){
        client.users.send('330529332525137931','beep');
    }
    return void interaction.reply({content: "beeping paul"});
}