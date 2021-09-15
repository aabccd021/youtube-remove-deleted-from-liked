var fs = require('fs');
const videos = JSON.parse(fs.readFileSync('videos.json').toString())
const titles = videos.map(v => v.snippet.title)
fs.writeFileSync('titles.txt', titles.join("\n"))
var channels = videos.map(v => v.snippet.videoOwnerChannelTitle)
var channels = [...new Set(channels)].sort()
fs.writeFileSync('channeld.txt', channels.join("\n"))