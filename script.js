let qnt;
let itens;
let consu;
let total = 0;
let prt;
let vlr;
let resp;
let resp1;
let i;
let j;
let k;

qnt = parseInt(prompt("Quantas pessoas estavam comendo?"));
itens = parseInt(prompt("Quantos itens foram pedidos?"));

var ps = [];
var pss = [];
var pssc = [];

for (i = 1; i <= qnt; i++) {
  pss[i] = prompt("Qual o nome da " + i + "ª pessoa?");
}

for (i = 1; i <= itens; i++) {
  prt = prompt("Qual o " + i + "º item?");

  vlr = parseFloat(prompt("Qual o valor do item: " + prt + "?"));

  consu = parseInt(prompt("Quantos consumiram esse prato?"));
  if (consu >= 1) {
    for (j = 1; j <= consu; j++) {
      pssc[j] = prompt("Qual o " + j + "º nome de quem consumiu " + prt + "?");

      for (k = 1; k <= qnt; k++) {
        var val = vlr / consu;
        if (pssc[j] === pss[k]) {
          if (isNaN(ps[k])) {
            ps[k] = val;
          } else {
            ps[k] += val;
          }
        }
      }
    }
  }
}

resp = prompt("Alguém irá pagar os 10%? [1]Sim [2]Não");

if (resp === "1") {
  resp1 = parseInt(prompt("Quantas pessoas irão pagar os 10%?"));
  if (resp1 !== 0) {
    for (i = 1; i <= resp1; i++) {
      pssc[i] = prompt("Qual o " + i + "º nome de quem irá pagar os 10%?");
      for (k = 1; k <= qnt; k++) {
        if (pssc[i] === pss[k]) {
          if (isNaN(ps[k])) {
            ps[k] = ps[k];
          } else {
            total = ps[k]/10
            ps[k] += total;
          }
        }
      }
    }
  }
}
for (i = 1; i <= qnt; i++) {
  if (pss[i]) {
    if (ps[i]==undefined) {
      ps[i] = 0
    }
    document.getElementById('div' + i).style.display = "block";
    document.getElementById('pss[' + i + ']').textContent = pss[i];
    document.getElementById('ps[' + i + ']').textContent = ps[i];
  }
}