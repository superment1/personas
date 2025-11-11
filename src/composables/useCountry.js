let cachedCurrency = null;
let cachedLocale = null;

export async function detectUserCurrency() {
  if (cachedCurrency) return cachedCurrency;

  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    cachedCurrency = data.currency || 'USD';
    return cachedCurrency == 'BRL' ? 'USD' : cachedCurrency;
  } catch (e) {
    console.warn('[currency] Falha ao detectar moeda, usando USD como padrão.', e);
    return (cachedCurrency = 'USD');
  }
}

export function getUserLocale() {
  if (cachedLocale) return cachedLocale;
  cachedLocale = navigator.language || 'en-US';
  return cachedLocale;
}

export function formatCurrency(value, currency = 'USD') {
  const locale = getUserLocale();
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

export async function autoFormatCurrency(value) {
  const currency = await detectUserCurrency();
  return formatCurrency(value, currency);
}

export async function getValues() {
    const currency = await detectUserCurrency();
    let values = { 
      discount: '',
      currentValue: '', 
      oldValue: '', 
      threeBottles: '', 
      sixBottles: '', 
      imagePath: '', 
      productId: '', 
      threeBottlesProductId: '', 
      sixBottlesProductId: ''
    };

    if (currency === 'CAD') {
      values.discount = '24%'
      values.oldValue = '$89';
      values.currentValue = '$68';
      values.threeBottles = '$42';
      values.sixBottles = '$38';
      values.imagePath = '/assets/NN1-CAD.webp';
    } else if (currency === 'GBP') {
      values.discount = '24%'
      values.oldValue = '£50';
      values.currentValue = '£38';
      values.threeBottles = '£28';
      values.sixBottles = '£20';
      values.imagePath = '/assets/NN1-GBP.webp';
    // } else if (currency === 'BRL') {
    //   values.oldValue = 'R$98';
    //   values.currentValue = 'R$87';
    //   values.threeBottles = 'R$73';
    //   values.sixBottles = 'R$65';
    //   values.imagePath = '/assets/NN1-CAD.webp';
    } else {
      values.discount = '20%'
      values.oldValue = '$60';
      values.currentValue = '$48';
      values.threeBottles = '$36';
      values.sixBottles = '$26';
      values.imagePath = '/assets/NN1-USD.webp';
    }

    return values;
}

export async function getValuesShopNow() {
    const currency = await detectUserCurrency();
    return  { 
      oneBottle: '/assets/group_467_tsl_desk1_' + currency +'.webp',
      threeBottles: '/assets/Selo_3_' + currency +'.png',
      sixBottles: '/assets/Selo_6_' + currency +'.png'
    };
}

export async function oldValue() {
    const currency = await detectUserCurrency();
}