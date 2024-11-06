// pages/api/instagram.js
export default async function handler(req, res) {
  const accessToken = 'IGQWRNU0xmZAERJUkM2RWNzR3BlR3diaF9oeW5TMFh4eHJOQ1lfU25GTF95cnBCZA2tYajhSOUx1NHBzV1RJc3hQbWw4aHhUNjBZAUGtYalFPTGJ1MlgtMjFSb0F1c3lvNU1lbWx1NWx2cmdNalpxekR6R1F1amU3TXcZD'; // Replace with your access token
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${accessToken}`;

  try {
    const response = await fetch(url);

    // Check if the response is OK (status 200)
    if (!response.ok) {
      console.error('Instagram API Error:', response.statusText);
      return res.status(response.status).json({ error: 'Failed to fetch Instagram posts' });
    }

    const data = await response.json();
    res.status(200).json(data.data.slice(0, 12)); // Send only the first 12 posts
  } catch (error) {
    console.error('Error fetching data from Instagram API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
