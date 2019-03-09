const Canvas = require('canvas-prebuilt'); // Canvas Package for photo stuffs
const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const prefix = '-';
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const moment = require('moment');
const Canvas = require('canvas');
const fs = require("fs");
const coolDown = new Set();
const ms = require('ms');
const jimp = require('jimp');
const bot = new Discord.Client();
const Baron = new Discord.Client();






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame('| -help |  Anime ')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});







//----------------------------------- = [for all  ] = -----------------------------------\\


client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('??| Members info')
      .addBlankField(true)
      .addField('??| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('??| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('??| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('??| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('?| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
});



client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __Ranks__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ Number of members__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ Number of members online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Rooms Write__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ Sound room__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ owner__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ id server__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ The server was done in__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});    


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Subtract a certain number from which to drag**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});



client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`This is only for servers ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('en-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': Date of entry the discord',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': Date of entry This server', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });





 client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` I've invited :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});




client.on('message', message => {
    if (message.content.startsWith("Link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  Your link has been sent  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  This is a server link
---------------------
-This link is valid for only 100 users
---------------------
-This link is only valid for 24 hours
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});




client.on("message", msg => {
  if(msg.content === '-' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});




      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
});


client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

//----------------------------------- = [ for all ] = -----------------------------------\\


  client.on('message', message => {
    if(message.content.startsWith(prefix+'help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
╭━━╮╱╱╱╭╮
┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┳━┻╮╭╯
┃╭━╮┃╭╮┃┃
┃╰━╯┃╰╯┃╰╮
╰━━━┻━━┻━╯
=-=-=-=-=  General's Commands.  =-=-=-=-=
『 ${prefix}roll <number> ➾ roll』
『 ${prefix}member ➾ Member Information』
『 ${prefix}server - Basic Information About Server :scroll:』
『 ${prefix}id - your id  :flashlight:』
『 ${prefix}avatar - Your profile picture :frame_photo:』
『 ${prefix}user ➾ your information』
『 ${prefix}ping ➾ View the speed of the bot connection』
 
`)
    message.author.send(embed)
}
});


     
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " We have been sent to your")
  message.channel.sendEmbed(embed);
    }
});


client.login(process.env.BOT_TOKEN);
