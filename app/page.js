const redirectConfig = process.env.PORT_REDIRECTS || '{}';

function getPorts() {
  try {
    const parsed = JSON.parse(redirectConfig);

    return Object.entries(parsed)
      .filter(([port, destination]) => {
        return (
          /^\d+$/.test(port) &&
          Number(port) >= 1 &&
          Number(port) <= 65535 &&
          typeof destination === 'string' &&
          /^https?:\/\//i.test(destination)
        );
      })
      .map(([port, destination]) => ({ port, destination }));
  } catch {
    return [];
  }
}

export default function HomePage() {
  const ports = getPorts();

  return (
    <main className="page">
      <section className="container">
        <div className="hero">
          <div className="badge">LIVE</div>
          <h1>Port Redirector</h1>
          <p>Open any configured service in one click.</p>
        </div>

        {ports.length === 0 ? (
          <div className="empty">
            <h2>No ports configured</h2>
            <p>Add entries to <code>config/redirects.json</code> or set <code>PORT_REDIRECTS</code> in Vercel.</p>
          </div>
        ) : (
          <div className="port-grid">
            {ports.map(({ port, destination }) => (
              <a className="port-card" href={`/go/${port}`} key={port}>
                <div className="port-number">:{port}</div>
                <div className="port-destination">{destination}</div>
                <div className="open-link">Open →</div>
              </a>
            ))}
          </div>
        )}

        <footer>
          {ports.length} configured port{ports.length === 1 ? '' : 's'}
        </footer>
      </section>
    </main>
  );
}
