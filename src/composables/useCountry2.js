// geo.js
const GEO_COOKIE = 'country';
const GEO_LSKEY  = 'geo.country';
const ALLOWED    = ['US','UK','CA','BR'];

function norm(c) {
  c = String(c || '').toUpperCase();
  if (c === 'GB') c = 'UK';
  return ALLOWED.includes(c) ? c : 'US';
}

function getCookie(name) {
  const m = document.cookie.match('(?:^|; )' + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + '=([^;]*)');
  return m ? decodeURIComponent(m[1]) : null;
}
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days*864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Expires=${expires}; SameSite=Lax`;
}

function readCache() {
  try {
    const json = localStorage.getItem(GEO_LSKEY);
    return json ? JSON.parse(json) : null;
  } catch { return null; }
}
function writeCache(value, source) {
  try {
    localStorage.setItem(GEO_LSKEY, JSON.stringify({ value, ts: Date.now(), source }));
    console.log('[geo] persist ->', value, `(${source})`);
  } catch {}
}

export async function detectCountry({ ttlMinutes = 60*24*7 } = {}) {
  const now = Date.now();

  // 1) Querystring override
  const url = new URL(window.location.href);
  const q = url.searchParams.get('country');
  if (q) {
    const v = norm(q);
    writeCache(v, 'explicit');
    setCookie(GEO_COOKIE, v);
    console.log('[geo] querystring ->', v);
    return v;
  }

  // 2) Cookie
  const cCookie = getCookie(GEO_COOKIE);
  if (cCookie) {
    const v = norm(cCookie);
    writeCache(v, 'cookie');
    console.log('[geo] cookie ->', v);
    return v;
  }

  // 2.1) LocalStorage (com TTL)
  const cached = readCache();
  if (cached && (now - cached.ts) < ttlMinutes*60*1000) {
    console.log('[geo] cached ->', cached.value, `(${cached.source})`);
    return norm(cached.value);
  }

  // 3) Meta do servidor (opcional)
  const meta = document.querySelector('meta[name="x-geo-country"]');
  if (meta?.content) {
    const v = norm(meta.content);
    writeCache(v, 'server');
    setCookie(GEO_COOKIE, v);
    console.log('[geo] meta ->', v);
    return v;
  }

  // 4) Fallback idioma (último recurso)
  const lang = (navigator.language || '').toLowerCase();
  let guess = 'US';
  if (lang.startsWith('pt-br') || lang === 'pt') guess = 'BR';
  else if (lang.includes('en-gb') || lang.endsWith('-gb')) guess = 'UK';
  else if (lang.endsWith('-ca')) guess = 'CA';

  const v = norm(guess);
  writeCache(v, 'guess');
  setCookie(GEO_COOKIE, v);
  console.log('[geo] guess ->', v);
  return v;
}

// helper opcional: permite o usuário escolher o país manualmente (selector)
export function setCountry(country) {
  const v = norm(country);
  writeCache(v, 'explicit');
  setCookie(GEO_COOKIE, v);
  return v;
}

// helper para limpar (teste/debug)
export function clearCountry() {
  localStorage.removeItem(GEO_LSKEY);
  setCookie(GEO_COOKIE, 'US', -1); // expira cookie
}



// export async function detectCountry({ cacheKey = 'geo.country', ttlMinutes = 60 } = {}) {
//   const url = new URL(window.location.href);
//   const qCountry = (url.searchParams.get('country') || '').toUpperCase();
//   if (['US', 'UK', 'CA', 'BR', 'GB'].includes(qCountry)) {
//     const norm = normalizeCountry(qCountry);
//     persist(norm);
//     console.log('[geo] querystring override ->', norm);
//     return norm;
//   }
//   try {
//     const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
//     if (cached && (Date.now() - cached.ts) < ttlMinutes * 60 * 1000) {
//       console.log('[geo] cached ->', cached.value);
//       return cached.value;
//     }
//   } catch (err) {
//     console.warn('[geo] cache parse error:', err);
//   }
//   const meta = document.querySelector('meta[name="x-geo-country"]');
//   if (meta && meta.content) {
//     const norm = normalizeCountry(meta.content.toUpperCase());
//     persist(norm);
//     console.log('[geo] meta tag ->', norm);
//     return norm;
//   }
//   const lang = (navigator.language || '').toLowerCase();
//   console.log('[geo] fallback navigator.language ->', lang);

//   let guess = 'US';
//   if (lang.includes('pt')) guess = 'BR';
//   else if (lang.includes('en-gb') || lang.endsWith('-gb')) guess = 'UK';
//   else if (lang.endsWith('-ca')) guess = 'CA';
//   const norm = normalizeCountry(guess);
//   persist(norm);
//   console.log('[geo] guess ->', norm);
//   return norm;
//   function normalizeCountry(c) {
//     if (c === 'GB') return 'UK';
//     return ['US', 'UK', 'CA', 'BR'].includes(c) ? c : 'US';
//   }
//   function persist(value) {
//     try {
//       localStorage.setItem(cacheKey, JSON.stringify({ value, ts: Date.now() }));
//     } catch (err) {
//       console.warn('[geo] persist error:', err);
//     }
//   }
// }
