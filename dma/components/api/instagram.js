// pages/api/instagram.js'
// import token from .env file
const instaToken = process.env.INSTA_TOKEN;
// pages/api/instagram.js
export default async function handler(req, res) {
  const accessToken = instaToken; // Replace with your access token
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${accessToken}`;

  try {
    const response = await fetch(url);

    // Log the entire response to ensure you are receiving the correct data
    const text = await response.text(); // Read as text for debugging
    console.log('Response Text:', text); // Log response for troubleshooting

    // Check if the response is OK (status 200)
    if (!response.ok) {
      console.error('Instagram API Error:', response.statusText);
      return res.status(response.status).json({ error: 'Failed to fetch Instagram posts' });
    }

    // Try parsing the response text to JSON
    const data = JSON.parse(text);
    console.log('Fetched Data:', data); // Log data object for debugging

    // Send only the first 12 posts, if available
    if (data.data && data.data.length > 0) {
      res.status(200).json(data.data.slice(0, 12));
    } else {
      console.error('No posts available or incorrect data format');
      res.status(404).json({ error: 'No posts available' });
    }
  } catch (error) {
    console.error('Error fetching data from Instagram API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
