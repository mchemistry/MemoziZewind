/* jshint esversion: 6 */
const str = `[00:06.19]Nice to meet you, where you been?
[00:08.46]I could show you incredible things
[00:11.01]Magic, madness, heaven, sin
[00:13.45]Saw you there, and I thought
[00:15.46]"Oh my God, look at that face
[00:17.92]You look like my next mistake
[00:20.46]Love's a game, wanna play?"
[00:23.79]Ayy
[00:25.37]...
[00:25.98]New money, suit and tie
[00:28.47]I can read you like a magazine
[00:31.01]Ain't it funny? Rumors fly
[00:33.48]And I know you heard about me
[00:35.78]So hey, let's be friends
[00:37.78]I'm dyin' to see how this one ends
[00:40.31]Grab your passport and my hand
[00:42.88]I can make the bad guys good for a weekend
[00:44.51]...
[00:45.55]So it's gonna be forever
[00:48.09]Or it's gonna go down in flames
[00:50.58]You can tell me when it's over, mm
[00:53.13]If the high was worth the pain
[00:55.58]Got a long list of ex-lovers
[00:58.01]They'll tell you I'm insane
[01:00.53]'Cause you know I love the players
[01:02.90]And you love the game
[01:05.53]'Cause we're young and we're reckless
[01:08.00]We'll take this way too far
[01:10.50]It'll leave you breathless, hmm
[01:13.19]Or with a nasty scar
[01:15.58]Got a long list of ex-lovers
[01:18.05]They'll tell you I'm insane
[01:20.70]But I've got a blank space, baby
[01:24.26]And I'll write your name
[01:25.34]...
[01:25.79]Cherry lips, crystal skies
[01:33.53]I could show you incredible things
[01:35.93]Stolen kisses, pretty lies
[01:38.47]You're the King, baby, I'm your Queen
[01:40.92]Find out what you want
[01:42.71]Be that girl for a month
[01:45.25]Wait, the worst is yet to come
[01:49.18]Oh, no
[01:50.44]...
[01:50.85]Screaming, crying, perfect storms
[01:53.45]I can make all the tables turn
[01:55.93]Rose garden filled with thorns
[01:58.45]Keep you second guessin' like
[02:00.54]"Oh my God, who is she?"
[02:02.69]I get drunk on jealousy
[02:05.41]But you'll come back each time you leave
[02:07.78]'Cause, darling, I'm a nightmare dressed like a daydream
[02:10.02]...
[02:10.58]So it's gonna be forever
[02:13.25]Or it's gonna go down in flames
[02:15.68]You can tell me when it's over, mm
[02:18.25]If the high was worth the pain
[02:20.55]Got a long list of ex-lovers
[02:22.94]They'll tell you I'm insane
[02:25.58]'Cause you know I love the players
[02:28.12]And you love the game
[02:30.61]'Cause we're young and we're reckless
[02:33.25]We'll take this way too far
[02:35.60]It'll leave you breathless, hmm
[02:38.22]Or with a nasty scar
[02:40.62]Got a long list of ex-lovers
[02:43.01]They'll tell you I'm insane
[02:45.58]But I've got a blank space, baby
[02:47.81]And I'll write your name
[02:50.87]...
[02:51.39]Boys only want love if it's torture
[02:55.58]Don't say I didn't, say I didn't warn ya
[03:00.34]Boys only want love if it's torture
[03:05.42]Don't say I didn't, say I didn't warn ya
[03:09.93]...
[03:10.51]So it's gonna be forever
[03:13.13]Or it's gonna go down in flames
[03:15.60]You can tell me when it's over, mm
[03:18.09]If the high was worth the pain
[03:20.49]Got a long list of ex-lovers
[03:22.93]They'll tell you I'm insane
[03:25.47]'Cause you know I love the players
[03:28.10]And you love the game
[03:30.71]'Cause we're young and we're reckless
[03:33.00]We'll take this way too far
[03:35.41]It'll leave you breathless, hmm
[03:38.09]Or with a nasty scar
[03:40.58]Got a long list of ex-lovers
[03:43.05]They'll tell you I'm insane
[03:45.81]But I've got a blank space, baby
[03:49.65]And I'll write your name
`
const arr = str.split('\n')
const arrLyzik = []
for (let i = 0; i < arr.length; i++) {
  arrLyzik.push(JSON.stringify(arr[i].slice(10, 100)))
  arr[i] = arr[i].slice(0, 10)
}
// eslint-disable-next-line no-console
console.log(arr)
const arrTimer = []
for (let i = 0; i < arr.length; i++) {
  const minute = Number(arr[i].slice(1, 3))
  const second = Number(arr[i].slice(4, 6))
  const subSecond = Number(arr[i].slice(7, 9))
  let timer = minute * 60 + second
  if (subSecond >= 50) timer++
  arrTimer.push(timer)
}
// eslint-disable-next-line no-console
console.log(arrTimer)
// eslint-disable-next-line no-console
console.log(arrLyzik)
// console.log(arr.length + 4)
// let arr2 = new Array(arr.length + 4)
// arr2.fill(0)
// console.log(arr2)
