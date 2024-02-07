import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { details: [], }

  componentDidMount() {
    axios.get('http://localhost:8000')
      .then(res => {
        this.setState({
          details: res.data
        });
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }

  render() {
    return (
      <div>
        <header>Data Generated From Django</header>
        <hr></hr>
        {this.state.details.map((output, id) => ( // Correct arrow function syntax
          <div key={id}>
            <div>
              <h2>{output.employee}</h2> {/* Access properties directly from 'output' */}
              <h3>{output.department}</h3> {/* Access properties directly from 'output' */}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
