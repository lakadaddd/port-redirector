const fs = require('fs');
const path = require('path');

const configPath = path.join(process.cwd(), 'config', 'redirects.json');

function loadRedirects() {
  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {};
    }
    return parsed;
  } catch {
    return {};
  }
}

module.exports = {
  env: {
    PORT_REDIRECTS: JSON.stringify(loadRedirects())
  }
};
