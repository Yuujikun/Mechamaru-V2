
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `./Assets/mp3/${pickRandom(["Xlicon", "Xlicon1", "Xlicon2", "Xlicon3"])}.mp3`

m.reply( `Hello ${taguser} im Mei Mei v1,a hot ahh Whatsapp artificial assistant, Need help?  type .help `)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(Meimei)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
