// https://www.omnicalculator.com/finance/lcr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const LCRRadio = document.getElementById('LCRRadio');
const cashandcashequivalentsRadio = document.getElementById('cashandcashequivalentsRadio');
const marketablesecuritiesRadio = document.getElementById('marketablesecuritiesRadio');
const expected30dayscashoutflowsRadio = document.getElementById('expected30dayscashoutflowsRadio');

let LCR;
let cashandcashequivalents = v1;
let marketablesecurities = v2;
let expected30dayscashoutflows = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

LCRRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash and cash equivalents';
  variable2.textContent = 'Marketable securities';
  variable3.textContent = 'Expected 30-days cash outflows';
  cashandcashequivalents = v1;
  marketablesecurities = v2;
  expected30dayscashoutflows = v3;
  result.textContent = '';
});

cashandcashequivalentsRadio.addEventListener('click', function() {
  variable1.textContent = 'LCR';
  variable2.textContent = 'Marketable securities';
  variable3.textContent = 'Expected 30-days cash outflows';
  LCR = v1;
  marketablesecurities = v2;
  expected30dayscashoutflows = v3;
  result.textContent = '';
});

marketablesecuritiesRadio.addEventListener('click', function() {
  variable1.textContent = 'LCR';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Expected 30-days cash outflows';
  LCR = v1;
  cashandcashequivalents = v2;
  expected30dayscashoutflows = v3;
  result.textContent = '';
});

expected30dayscashoutflowsRadio.addEventListener('click', function() {
  variable1.textContent = 'LCR';
  variable2.textContent = 'Cash and cash equivalents';
  variable3.textContent = 'Marketable securities';
  LCR = v1;
  cashandcashequivalents = v2;
  marketablesecurities = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(LCRRadio.checked)
    result.textContent = `LCR = ${computeLCR().toFixed(2)}`;

  else if(cashandcashequivalentsRadio.checked)
    result.textContent = `Cash and cash equivalents = ${computecashandcashequivalents().toFixed(2)}`;

  else if(marketablesecuritiesRadio.checked)
    result.textContent = `Marketable securities = ${computemarketablesecurities().toFixed(2)}`;

  else if(expected30dayscashoutflowsRadio.checked)
    result.textContent = `Expected 30-days cash outflows = ${computeexpected30dayscashoutflows().toFixed(2)}`;
})

// calculation

// LCR = (cash and cash equivalents + marketable securities) / expected 30-days cash outflows

function computeLCR() {
  return ((Number(cashandcashequivalents.value) + Number(marketablesecurities.value)) / Number(expected30dayscashoutflows.value)) * 100;
}

function computecashandcashequivalents() {
  return ((Number(LCR.value) / 100) * Number(expected30dayscashoutflows.value)) - Number(marketablesecurities.value);
}

function computemarketablesecurities() {
  return ((Number(LCR.value) / 100) * Number(expected30dayscashoutflows.value)) - Number(cashandcashequivalents.value);
}

function computeexpected30dayscashoutflows() {
  return (Number(cashandcashequivalents.value) + Number(marketablesecurities.value)) / (Number(LCR.value) / 100);
}