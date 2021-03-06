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
                        { text: '๐ฅ BIZ HAQIMIZDA ๐ฅ' }
                    ],
                    [
                        { text: '๐ Magistratura va bakalavr ๐' },
                        { text: '๐ฑBIZNING IJTIMOIY TARMOQLAR๐ฑ' },
                        
                    ],
                    [
                        { text: '๐ CALL CENTER ๐' },
                        { text: '๐ข BIZNING MANZIL ๐ข' },
                    ],
                    [
                        { text: '๐ฑ Administrator ๐ฑ' },
                    ],

                ],
                realize_keyboard: true
            }
        }
    )
}

bot.hears('๐ฅ BIZ HAQIMIZDA ๐ฅ', ctx => {
   
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffer, filename: './university_info.docx.' })

    ctx.reply('Bu erda biz haqimizda koproq malumotga ega bolishingiz mumkin๐')

})



bot.hears('๐ Magistratura va bakalavr ๐', ctx => {
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffers, filename: './kontrakt_info.docx' })

    ctx.reply('Shartnoma narxini ushbu fayldan bilib olishingiz mumkin๐')

})


bot.hears('๐ฑBIZNING IJTIMOIY TARMOQLAR๐ฑ', ctx => {
    ctx.reply('๐ฒ  Websayt : Ieu.edu.ua/uz                                                                           ๐ฒ Telegram: https://t.me/xalqarouniversitet                                                                                                           ๐ฒ  Instagram: https://www.instagram.com/meu_uz/')
   
})


bot.hears('๐ CALL CENTER ๐', ctx => {
    ctx.reply('ะขะตะป: +99890.006.44.42 | +99890.006.44.43')

})


bot.hears('๐ข BIZNING MANZIL ๐ข', ctx => {
    ctx.reply('https://maps.app.goo.gl/w2FrNxaFt28ma7WW9')

})

bot.hears('๐ฑ Administrator ๐ฑ', ctx => {
    ctx.reply('@Ieu_vakolatxonasi01')
    ctx.reply('Administratorga savollar: +998900064443')

})

bot.launch()