export async function violet(interaction){
    
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
    
    let vmessageChoice= Math.floor(Math.random()*vquote.length);
    let vmessage = vquote[vmessageChoice];
    let vpicChoice= Math.floor(Math.random()*vpics.length);
    let vpic= vpics[vpicChoice]
    return void interaction.followUp({files: [vpic], content: vmessage});
}