class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
         to="Ringo"
         from="Paul"
         bangs={4}
         img="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60"
        />
         
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))