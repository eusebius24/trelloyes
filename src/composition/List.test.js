import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const testCard = {
        key: '1',
        title: 'First card',
        content: 'Lorem ipsum'
    }
    ReactDOM.render(<List header='First list' cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List header='First list' cards={[]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});