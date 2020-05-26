'use strict';

const plnaSuma = 100000;
const polovica = 50000;

function canWeGo() {
  let message = '';
  if (osoba1.uspory + osoba2.uspory >= plnaSuma) {
    if (osoba1.uspory >= polovica && osoba2.uspory >= polovica) {
      message += `${osoba1.jmeno} a ${osoba2.jmeno} mozu ist na dovolenku. Obe nasetrili dost penazi. `
    }
    else {
      message += `${osoba1.jmeno} a ${osoba2.jmeno} mozu ist na dovolenku. `
      if (osoba1.uspory < polovica) {
        const dlh = polovica - osoba1.uspory;
        message += `${osoba1.jmeno} bude musiet po dovolenke splatit dlh ${dlh} korun. `
      }
      if (osoba2.uspory < polovica) {
        const dlh = polovica - osoba2.uspory;
        message += `${osoba2.jmeno} bude musiet po dovolenke splatit dlh ${dlh} korun. `
      }

    }
  }
  else {
    const chybi = plnaSuma - osoba1.uspory - osoba2.uspory;
    message += `${osoba1.jmeno} a ${osoba2.jmeno} nemozu ist na dovolenku. Dokopy im chyba ${chybi} korun. `;
    if (osoba1.uspory < polovica) {
      const rozdielJedna = polovica - osoba1.uspory;
      message += `${osoba1.jmeno} musi nasetrit este ${rozdielJedna} korun. `
    }
    if (osoba2.uspory < polovica) {
      const rozdielDva = polovica - osoba2.uspory;
      message += `${osoba2.jmeno} musi nasetrit este ${rozdielDva} korun. `
    }
  }
  return message;
}

// Test


let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

console.log(canWeGo(osoba1, osoba2))

let osoba1 = {
  jmeno: 'Alena',
  uspory: 50000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 49000
};

console.log(canWeGo(osoba1, osoba2))

let osoba1 = {
  jmeno: 'Alena',
  uspory: 50000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 50000
};

console.log(canWeGo(osoba1, osoba2))

let osoba1 = {
  jmeno: 'Alena',
  uspory: 30000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 30000
};

console.log(canWeGo(osoba1, osoba2))

let osoba1 = {
  jmeno: 'Alena',
  uspory: 51000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 49000
};

console.log(canWeGo(osoba1, osoba2))
