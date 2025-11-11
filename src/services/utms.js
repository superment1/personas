const UTM_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'];

function getQueryMap(search) {
  const q = new URLSearchParams(search || '');
  const o = {};
  for (const [k, v] of q.entries()) o[k] = v;
  return o;
}

function uniquePipe(values) {
  return Array.from(new Set((values || []).filter(Boolean))).join('|');
}

function collectInitialUTMs() {
  const urlQ = getQueryMap(window.location.search);
  const refQ = getQueryMap((document.referrer.split('?')[1] || ''));
  const refHost = document.referrer ? (() => { try { return new URL(document.referrer).hostname; } catch { return ''; } })() : '';

  const utms = {};
  UTM_KEYS.forEach((k) => {
    if (k === 'utm_source') {
      utms[k] = urlQ[k] || refQ[k] || refHost || 'direto';
    } else {
      utms[k] = urlQ[k] || refQ[k] || '';
    }
  });

  // sck = valores não vazios dos utm_ (e clids)
  utms.sck = uniquePipe(UTM_KEYS.map(k => utms[k]));
  return utms;
}

function loadPersistedUTMs() {
  try { return JSON.parse(sessionStorage.getItem('__utms__') || '{}'); }
  catch { return {}; }
}

function persistUTMs(u) {
  try { sessionStorage.setItem('__utms__', JSON.stringify(u || {})); } catch {}
}

function mergeQueryWithUTMs(query, utms) {
  const merged = Object.assign({}, query || {});
  UTM_KEYS.forEach((k) => {
    if (!merged[k] && utms[k]) merged[k] = utms[k];
  });
  if (!merged.sck && utms.sck) merged.sck = utms.sck;
  return merged;
}

function haveAnyUTM(query) {
  if (!query) return false;
  if ('sck' in query) return true;
  return UTM_KEYS.some(k => k in query);
}

export {
  UTM_KEYS,
  collectInitialUTMs,
  loadPersistedUTMs,
  persistUTMs,
  mergeQueryWithUTMs,
  haveAnyUTM
};
