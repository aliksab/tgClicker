import { Telegraf, Markup } from 'telegraf'
import { config } from 'dotenv';

const bot = new Telegraf(TG_TOKEN)

bot.command('start', (ctx) => {
    ctx.reply(
        'Welcome! Press to start', Markup.inlineKeyboard([
            Markup.button.webApp('START', `${process.env.FIREBASE_WEB_APP_URL}?ref=${ctx.payload}`)
        ])
    )
})

bot.launch()
