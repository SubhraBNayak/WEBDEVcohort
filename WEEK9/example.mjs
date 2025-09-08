import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({apiKey : "AIzaSyCzsawVLJ8a3qa0a052JSsWO5nohJ3loqQ"});

async function main(){
    const response = await ai.models.generateContent({
        model : "gemini-2.5-flash",
        contents : "Write a bed time story on Ice Age in 150-200 words.",
    });
    console.log(response.text);
}

main();
