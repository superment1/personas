let cachedCurrency = null;

async function fetchJSON(url, timeoutMs = 2500) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json;
  } catch (e) {
    console.warn('[currency] Erro no fetch', url, e.message);
    return null;
  } finally {
    clearTimeout(t);
  }
}

function inferFromLocale() {
  const lang = (navigator?.language || 'en-US').toLowerCase();

  if (lang.includes('-br') || lang.startsWith('pt')) return 'BRL';
  if (lang.includes('-gb') || lang.includes('-uk')) return 'GBP';
  if (lang.includes('-ca')) return 'CAD';
  if (lang.includes('-eu') || lang.includes('-de') || lang.includes('-fr') || lang.includes('-es') || lang.includes('-it')) return 'EUR';

  return 'USD'; // padrão
}

function mapCountryToCurrency(cc) {
  const map = {
    BR: 'BRL', US: 'USD', CA: 'CAD', GB: 'GBP', UK: 'GBP',
    AU: 'AUD', NZ: 'NZD', EU: 'EUR', FR: 'EUR', DE: 'EUR', ES: 'EUR', IT: 'EUR',
    PT: 'EUR', IE: 'EUR', NL: 'EUR', BE: 'EUR', AT: 'EUR', FI: 'EUR', GR: 'EUR',
  };
  return map[cc?.toUpperCase()] || null;
}

export async function detectUserCurrency() {
  if (cachedCurrency) {
    console.log('[currency] usando cache:', cachedCurrency);
    return cachedCurrency;
  }
  const ipwho = await fetchJSON('https://ipwho.is/?fields=currency,country_code,success');
  if (ipwho?.success) {
    const code = ipwho?.currency?.code || mapCountryToCurrency(ipwho?.country_code);
    if (code && code.length === 3) {
      cachedCurrency = code.toUpperCase();
      console.log('[currency] detectado via ipwho.is →', cachedCurrency);
      return cachedCurrency;
    }
    console.warn('[currency] ipwho.is sem currency.code — tentando mapear country_code:', ipwho?.country_code);
  } else {
    console.warn('[currency] ipwho.is retornou success=false ou null');
  }

  cachedCurrency = inferFromLocale();
  console.log('[currency] fallback por idioma →', cachedCurrency);
  return cachedCurrency;
}