const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1960060453:AAFcWUcelUzNEXOMyfxeyvkNUilLvfheGYQ'

const bot = new TelegramBot(TOKEN, {polling: true})

const fs = require('fs')

// bu word faylimizning buffer sifatida saqlanib olinishi keyinchalik jo'natish un
const buffer = fs.readFileSync('./university_info.docx')
// bu word faylimizning buffer sifatida saqlanib olinishi keyinchalik jo'natish un
const buffers = fs.readFileSync('./kontrakt_info.docx')

bot.start((ctx, next) => {
    welcome(ctx)
})

function welcome(ctx) {
    const helloMessage = 'International European University'
    bot.telegram.sendMessage(ctx.chat.id, helloMessage,
        {
            reply_markup: {
                keyboard: [
                    [
                        { text: '👥 BIZ HAQIMIZDA 👥' }
                    ],
                    [
                        { text: '📕 Magistratura va bakalavr 📕' },
                        { text: '📱BIZNING IJTIMOIY TARMOQLAR📱' },
                        
                    ],
                    [
                        { text: '📞 CALL CENTER 📞' },
                        { text: '🏢 BIZNING MANZIL 🏢' },
                    ],
                    [
                        { text: '📱 Administrator 📱' },
                    ],

                ],
                realize_keyboard: true
            }
        }
    )
}

bot.hears('👥 BIZ HAQIMIZDA 👥', ctx => {
   
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffer, filename: './university_info.docx.' })

    ctx.reply('Bu erda biz haqimizda koproq malumotga ega bolishingiz mumkin🙂')

})



bot.hears('📕 Magistratura va bakalavr 📕', ctx => {
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffers, filename: './kontrakt_info.docx' })

    ctx.reply('Shartnoma narxini ushbu fayldan bilib olishingiz mumkin🙂')

})


bot.hears('📱BIZNING IJTIMOIY TARMOQLAR📱', ctx => {
    ctx.reply('📲  Websayt : Ieu.edu.ua/uz                                                                           📲 Telegram: https://t.me/xalqarouniversitet                                                                                                           📲  Instagram: https://www.instagram.com/meu_uz/')
   
})


bot.hears('📞 CALL CENTER 📞', ctx => {
    ctx.reply('Тел: +99890.006.44.42 | +99890.006.44.43')

})


bot.hears('🏢 BIZNING MANZIL 🏢', ctx => {
    ctx.reply('https://maps.app.goo.gl/w2FrNxaFt28ma7WW9')

})

bot.hears('📱 Administrator 📱', ctx => {
    ctx.reply('@Ieu_vakolatxonasi01')
    ctx.reply('Administratorga savollar: +998900064443')

})

bot.launch()