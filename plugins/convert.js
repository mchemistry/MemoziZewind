/* jshint esversion: 6 */
const str = `[00:19.19]Mãi sau này anh mới biết
[00:22.24]Bông hoa đó không phải của anh
[00:26.95]Chẳng qua là anh đã đi ngang qua
[00:30.29]Đúng mùa hoa đẹp nhất
[00:36.14]Con tim anh cứ ngỡ là duyên số
[00:40.13]Thì ra đó chỉ là chuyện hư vô
[00:44.52]Lý do chia tay là gì em có biết không
[00:51.38]Vì em không yêu anh như anh yêu em
[00:55.41]Vì em xem anh chỉ là nhất thời
[01:00.69]Người mới chơi vơi như anh
[01:04.68]Làm sao anh mơ có em
[01:08.58]Mãi sau này xa nhau anh mới thấu
[01:12.73]Suốt chặng đường khi yêu ai biết đâu
[01:16.87]Người mình từng thương
[01:18.91]Giờ như hai người xa lạ
[01:21.22]Đã biết hết về nhau
[01:24.43]Sau này gặp nhau anh muốn biết
[01:27.89]Mùa hoa đẹp nhất em có nhớ gì
[01:32.97]Ngày đó yêu nhau lúc xuân thì
[01:36.87]Mà điều gì làm em quay lưng đi
[01:40.98]Nếu gặp lại nhau em vẫn ôm anh
[01:45.41]Hay em sẽ né tránh anh
[01:49.48]Chỉ dám buông đôi câu chào
[01:52.69]Dạo này anh sao
[02:12.99]Mãi sau này anh mới biết
[02:17.05]Người đó không phải người yêu anh
[02:21.16]Chẳng qua là anh đã đi ngang qua
[02:24.12]Đúng ngay người cô đơn nhất
[02:29.37]Thì thầm vài câu mình nói yêu nhau
[02:33.35]Thế nên chuyện mình cũng chẳng tới đâu
[02:37.99]Lí do chia tay là gì em có biết không?
[02:45.27]Vì em không yêu anh như anh yêu em
[02:49.21]Vì em xem anh chỉ là nhất thời
[02:54.50]Người mới chơi vơi như anh
[02:58.28]Làm sao anh mơ có em
[03:02.34]Mãi sau này xa nhau anh mới thấu
[03:06.53]Suốt chặng đường khi yêu ai biết đâu
[03:11.00]Người mình từng thương
[03:12.87]Giờ như hai người xa lạ
[03:15.23]Đã biết hết về nhau
[03:18.24]Sau này gặp nhau anh muốn biết
[03:21.66]Mùa hoa đẹp nhất em có nhớ gì
[03:26.99]Ngày đó yêu nhau lúc xuân thì
[03:30.85]Mà điều gì làm em quay lưng đi
[03:34.51]Nếu gặp lại nhau em vẫn ôm anh
[03:39.27]Hay em sẽ né tránh anh
[03:43.29]Chỉ dám buông đôi câu chào
[03:46.62]Dạo này anh sao
[03:50.61]Vì em không yêu anh như anh yêu em
[03:54.31]Vì em xem anh chỉ là nhất thời
[03:59.80]Người mới chơi vơi như anh
[04:03.90]Làm sao anh mơ có em
[04:07.60]Mãi sau này xa nhau anh mới thấu
[04:11.59]Suốt chặng đường khi yêu ai biết đâu
[04:15.98]Người mình từng thương
[04:18.10]Giờ như hai người xa lạ
[04:20.13]Đã biết hết về nhau
[04:22.93]Sau này gặp nhau anh muốn biết
[04:26.63]Mùa hoa đẹp nhất em có nhớ gì
[04:31.72]Ngày đó yêu nhau lúc xuân thì
[04:35.79]Mà điều gì làm em quay lưng đi
[04:39.81]Nếu gặp lại nhau em vẫn ôm anh
[04:44.29]Hay em sẽ né tránh anh
[04:48.32]Chỉ dám buông đôi câu chào
[04:51.73]Dạo này anh sao
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
