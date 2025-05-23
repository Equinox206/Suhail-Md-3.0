const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_59_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIybytjQUdUR2h4M1NuSmZpWlpuMGxVTnBTSk4zTXVkazBJdnYxeitPVVlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsY2NSWkxCdFJZMlpmcmp1c1Jpb3hBXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxYzM1OTYzLTQ3NTEtNGZhYS1iNzc1LTViN2E1MWFkZmQwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDEwMyxcbiAgICAgIDQ2LFxuICAgICAgNjYsXG4gICAgICAyNDUsXG4gICAgICA0OSxcbiAgICAgIDExNixcbiAgICAgIDYsXG4gICAgICA1MixcbiAgICAgIDQ0LFxuICAgICAgMjAxLFxuICAgICAgMjIsXG4gICAgICA5NCxcbiAgICAgIDEzMyxcbiAgICAgIDE1NyxcbiAgICAgIDg1LFxuICAgICAgMzIsXG4gICAgICAyMTEsXG4gICAgICAxNTQsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDI0MCxcbiAgICAgIDEwMCxcbiAgICAgIDgsXG4gICAgICAxOTIsXG4gICAgICAxNzYsXG4gICAgICA5OSxcbiAgICAgIDEzOSxcbiAgICAgIDE0MyxcbiAgICAgIDI0NSxcbiAgICAgIDExNCxcbiAgICAgIDE0OSxcbiAgICAgIDg1LFxuICAgICAgMjE2LFxuICAgICAgMjQ2LFxuICAgICAgMjM5LFxuICAgICAgMTAyLFxuICAgICAgMTkyLFxuICAgICAgMzgsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqRHBhNEhFT3lRdjhFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWEFBT2NQbEhQVEx2OWFKVnVEY05BNXdKWEZvV25tbkVsQTlIazNxMDZIST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUY0IrV29wdkJXMzlKSy91d1NxZGxSQ0VCTFZ3dWlVYUwzYW83cldKekREemRhSHhyUFQxWk52dE5QT2U0d0F6bVlhM2NFcG1ZcW9oNWRVUFI4TkRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWRmxQalc5NGxRNmdqR1I5K0JFSkJyOFdXazJLNUtiQ2U5OThZT2tpaTlBTFo5RDZQTkk2cWdtci9La3Vqd1QzOXExOWlYYXpwVFBsUzJjUVRvckJDQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTUyNTkzODE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkUtY29tbWVyY2UgRXhwZXJ0XCIsXG4gICAgXCJsaWRcIjogXCI5MTkxNzA0ODEzNTkwOTo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNTI1OTM4MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDc5NjE5Njhcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
