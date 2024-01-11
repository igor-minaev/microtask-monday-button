import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('Im stupid button')
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya', 20)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}
        </div>
    );
}

export default App;
