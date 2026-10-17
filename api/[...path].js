// Static Vercel deployment: the local data-provider APIs (server/providers)
// run as Vite middleware and are not available here. Answer with the same
// JSON 404 shape the preview server uses so layers fail cleanly.
export default function handler(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      error: 'not_found',
      message: 'Data-provider APIs are not available in this static deployment.',
      path: req.url,
    }),
  );
}
