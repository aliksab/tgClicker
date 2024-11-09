import { Telegraf, Markup } from 'telegraf'
import { config } from 'dotenv';
config()
process.env.TG_TOKEN ? console.log('Variables loaded') : console.log('Error')

const bot = new Telegraf(process.env.TG_TOKEN)

bot.command('start', (ctx) => {
    ctx.reply(
        'Welcome! Press to start', Markup.inlineKeyboard([
            Markup.button.webApp('START', `${process.env.FIREBASE_WEB_APP_URL}?ref=${ctx.payload}`)
        ])
    )
})

bot.launch()
