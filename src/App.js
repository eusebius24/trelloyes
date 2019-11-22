import React from 'react';
import List from './composition/List';
import './App.css';
import Store from './store';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      store: Store
    }
  }
  static defaultProps = {store: []}

  handleDeleteItem = (id) => {
    console.log("delete item clicked!", {id});
   
  } 
  
  handleAddRandomCard = (id) => {
    console.log("add random card clicked!", {id});
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
   this.setState({
     const list = this.state.allCards.concat(newRandomCard);
     return {allCards: list}
   })
  }    
  render () {
  return (
    
     <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>{/* content goes here */}
        {this.state.store.lists.map(list => 
        <List 
          header={list.header} 
          cards={list.cardIds.map(id => this.state.store.allCards[id])} 
          key={list.id}
          id={list.id}
          onDeleteItem = {this.handleDeleteItem}
          onAddRandomCard = {this.handleAddRandomCard}
          />
        )}
        </div>
        
      </main>
   
  );
 }
}

export default App;
