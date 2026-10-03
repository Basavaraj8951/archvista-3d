import { Component } from 'react'
export default class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (!this.state.error) return this.props.children
    return this.props.fallback || <div className="p-10 text-center"><h2 className="text-xl">Something broke on this page</h2><button className="mt-3 underline" onClick={() => this.setState({ error: null })}>Try again</button></div>
  }
}
