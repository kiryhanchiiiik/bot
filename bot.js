require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Hello, ${msg.from.first_name}! Write a message and i will reapeat this!`
  );
});

bot.on("message", (msg) => {
  if (!msg.text.startsWith("/")) {
    bot.sendMessage(msg.chat.id, msg.text);
  }
});

console.log("Bot is running...");
