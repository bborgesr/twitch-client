import Layout from '../components/Splash.js'
import fetch from 'isomorphic-unfetch'

const Stream = (props) => (
  <Layout>
    <iframe src={`https://player.twitch.tv/?channel=${props.stream.data[0].user_name.toLowerCase()}`}>
    </iframe>
    <p>{props.stream.data[0].title}</p>
  </Layout>
)

Stream.getInitialProps = async function(context) {
  const { channel } = context.query
  const res = await fetch(`https://api.twitch.tv/helix/streams?user_login=${channel}`, {
    headers: { "Client-ID": "o3ldtpya38q9y4y5y6rg98gqycz3pt" }
  })
  const stream = await res.json()
  return { stream: stream }
}

export default Stream
