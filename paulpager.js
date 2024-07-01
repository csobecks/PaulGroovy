export async function paulpager(interaction, client){
    for(var i; i<5;i++){
        client.users.send(98474303804149760,"beep");
    }
    return void interaction.reply({content: "beeping paul"});
}