//首页
import React,{ Component } from 'react'
import ReactDOM from 'react-dom';
import BottomTab from '../component/tab/BottomTab'
export default class Index extends Component {
    constructor(props){
        super(props);
    }
    state = {
    }
    render() {
        return (
            <div>
                <BottomTab/>
            </div>
        )
    }
}