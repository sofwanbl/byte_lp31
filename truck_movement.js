var readline=require('readline-sync');
var x=parseInt(readline.question("Masukkan koordinat X :"))
var y=parseInt(readline.question("Masukkan koordinat Y :"))
var langkah=readline.question("Masukkan Langkah [R,A,L]:")
panjang_str=langkah.length

// Cek jika ada inputan yang bukan R,A atau L

for (var i=0;i<=panjang_str-1;i++)
  {
    if (!(langkah.substr(i,1)=="R" || langkah.substr(i,1)=="A" || langkah.substr(i,1)=="L" ||
          langkah.substr(i,1)=="r" || langkah.substr(i,1)=="a" || langkah.substr(i,1)=="l" ))
      {
        console.log("Masukkan inputan hanya R/r/A/a/L/l, jangan karakter yang lain atau spasi!");
        process.exit(1);
      }
  }

for (var i=0;i<=panjang_str-1;i++)
  {
    if (langkah.substr(i,1)=="R" || langkah.substr(i,1)=="r")
      {
        console.log("Right ");
        x++;
      }
    else if (langkah.substr(i,1)=="A" || langkah.substr(i,1)=="a")
      {
        console.log("Advance ");
        y++;
      }
    else if (langkah.substr(i,1)=="L" || langkah.substr(i,1)=="l")
      {
        console.log("Left ");
        x--;
      }
  }
console.log("\nHasil Akhir :");
console.log("X :",x);
console.log("Y :",y);
