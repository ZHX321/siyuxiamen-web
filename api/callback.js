export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = 'Ov23liKMgWFldHAuUUl9';
  const client_secret = '84a2aa4ad63cc12ea7cf1cb08f4662f19cc55218';

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).send(`Error: ${data.error_description}`);
    }

    const token = data.access_token;
    const content = `
      <script>
        const receiveMessage = (message) => {
          if (message.origin !== window.location.origin) return;
          window.opener.postMessage(
            'authorization:github:success:{"token":"${token}","provider":"github"}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(content);
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}
