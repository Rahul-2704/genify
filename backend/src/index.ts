require("dotenv/config");
import OpenAI from "openai";

const client = new OpenAI();

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages:[
        {
            role:"user",content:"What is 2+2"
        }
    ]
  });

  console.log(response.choices[0].message.content)
}

main();

