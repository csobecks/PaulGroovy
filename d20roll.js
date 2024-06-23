export async function d20roll(interaction){
    let roll=Math.floor(Math.random()*20)+1;

    if(roll==1){
        return void interaction.followUp({content:"Nat 1, you fucking suck!"});
    }else if(roll==20){
        return void interaction.followUp({content:"Nat 20! fuck yeah!"});
    }else{
        return void interaction.followUp({content: `You rolled a ${roll}`});
    }
}