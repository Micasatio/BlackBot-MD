let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `[β] π΄ππΈπππ΄ππ΄ π° ππ½π° πΏπ΄πππΎπ½π° πΎ ππ΄ππΏπΎπ½π³π° π° ππ½ πΌπ΄π½ππ°πΉπ΄ π΄π½ππΈπ°π³πΎ πΏπΎπ π΄π» ππππ°ππΈπΎ πππ΄ π³π΄ππ΄π΄ π±π°π½π΄π°π\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*[βOMGβ] ESTA LOCA FUE BANEADO CON EXITO*\n*ββ EL USUARIO NO PODRA USAR EL BOT HASTA QUE EL OWNER LO DESBANEE*')    }
handler.command = /^banuser$/i
handler.rowner = true
export default handler
