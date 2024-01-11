import React, {MouseEvent} from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello. Im Vasya!')
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello. Im Ivan!')
    // }

    const onClickHandler = (name: string) => {
        console.log(`Hello. Im ${name}!`)
    }

    return (
        <div className="App">
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</button>*/}
            <button onClick={()=>onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={()=>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
        </div>
    );
}

export default App;
