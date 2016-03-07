import Paginator from '../../../src/Paginator.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
        pages:{
             current: 10,
            total: 1000
        },
        pageClick(page){
            console.log("I should do something regarding page "+page);
        },
        render(){
            return(
               <Paginator current={this.pages.current} total={this.pages.total} max={this.max} onPage={this.pageClick}></Paginator>
            )
        }
});

ReactDOM.render(<App/>, document.getElementById('the_paginator'));
