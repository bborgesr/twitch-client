import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Splash.js'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {search: "", limit: 10, streams: []}
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleLimitChange = this.handleLimitChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)
    this.fetchStream = this.fetchStream.bind(this)
    Router.events.on('routeChangeStart', this.handleRouteChange)
  }

  static async getInitialProps(context) {
    const search = context.query.search === "" ? "''" : context.query.search
    return { search }
  }

  fetchStream(search, limit = this.state.limit) {
    fetch(`https://api.twitch.tv/kraken/search/streams?query=${search}&limit=${limit}`, {
      headers: { "Client-ID": "o3ldtpya38q9y4y5y6rg98gqycz3pt" }
    }).then(res => res.json())
      .then(json => this.setState({ streams: json.streams }))
  }

  handleRouteChange(url) {
    const search = url.substring(url.lastIndexOf("=") + 1)
    this.fetchStream(search)
  }

  componentDidMount() {
    const limit = localStorage.getItem('_limit')
    if (limit) this.setState({limit: limit})
    const search = this.props.search || this.state.search || "''"
    this.fetchStream(search, limit)
  }

  componentDidUpdate() {
    localStorage.setItem('_limit', this.state.limit)
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value })
  }

  handleLimitChange(e) {
    this.setState({ limit: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const search = this.state.search || "''"
    this.fetchStream(search)
    const href = `/?search=${search}`
    Router.push(href, href, { shallow: true })
  }

  render() {
    const streams = this.state.streams
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Search for streams"
              value={this.state.search}
              onChange={this.handleSearchChange} />
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={this.state.limit}
            onChange={this.handleLimitChange} />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {streams.map((stream) => (
            <li key={stream._id}>
              <p>{stream.channel.status}</p>
              <Link as={`/c/${stream.channel.name}`} href={`/stream?channel=${stream.channel.name}`}>
                <img src={stream.preview.medium} alt="stream" />
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
