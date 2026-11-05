// Softechpro Solutions v2.0.4 — Node.js 18+ ESM Coverage & API Client
// Official Portal: https://www.softechpro-solutions.com/developers
const API_BASE = process.env.SOFTECHPRO_BASE_URL || 'https://www.softechpro-solutions.com';

export async function getSupportedCoverage() {
  const res = await fetch(`${API_BASE}/api/coverage-public`, {
    headers: { 'Accept': 'application/json', 'User-Agent': 'Softechpro-Node-SDK/2.0.4' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
