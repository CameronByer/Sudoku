import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SudokuGrid style="auto" />
    </View>
  );
}

class SudokuGrid extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*

class SudokuCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    if (event.target.value.length <= 1 && " 123456789".includes(event.target.value))
    {
      this.setState({value: event.target.value});
    }
  }
  
  render() {
    return (
      <input className="cell" type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}

class SudokuGrid extends React.Component {
  constructor(props) {
    super(props)
    let blankGrid = []
    for (let row = 0; row < 9; row++) {
      let blankRow = []
      for (let column = 0; column < 9; column++) {
        blankRow.push((Math.floor(row/3)+row*3+column)%9+1)
      }
      blankGrid.push(blankRow)
    }
    this.state = {grid: blankGrid}
  }
  
  render() {
    return (
      <table className="grid">
        {
          this.state.grid.map((row) =>
            <tr>
              {
                row.map((cell) =>
                  <td>
                    <SudokuCell value={cell}/>
                  </td>
                )
              }
            </tr>
          )
        }
      </table>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SudokuGrid />);

*/

/*

.cell {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.grid {
  border-spacing: 1px;
}

*/
