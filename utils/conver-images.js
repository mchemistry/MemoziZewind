const text = `<a href="https://imgbb.com/"><img src="https://i.ibb.co/FWHMzdj/1.png" alt="1" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/KypnXPj/2.png" alt="2" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/fGWp97P/3.png" alt="3" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/mJhns09/4.png" alt="4" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/TmpMb1P/5.png" alt="5" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/56zcfb0/6.png" alt="6" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/LYsZPK5/7.png" alt="7" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/SVVC0y7/8.png" alt="8" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/frbZn9n/9.png" alt="9" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/VtCjVd0/10.png" alt="10" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/R7m7MMV/11.png" alt="11" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/yRZPxC7/12.png" alt="12" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/stbM4J7/13.png" alt="13" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/31QNB4d/14.png" alt="14" border="0"></a>
<a href="https://ibb.co/P5G2szh"><img src="https://i.ibb.co/8jgyn45/15.png" alt="15" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/sQMZqP1/16.png" alt="16" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/x3khsZM/17.png" alt="17" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/267csSN/18.png" alt="18" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/qJXZ1mp/19.png" alt="19" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/LR18kmm/20.png" alt="20" border="0"></a>
<a href="https://ibb.co/PgLqWLb"><img src="https://i.ibb.co/89C1xCR/21.png" alt="21" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/X5Lsx82/22.png" alt="22" border="0"></a>`
const arrImagesEmbed = text.split(`\n`)

console.log(arrImagesEmbed[0].split(`"`))
for (const i in arrImagesEmbed) {
    arrImagesEmbed[i] = arrImagesEmbed[i].split(`"`)[3]
}
console.log(arrImagesEmbed)