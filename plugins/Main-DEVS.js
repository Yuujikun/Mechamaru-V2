var handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let owners = '2348153995521 - *BLACYUJI*'; // Define owners variable

  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "hey"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  let pp = './Assets/XLICON-V2.jpg';

  const cat = `*_MEISAMA-V1_*

*_—🦚 meisama 𝐯1  𝐃𝐄𝐕 wa.me/+2348153995521 %dont_contact_me🫥%_*
*---------------------*

*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${owners}*`;

  await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak);
};

handler.help = ['devi', 'maindev'];
handler.tags = ['info'];
handler.command = /^(maindev|creator)$/i;

export default handler;
