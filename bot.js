
const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.send("Marvel test sayti ishlayapti!");
});

const token = process.env.BOT_TOKEN;
const appUrl = process.env.APP_URL;

if (token) {
  const bot = new TelegramBot(token, { polling: true });

  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      "🦸 Marvel testiga xush kelibsiz!",
      {
        reply_markup: {
          keyboard: [[
            {
              text: "🚀 Testni boshlash",
              web_app: { url: appUrl }
            }
          ]],
          resize_keyboard: true
        }
      }
    );
  });

  bot.on("web_app_data", (msg) => {
    try {
      const result = JSON.parse(msg.web_app_data.data);

      bot.sendMessage(
        msg.chat.id,
        `🦸 Test yakuni!\nNatija: ${result.score}/${result.total}\nFoiz: ${result.percent}%`
      );
    } catch (error) {
      bot.sendMessage(msg.chat.id, "Natijani o‘qishda xatolik yuz berdi.");
    }
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Marvel test sayti ${PORT}-portda ishlayapti!`);
});
