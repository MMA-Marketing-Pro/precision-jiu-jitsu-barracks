const WEBHOOK_MAP = {
  'adult-bjj': [
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/b182e471-302d-43ee-a57f-7232d2bd300e',
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/d3d4b131-0f4b-458a-8593-ce5d3d7f232d'
  ],
  'kids-bjj-10-14': [
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/407f4901-8ff9-4f00-91a7-2d14c11eb09e',
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/281083ca-f460-4469-8b67-54a4590ab613'
  ],
  'kids-bjj-7-10': [
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/407f4901-8ff9-4f00-91a7-2d14c11eb09e',
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/281083ca-f460-4469-8b67-54a4590ab613'
  ],
  'muay-thai': [
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/50ac1e4d-bcd8-4b26-be86-6038a37571a2',
    'https://services.leadconnectorhq.com/hooks/WWCuYhXDYLUd3ZAapYIY/webhook-trigger/cc72d8aa-adc5-414c-b714-0fe557dc4109'
  ]
};

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://precisionjjbarracks.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function buildPayload(input) {
  return {
    firstName: clean(input.firstName),
    lastName: clean(input.lastName),
    email: clean(input.email),
    phone: clean(input.phone),
    program: clean(input.program)
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

async function forwardLead(url, payload) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return { ok: response.ok, status: response.status };
  } catch (error) {
    return { ok: false, status: 0 };
  }
}

export async function onRequest(context) {
  const method = context.request.method.toUpperCase();

  if (method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (method !== 'POST') {
    return jsonResponse({ ok: false, error: 'method_not_allowed' }, 405);
  }

  let input;
  try {
    input = await context.request.json();
  } catch (error) {
    return jsonResponse({ ok: false, error: 'invalid_json' }, 400);
  }

  const payload = buildPayload(input);
  const urls = WEBHOOK_MAP[payload.program];

  if (
    !urls ||
    !payload.firstName ||
    !payload.lastName ||
    !isValidEmail(payload.email) ||
    !isValidPhone(payload.phone)
  ) {
    return jsonResponse({ ok: false, error: 'invalid_lead' }, 400);
  }

  const results = await Promise.all(urls.map((url) => forwardLead(url, payload)));
  const sent = results.filter((result) => result.ok).length;

  if (sent === 0) {
    return jsonResponse({ ok: false, error: 'webhook_failed', results }, 502);
  }

  return jsonResponse({ ok: true, sent, total: urls.length });
}
