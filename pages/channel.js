import Layout from '../components/Splash.js'
import fetch from 'isomorphic-unfetch'

export default class Stream extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stream: props.stream }
    this.fetchStream = this.fetchStream.bind(this)
  }

  static async getInitialProps(context) {
    const { name } = context.query
    const stream = await fetch(`https://api.twitch.tv/helix/streams?user_login=${name}`, {
      headers: { "Client-ID": "o3ldtpya38q9y4y5y6rg98gqycz3pt" }
    }).then(res => res.json())
    return { name: name, stream: stream }
  }

  fetchStream() {
    fetch(`https://api.twitch.tv/helix/streams?user_login=${this.props.name}`, {
      headers: { "Client-ID": "o3ldtpya38q9y4y5y6rg98gqycz3pt" }
    }).then(res => res.json())
      .then(json => this.setState({ stream: json }))
  }

  componentDidMount() {
    // Call the API every 5 seconds to keep the "Live viewers" output relatively live
    this.timerID = setInterval(this.fetchStream, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Layout>
        <iframe src={`https://player.twitch.tv/?channel=${this.props.name.toLowerCase()}`}></iframe>
        <p className="title">{this.state.stream.data[0].title}</p>
        <span>By: <span className="author">{this.props.name}</span></span>
        <span>Live viewers: <span className="viewers">{this.state.stream.data[0].viewer_count}</span></span>
      </Layout>
    )
  }
}
