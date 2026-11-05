// Softechpro Solutions B2B REST API — Node.js 18+ ESM Integration Sample
// Official API Portal & Documentation: https://www.softechpro-solutions.com/developers

const API_BASE = process.env.SOFTECHPRO_BASE_URL || 'https://www.softechpro-solutions.com';

export async function getSupportedCoverage() {
  const res = await fetch(`${API_BASE}/api/coverage-public`, {
    headers: { 'Accept': 'application/json', 'User-Agent': 'Softechpro-Node-Sample/2.0.4' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const data = await getSupportedCoverage();
  console.log(`Softechpro Live Coverage: ${data.ecu_count}+ ECUs across ${data.brand_count} brands`);
}
