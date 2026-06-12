export default function handler(req, res) {
  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const callbackUrl = `${protocol}://${host}/api/callback`;
  const url = `https://github.com/login/oauth/authorize?client_id=Ov23liKMgWFldHAuUUl9&scope=repo,user&redirect_uri=${encodeURIComponent(callbackUrl)}`;
  res.redirect(url);
}
