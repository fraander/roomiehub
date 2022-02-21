import './App.css';

const NewChoreModal = () => {
  return (
    <div style={{padding: 20}}>
      <fieldset>
        <legend><h2>Create new chore</h2></legend>

        <p>
          <span>Title: </span><input type="text"></input>
        </p>

        <p>
          <span>Due Date: </span><input type="date"></input>
        </p>

        <p>
          <span>Assignee: </span>
          <select>
            <option value="frank">Frank</option>
            <option value="veena">Veena</option>
            <option value="theo">Theo</option>
          </select>
        </p>

        <p>
          <p>Description: </p>
          <textarea name="description"></textarea>
        </p>

      </fieldset>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Roomie Hub</h1>
        <p>Keep track of chores with your roommates!</p>


        <NewChoreModal />
      </header>
    </div>
  );
}

export default App;
