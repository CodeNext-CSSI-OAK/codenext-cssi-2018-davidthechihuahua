// Author: david estrada
var readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          Meme review");
console.log("                 A game by DAVID  ESTRADA");
console.log("*****************************************************************");
console.log("You are a person who enjoys memes and you want to review them.");
console.log("You see your the Monkey Hair Cut Monkey meme and see that it is quite unique. You can review it and give it a positive or negative score. ");
console.log("WWW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@M*;:;*xn;;;;;;;;;;;;;;i+zzzzzznznxzzzzznxnnnxxxxnnMW@@@@Wnz###+++################xW@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@M+i;;:;;;;:::::;;:;ii;;i#zzzzzznznxnzzzznxnnnxxxxxMW@@@@@Wnz###++++##############zW@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WW@@@@@W@@@@@Wz#zzi;;;;::::;::,,,,:::iiii*znzzzzznnnxnzzznnxnnxxxxxW@@@@@@@Wzz#+++++++#############x@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@WW@@@@WWW@@@@W@@@@W*;::::;;;:::::;;:,,,,::::i**+znnzzzznnnxnnnnnnxnnxxxMW@@@@@@@@Wzz##++++++############zM@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@n*;::::;i;;::::;i*i;::::;;;*+#zznnnzznnnnnnxxxxxnxMW@@@@@@@@@@@Wnz##+#################M@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@zi;::::;i;:::::;**;:::::;ii*+#zznnnnnnnnnxnxxxxxnM@@@@@@@@@@@@@Wnz#+#zzzzz###########nW@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W#*;:::::*;:::::;*;:::::;;i*+##nznnnnnnxxnxnxxnxnxW@@@@@@@@@@@@@Wnxxxxxxxxxz#+#######zM@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@M#+;:::::i;;;:::;i::::;;;i*+##znnnnnnnnxxxxxxxxxxW@@@@@@@@@@@@@@WxMMMMMMMMxz#++######nW@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Wz;iz*;:::::i;;;::;**i;;*+++*#zzznnnnnnnnxxxxxxMMW@@@@@@@@@@@@@@@@WMMMWWWWMMz##++++###nW@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@xi;;++;;::::ii;;;:;*z+*++#zz+#zzznnnnnnnxxxxxMWW@@@W@@@@@@@@@@@@WWMMMMMWWWMx####+#+##zM@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W#;;:;#iiii;;;*;i;;;*nzzzzzzz#zznnnnnxxxxxxxxW@@@@@@W@@@@@@@@@@W#i*MMMMWWWWM#ii*+#####xW@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWWW@@W+i;::++***i;;+ii;:;inxnnnnnz#znnnnxxxxxxxxMW@@@@@@@@@@@@@@@@@@zii#MMMMWWWMni;;ii+###zW@@@@@@@@@@@@@@@@@@@@@@");
console.log("@WWW@@@@@@@@@@@@@@@WWW@WWWWW@@@@@@@@@@@@@x+*;::*##***i;*+i;::;zxxnnnn##znnnnxxxxxxxW@@@@@@@@@@@@@@@@@@@M#+*xMMMWWWWM#iiiiii+##x@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@WW#+znxMMMMMW@@@@@@@@@@@z##i::iz##+*i;*#i;::;+xxnnnn#znnnxxxxxxxMM@@@@@@@@@@@@@@@@@@@Wz#+zMMMMWWWMx+iiiii**+zW@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@WWMMM##nxxWWWW@@@@@@@@@@@@W+##i::;zzz#**ii#*i;:;*xxnnnzznnnxxxxxxMWWW@@@@@@@@@@@@@@@@@@@x##zxMMMWWWWMn#++*****+x@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@WWMMMWW@@@@@@@@W###n@@@@@z;izi:::+zz#+*ii#+*i;;ixMnnnzznnnxxxMMW@@@@@@@@@@@@@@@@@@@@@@MzznxMMMWWWWWMnzz###+**#W@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#;;*W@@@Wi:;#*ii*#z#z#+*i##*ii;;zMnnnznnnxxxMWW@@@W@@@@@@@@@@@@@@@@@@x*znxxMMMWWWWWxxxnnzz+***x@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@MW@@@@@@@@@@@@@@@@@@MzznW@@@n:::i#++#znz###+*+z+**i;+MnnnnnxxxMWW@@@@@@@@@@@@@@@@@@@@@@@M+*zxxxMWWWWWWMMxxnz#+****+W@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@WWMnzxW@@@@@@@@@@W@@@@WMMW@@@@#:::iz###zzzz###++zz##+**MMxnxMWWWW@@@@@@@@@@@@@@@@@@@@@@@@Wz##znxMWWWWWWMMx#*iiiiii***x@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@WWMMx+xM@@@@@@@@@@@@@@@@@@@@@@W*;:;in#####zz#zz#+nnz#++*xWM#;#nnMW@@@@@@@@@@@@@@@@@@@@@@@@n#zzznMMWWMMxxnz#iiiiiiiiiii+W@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@WWW##nMWW@@@@@@@@@@@@@@@@@@@@@W+++++nxz####nzzzz#nnz+***nWMz+znzxM@@WWWW@@@@@@WWWWWxnnnnxx##zz###xMxxxnnzz#*iiiiiiiiii*n@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@WWWWWMxM@MW@@@@@@@@@@@@@@@@@@@@@Wz####zxxxnnMWMzzzznxn#+**xWWWWWWWWW@@WxxM@@@@xz+*iii;;;;;;;;;;iiii#xxxxnzz##+ii***iiiii*+M@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@WW@WWWWW@@@W@@@@@@@@@@@@@@@@@@@@@@@x###zznxMWWMMxzzznnxxnz##MWWWWWWWxnnnnnxxMWWWWWMnz+**+*iiiiiiiiii*#xxxxnzz#+*ii*******i*i#W@@@@@@@@@@@@@@@@@@@@");
console.log("MMM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWWn####zznxxn##zzzznnnnxnnWWWWWWWWWWMxxnz###zzxxxxnnz###+**********+nxxxnz#+++ii*********ii#W@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@W@@@@@@WW@@@@@@@@@@WWWWWWWWxz####znMMxnxxzzznxxxxMWWWWWWWWWWWMMMMMMxxxzzzzxxzzz######+++*+*+nxxnz#++++**************+nW@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@WMW@@@@@@W@@@@@@W@@@WWWWWWWW@WMz##zM@@WWWWnzznxxMWWWWWWWWWWWWMnnn#++zxxnz###znzznnnnnzzz#####znnnz#++++****+++++*****ii+zxMWW@@@@@@@@@@@W");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W@@@WWWWWW@@@@@WMMWW@@@@WWWnznnxWWWWWWWWWWWWWMnnz#++**+#z#+i;;i*#nnnnnnnnzzzznnnnz#++++iii**+++++*****iiiii*++#zxxn#++++#");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W@@@@@@@@@@@@WW@@WW@@@@@WWWMnznMW@WWWW@@@WWWWWxxnnzz#+***+#+*i;;i+znxxxnnnnnnnnnnzz###+*iiii************iiiiiiiiiii*i:,,,");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W@@@@@@@@@@@@@WWWWWWW@@WWWWW@@@WWWWxxxxxxnz#+++++**i;;;;i+zxxxxxnnnnnnnzz###+*iiiiiiiiii******ii********++:,,,");
console.log("@@@@@@@@@@@@@@@@@@@W@@@W@@@@@@@@@@@WWWW@@@@@@@@@@@@@@@@@@@@@@@W@WWWWWWWWWWWWMMMMMMxxnzzz###++*i;;;;i*#nxxxnnnnnnz###++++*iiiiiiiii**************+#i,,,");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@MxxW@@@@@@@@@@@@@@@W@@@@@@WWWWWWWWWWWWWWWWWWWWWMMMxnnnnnz#+*iii;;;ii+#znxxxnnzz##++++#+*iiiiiiii*************+z#:,,");
console.log("@@@@@@@@@@@@@@@@@@@@W@@@@@@@@@@@@@@MxnW@@@@@@@@@@@@@@@@@@WWWWWWWWWWWWWWWWWWWWWW@@@WWMMxnzzzzzz#+**********#nnxnzzz##+++++##+*iiiiiiiii********++##z;,,");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W@W@WMxnM@@@@@@@@@@@@@@@@WWWWWWWWWWWWWWWWWWWWWWW@@@@@@@WMMxnnnnnnz##+++*****+znnnzz###++****++++*iiiiiii******++++##zi,,");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Mxnx@@@@@@@@@@@@@@@WWWWWWWWWWWWWWWWWWWWWWWWW@@@@@@@@WMMxxxnnnnzzz##++*i*#zzz###+++++**ii*+++**iiiii******++++##n*,,");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WMMM@@@@@@@@@@@@@@@WWWWWWWWWWWWWWWWWWWWWWMMMWWWWW@@@@WWWMMxnnnnzzzzz##++#zz###++++**iiii**++++***********+++###n+:,");
console.log("@@@@@@@@@@@@@W@@@@@@@@@@@@WW@@@@@@@@@WW@@@@@@@@@@@@@@@@WWWWWWWWWWWWWWWWWWMWMMMMMMMMMMW@@@@WWMMxxxnnnnnnzzzzzzzz###+++*iiiiiiii***++++++++++++++###nz;,");
console.log("@@@@@@@@@@WWWW@@@@@@@@@@@@WMW@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWWWWWWWWWWWWWMMxMMxxxxxMxxxMMW@@@WWWWWMxxnnnnnnnnnnnzzzz#####++++****+++++############zznz;:");
console.log("@@@@@@@WWW@@@@@@@@@@@@@@@@WMW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWWWWWWWWWMxxxxxxxxxMxxxxMMMW@@@W@@@WMxxxnnnnnnnnzzzzzzzzzzzzzz###########zzzzz####zzznz;:");
console.log("@@@WWWWW@@@@@@@@@@@@@@@@@@@W@@@@@@@@@W@@@@@@@@@@@@@WMxznMW@@@WWWWWWWWMMxxxxxxxxMMxxMMMMMWW@@@@@@WMMxxxnnnnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz#zzzznn;:");
console.log("WWMWW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWW@@@@@@@@WMz+iiiii*+nMWWWWWWWWMMxxxxxxxxxMxxMMMMxxMWWW@@@@WWMxxxxnnnnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzznnnnni:");
console.log("MW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWW@@@@@@Mz*::::;ii**+++#nMMWWWWMMxxxxnxxxMxxxMMMxznnMWWW@@@@WMMxxxxnnnnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzznnnnnnni;");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWW@@@@Wz;:::::;iii**###++#znMMWMMxxxxnnnxxxMxMMxnzzznMWW@@@@@WMxxxxnnnnnnzzzzzzzzzzzzzzzzzzzzzzzzzzzznnnnnnnnnni;");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@WWW@@@Wz*i;::::ii****+####+##++nMMxxxnzzznnnxxxxxzzzznxMW@@@@@WWMxxxnnnnnnnzzzzzzzzzzzzzzzzzzzzzzzzzzznnnnnnnnxni;");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@x++**iiiii*****+#####+*ii*zxxxnz+**+#znxxxnnzzznxxMW@@@@@WWMxnnnnnnzzzzzzzzzzzzzzzznnnnzzzzzzznnnnnnnnnxxni;");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W#++++++#+*******++#zz#+*i*zxn#+i;::;;i*#znnzzzznnxMWW@@@@@@Wxnnzzzzzzzzzzzzzzzzzzzzznnnnznzznnnnnnnnnnnxxni;");
console.log("@@@@@@@@W@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@x#+++++####++*++++#zzzzzz#+zz+**iiii**i;:;*+#zzznnxMMWW@@@@@@Mxnnzzzzzzzzzzzzzzzzzzzznnnnnnznnnnnnnnnnnnxxzii");
console.log("@@@@WWnnzW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W##++++########++++zzzzzzzzzz###+++++###+*i;i*#znnnxxMWWWWWWWWWMxnzzzzzzzzzzzzzzzzzzzznnnnnnnnnnnnnnnnnnnxxzii");
console.log("@@@Wxn#MW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@n+#++++##########++#zzzzzznn##########+**+#+*i#znxxxMMMWWWWWWWWMMxnzzzzzzzzzzzzzzzzzzznnnnnnnnnnnnnnnnnnnxx#ii");
console.log("@@@@WWWW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@M++##+++##zz####zz####zzzzznz###zz##zz#+**+###++znxxMMMWWWWWWWWMMMMxnnzzzzzzzzzzzzzzzzznnnnnnnnnnnnnnnnnnnxx+ii");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@W#++###++#zzzz########z###znnn#*iznz#zn#*i;i+####znxxMMMWWWWWMWMMMxxxnnzzzzzzzzzzzzzzznnnnnnxxMMMMMMxxxxxxxxx+ii");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@n+++#+#+#zzzzzzzz#####zzz#+#nnznnznn#zxnMMxz+zz##znxMMMMWWWWWWMMMMxxnnnnzzzzzzzzzzzzznnxMWWW@@@@@@@@WMMMMMMMx*ii");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@x+*++#+#+#zzzzzzzzz#######+;:;#nMWWxn++zMMWWMxnz#zznxMMMWWWWWWWWMMMxxnnzzzzzzzzzzzzznxMW@@@@@@@@@@@@@@MMMMMMMn*ii");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@M#+**+#+###zzz##zzzzzzzz###+*;:;zxMMxzii*nMMMMz###zznxMMMWWWWWWWWMMxxxnzzzzzzzzzznnnMMW@@@@@@@@@@@@@@@@WMMMMMMz**i");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Wz++**##+###zz###zzzzzzzzz###+*i;#nn##*;;i*zxnz#+##zznxxMMMWWMMMMMMMnnnnnzzzzznxMMMW@@@@@@@@@@@@@@@@@@@@@WxxxMx+**i");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@x+++*+##+##zz####zzzzzzzzzz###++*#z###i;;;*#zz#+##zzznxxMMMWMMMMMMMnzzzzzzzzznMW@@@@@@@@@@@@@@@@@@@@@@@@@WMxnnz+***");
console.log("@@@@@@@@W@@@@@@@@@@@WWWWWWWWWWWMn++++*++#+++#################+i;i**+#zn##*+zi;;;i+#zzzzzznxxxMMMWWWWWW@Mxxxnnn#+zxM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@WWWWWWWWWWWWMMMMx+++++*++#+++#############+++++i:,,,:+nn###n#iiiii*+#zzzzzznxxxMMMWWW@@@Wxxxxxn+*+#znMW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@W@WWWWWWWWWWWWMMMMMMz++*+++++#+*+#####++########++i;::,,,*xxzzzz++++#####zzzz#znxxxMMMMWW@@@WMxxxxnnznnnnnnxW@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@WWWWWWWWWWWWWWWMMMMMn+++*+++++#++######++++++++++**i;::,:;#MMnzzz##zzzzz##zzz##znxxxxMMMW@@@@@WMxnnnnnnnnnnnnnxW@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@WWWWWWWWMMMMWMMMx#+++**++++#++#++##++++++******i;:::;::#MMxzz##zzzzzzz######znxxMMMWW@@@@@@WMxnnnnnnnnzzz###zxW@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@WWWWWWWWMMMMMWMMMMz#++**+++++#++#++#++++++******;::::,,,:#MMxnzzzznnnnzz#####zzxxMWWW@@@@@@@@@xnnnnnnnnzzz#######nM@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@WW@@@WWWMMMMMWMMMMMMMMMMn#+++++++####++#++##++++++****;,,:,,...:#WWWxnnnxxnnzzzzz###znxMWWW@@@@@@@@@Wnzznnnnnnzzz#########zxMW@@@@@@@@@@@@@@@@@@@@");
console.log("@@@WWWWWWMMMMMMMMMMMMMMMMMMM#++++++++##++++#++##++++++**i:,,,,.``..izMWWWnznzzzzzzzzzzzznxMMWW@@@@@@@@@@Mnnnnnnnnnzzz##########+##zxW@@@@@@@@@@@@@@@@@");
console.log("@WWWWMMMMMMMMMMMMMMMMMMMMMMn+++++++++#+++++#+###+++++++*:,.``````.,*zxWWWWnzzzzzznzzzzznxMMWW@@@@@@@@@@Wnnnnnnnnnnzzz###########++*ii+zM@@@@@@@@@@@@@@");
console.log("WWWMMxxxxxMMMMMMMMMMMMMMMMx#++++++####+++++#+###++++++*:,.```````..*zxMWWWWxxxMMMMMxxxMMWWWW@@@@@@@@@@Wxzznnnnznzzzzz#########+++*i;;::;*zMW@@@@@@@@@@");
console.log("MMxxxxxxxxMMMMMMMMMMMMMMMxz+++++######+++++++###+++++*;,,.````````.,#nnMWWWWWWWWWWWWWWWWWWWW@@@@@@@@@Mnzz##znnz#####z#########+++*i;;;;;;;;*nW@@@@@@@@");
console.log("MxxxnnnnxxMMMMMMMMMMMMMMMn#+++########++++##+#####++*;,,..`.```````.iznnxWWWWWWWW@@@W@@@@@WW@@@@@@@Wx#+zz#++#znz#############++++++*i;;iiii;;;+xW@@@@@");
console.log("xxxnnnnnxxMMMMMMMMMMMMMMx#+++########+++++#++######+;,...`..``````..:#znnxWWWWWW@@@@@@@@@@WW@@@@@Wxz***+z#++##zzzz###########++++++++********i;;*zM@@@");
console.log("xxnnznnnxMMMMMMMMMMMMMMMz#+++##++*+++++++++++#####+i,``.`...........,*znnnxMWWW@@@@@W@@@@@@@@@WMxnz#****######zzzzzzzzzzzzz##+++++++++++++****i;i;i#M@");
console.log("xxnnzzzznnxxxxMMMMMMMMMx#+**iiiiii++++++++++#####+*:``............``,*zznnnnnMWWW@@WW@@@@WWMxnz+#zz#++*i*##+####zzzzzzzzzzzzz####++++++++++++****ii;;+");
console.log("xxnzzzzzznnxxxMMMMMMMxn+i;;;iiiii+++***++++++####+;.................,;+znnnzznnnnxxMxxxnnzzzzz#*+###+++ii*++++###zzzzzzzznnnzzzzz###++++++++++*****ii;");
console.log("xnz##++##znnxxxxx#*;;;;;;;;;;;ii**+***++++++####*:,,,.......,,,,,.,:;i*##+#zzz+*+#z+***#++###z#*;i+++++*i;iiii*+#######zz#*****;;i**+********+********");
console.log("nnz#++++#znnxnz+i;;;;;;;;;;;:;ii******++++++###+:,,,.....,,,,,,,.,:;;:i++*+#zz*i*##*ii*++*+##z#*::i++**i;;;;;ii*+#######*;:::::::;;;iiiiii************");
console.log("nz#+***+#zz#*i;;;;;;;;;;;;;;;;iii******+++++###i,.,,,..,,,,,,,,,.,::::;+**+#z#*i*##*iii+++*####+;,:i**ii;;;;;ii**+####+i::::;;:;::::;;;;;iiii*********");
console.log("nz#+*i*##*i;;;;;;;:;;;;;:;;;;;iii******+++++##+,,.,,,,,,,,,,,,,,..,,:,;***+zz+ii*++*iii*++*+####i:,:;ii;:;;;;;i*+++##*;::;iiii;i;;:::::;;;;;;iii******");
console.log("nz#++++*;;;;;;;;:::::::::::::;ii***********+##;,.,,,,,,,,,,,,,,....,,,,iii+##*i**++iiiii++**####*:,,:;i;::;;;;i**++#*;::ii***iiii;;;:::::::;;;;;;;iii*");
console.log("nnz#+i;;;;;;;;;;:::::::::::::;;ii**********+#*,,,,,,,..,,,,,,,....,...,;ii+#+i***+*iiiii*+**+###+;,,,:i;:,:;;;ii*++*i:::;i****iiiii;;;;;::::::::;;;;;i");

var reviewMeme = readline.question("Will you review it with a positive score? (yes or no) ");
if(reviewMeme == "y" || reviewMeme == "yes") {
  // your code here
console.log("The site you reviewed it on agrees with you.")
} else {
  // your code here
  if(reviewMeme == "n" || reviewMeme == "no") {
    // your code here
  console.log("The site you reviewed it on disagrees with you.")
  }
}

console.log("The site agrees that the Hair Cutting Monkey meme is a good one. The next meme that your meme reviewing peers want you to look at is Loss.");
console.log("| ||");
console.log("|| |_");
var reviewMeme = readline.question("Will you review it with a positive score? (yes or no) ");
if(reviewMeme == "y" || reviewMeme == "yes") {
  // your code here
console.log("The site you reviewed it on disagrees with you.")
} else {
  // your code here
  if(reviewMeme == "n" || reviewMeme == "no") {
    // your code here
  console.log("The site you reviewed it on agrees with you. That meme is really over used.")
  }
}

console.log("The site thinks that the Loss meme is a bad one. The next meme that your meme reviewing peers want you to look at is the okay sign meme.");
console.log("👌");
var reviewMeme = readline.question("Will you review it with a positive score? (yes or no) ");
if(reviewMeme == "y" || reviewMeme == "yes") {
  // your code here
console.log("The site you reviewed it on agrees with you.")
} else {
  // your code here
  if(reviewMeme == "n" || reviewMeme == "no") {
    // your code here
  console.log("The site you reviewed it on disagrees with you.")
  }
}
console.log("The next meme that your meme buddies want you to review is the ugandan knuckles meme. That is a dead meme they say.");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠶⣿⣭⡧⡤⣤⣻⣛⣹⣿⣿⣿⣶⣄");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⢀⣼⣊⣤⣶⣷⣶⣧⣤⣽⣿⣿⣿⣿⣿⣿⣷");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇");
console.log("⢀⢀⢀⢀⢀⢀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧");
console.log("⢀⢀⢀⢀⢀⢀⠸⠿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣻⣿⣿⣿⣿⣿⡆");
console.log("⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⡀⠘⣿⡿⢿⣿⣿⡟⣾⣿⣯⣽⣼⣿⣿⣿⣿⡀");
console.log("⢀⢀⢀⢀⢀⢀⡠⠚⢛⣛⣃⢄⡁⢀⢀⢀⠈⠁⠛⠛⠛⠛⠚⠻⣿⣿⣿⣷");
console.log("⢀⢀⣴⣶⣶⣶⣷⡄⠊⠉⢻⣟⠃⢀⢀⢀⢀⡠⠔⠒⢀⢀⢀⢀⢹⣿⣿⣿⣄⣀⣀⣀⣀⣀⣀");
console.log("⢠⣾⣿⣿⣿⣿⣿⣿⣿⣶⣄⣙⠻⠿⠶⠒⠁⢀⢀⣀⣤⣰⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄");
console.log("⢿⠟⠛⠋⣿⣿⣿⣿⣿⣿⣿⣟⡿⠷⣶⣶⣶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄");
console.log("⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠙⠻⠿⣿⣿⡿");
console.log("⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⢀⢀⢀⠈⠁");
console.log("⢀⢀⢀⢀⢸⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
console.log("⢀⢀⢀⢀⢸⣿⣿⣿⣿⣄⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣹⣿⣿⣿⣿⣿⣿⣿⣿⠇");
console.log("⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣧⣀⢀⢀⠉⠛⠛⠋⠉⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⠏");
console.log("⢀⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣿⣷⣤⣄⣀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋");
console.log("⢀⢀⢀⢀⢀⢀⢀⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⢀⢹⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⡇⢀⠈⠙⠛⠛⠛⠛⠛⠛⠻⣿⣿⣿⠇");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⢀⣸⣿⡇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢨⣿⣿");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⣾⣿⡿⠃⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⡏");
console.log("⢀⢀⢀⢀⢀⢀⢀⢀⠻⠿⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⣿⣿⡇");
var reviewMeme = readline.question("Will you review it with a positive score? (yes or no) ");
if(reviewMeme == "y" || reviewMeme == "yes") {
  // your code here
console.log("The site you reviewed it on disagrees with you. That meme is now dead. It's a January meme. You got blocked from the site.")
} else {
  // your code here
  if(reviewMeme == "n" || reviewMeme == "no") {
    // your code here
  console.log("The site you reviewed it on agrees with you. That meme is now dead. It's a January meme. Yippee!");
  }
}
console.log("Th͢O̵ǹ̕K̛S̛͝ F̶̧̛o̧͜Rr̢ PL͢҉a͝Nģ͜i̧͠n̛͠G͏̕͡!̢̀ ̸̧B͟͝͠u̷̢Y̢̨͝S̸ơ͟͡M̶e̕͘͝o̴̢f O̡uŖ̛͏ ͡T̨͜a̢S̸͟t͘y͝B͢ReD ̡T̸́W̶o̡͘ C͡R̵̕͝ǫ͜͝N̸͟c̴h.");
