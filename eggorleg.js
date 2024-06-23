import {google} from "googlethis"

export async function eggorleg(interaction) {
    const choice=2*Math.round(Math.random());

    if(choice>1){
        query="egg";
    }
    else{
        query="leg";
    }
    const images = await google.image(query,{safe:false});
    const choice2=(images.length)*Math.round(Math.random());
    
    //console.log(choice2);
    
    if(typeof images[choice2]==="undefined"){
        return interaction.followUp({content:`${query}`});
    }
    else{
        return interaction.followUp({content:`${query}\n${images[choice2].url}`});
    }
}