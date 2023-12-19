//1-misol
/**let a=+prompt("1-son");
let b=+prompt("2-son");
let c=+prompt("3-son");
switch (a,b,c) {
    case a:
    case b:
    case c:
      if (a>b) {
        max=a
      } else{
        max=b
      } 
      if (max<c) {
        max=c
      }
        break;

    default:
        break;
}
console.log(max); */

//2-misol
/**let n=+prompt("ikki honali son");
let a=Math.trunc(n/10);
let b=n%10;
switch (a,b) {
    case 1:
        console.log("o'n");
        break;
    case 2:
        console.log("yigirma");
        break;
    case 3:
        console.log("o'ttiz");
        break;
    case 4:
        console.log("qirq");
        break;
    case 5:
        console.log("ellik");
        break;
    case 6:
        console.log("oltmish");
        break;
    case 7:
        console.log("yetmish");
        break;
    case 8:
        console.log("sakson");
        break;
    case 9:
        console.log("to'qson");
        break;
    

    default:
        break;
}
switch (b) {
    case 1:
        console.log("bir");
        break;
    case 2:
        console.log("ikki");
        break;
    case 3:
        console.log("uch");
        break;
    case 4:
        console.log("to'rt");
        break;
    case 5:
        console.log("besh");
        break;
    case 6:
        console.log("olti");
        break;
    case 7:
        console.log("yetti");
        break;
    case 8:
        console.log("sakkiz");
        break;
    case 9:
        console.log("to'qqiz");
        break;
    

    default:
        break;
} */
//yonma yon yozolmadim

//3-misol
/**let n=+prompt("son");
let hisob=0;
switch (n) {
    case n:
        for (let i = 2; i <=n; i++){
            hisobJ=0;
            for (let j = 1; j <=i; j++) {
                if (i%j==0) {
                    hisobJ+=1
                }                
            }
           if (hisobJ==2) {
            hisob+=1
           }
        }
        
        break;

    default:
        break;
}
console.log(hisob); */

//4-misol
/**let n=+prompt("son");
let hisob=0;
switch (n) {
    case n:
        for (let i = 1; i <=n; i++){
           if (n%i==0) {
            hisob+=1
           }
         
        }
        break;

    default:
        break;
}
console.log(hisob); */

//5-misol
/**let n=+prompt("son");
let hisob=0;
switch (n) {
    case n:
        if (n%15==0) {
            hisob=n**2
        }else{
            hisob=n**3
        }
        break;

    default:
        break;
}
console.log(hisob); */

//6-misol
/**let n=+prompt("ikki honali son");
let m=+prompt("ikki honali son");

let a=Math.trunc(n/10);
let b=n%10;
let c=Math.trunc(m/10);
let d=m%10;
let nK;
let mK;
switch (n) {
    case a:
    case b:
    case c:
    case d:
        nK=a*b;
        mK=c*d;
        
        break;

    default:
        break;
}
if (nK>mK) {
    console.log(n);
}else{
    console.log(m);
} */

//7-misol
let n=+prompt("son");
let hisob=0;
switch (n) {
    case n:
        for (let i = 1; i <=n; i++) {
          if (n%i==0) {
            hisob+=1;
          }
            
        }
        break;

    default:
        break;
}
if (hisob==2) {
    console.log("tub");
}else{
    console.log("tub emas");
}