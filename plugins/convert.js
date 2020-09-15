const str = `[00:03.91]We're gonna ri-ri-ri-ri-rise 'til we fall
[00:08.32]This time we got no no no no future at all
[00:12.94]They wanna ke-ke-keep us down but they can't hold us down anymore
[00:17.62]We're gonna ri-ri-ri-ri-rise 'til we fall.
[00:20.60]...
[00:21.91]When we hit the bottom, then it goes up
[00:24.24]Climb to the top with you
[00:26.43]We're gonna be the breaks, once whoever waits
[00:28.76]Ya I could be talking to you
[00:31.20]They tryna hate hate hate
[00:32.64]But we won't change, change anything at all
[00:35.67]We're gonna ri-ri-ri-ri-rise 'til we fall.
[00:38.62]...
[00:39.55]They think we just dropped out
[00:41.84]Living at my mom's house
[00:43.99]Paris must be so proud
[00:46.19]They know it all
[00:48.38]They don't speak our language
[00:50.82]They say we're too savage
[00:53.39]No, no we don't need them anymore.
[00:56.89]...
[00:58.06]We'll ri-ri-ri-ri-rise 'til we fall
[01:02.35]We'll ri-ri-ri-ri-rise 'til we fall
[01:06.46]They don't speak our language
[01:08.89]They say we're too savage, ya
[01:11.46]No, no we don't need them anymore
[01:16.59]We're gonna ri-ri-ri-ri-rise
[01:21.00]We're gonna ri-ri-ri-ri-rise
[01:25.72]We're gonna ri-ri-ri-ri-rise
[01:30.02]We're gonna ri-ri-ri-ri-rise 'til we fall.
[01:33.28]...
[01:34.25]So we're going no no no no no no nowhere
[01:38.73]But we they don't know know know is we don't don't care
[01:43.21]We're gonna keepin' on, keepin' on going til' we can't go no more.
[01:52.42]When we hit the bottom, then it goes up
[01:54.83]Climb to the top with you
[01:57.02]We're gonna be the breaks, once whoever waits
[01:59.40]Ya I could be talking to you
[02:01.84]They tryna hate hate hate
[02:03.33]But we won't change, change anything at all
[02:06.21]We're gonna ri-ri-ri-ri-rise 'til we fall.
[02:09.48]...
[02:09.93]They think we just dropped out
[02:12.35]Living at my mom's house
[02:14.65]Paris must be so proud
[02:16.84]They know it all
[02:18.85]They don't speak our language
[02:21.31]They say we're too savage
[02:23.97]No, no we don't need them anymore.
[02:28.00]...
[02:29.02]We'll ri-ri-ri-ri-rise 'til we fall
[02:33.27]We'll ri-ri-ri-ri-rise 'til we fall
[02:37.19]They don't speak our language
[02:39.38]They say we're too savage, ya
[02:42.10]No, no we don't need them anymore
[02:46.82]We're gonna ri-ri-ri-ri-rise
[02:51.59]We're gonna ri-ri-ri-ri-rise
[02:56.16]We're gonna ri-ri-ri-ri-rise
[03:00.59]We're gonna ri-ri-ri-ri-rise 'til we fall.`
const arr = str.split('\n')
const arrLyzik = []
for (let i = 0; i < arr.length; i++) {
  arrLyzik.push(arr[i].slice(10, 100))
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
