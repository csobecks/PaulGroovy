import { generateOauthTokens } from "discord-player-youtubei"

export async function getTokens(){
    const oauthTokens = generateOauthTokens();
    return oauthTokens;
}