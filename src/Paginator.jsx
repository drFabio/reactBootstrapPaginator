'use strict';

import React from 'react';

const Paginator = React.createClass({
    getDefaultProps(){
        return {
          max: 10,
          current: 1
        }
    }, 

    render(){
        let current = this.props.current;
        let total = this.props.total;
        let max = this.props.max;

        let start = Math.max(current - Math.round(max/2) ,1);

        let end = Math.min(start+max,total);
        if(end - start < max) {
            start = Math.max(1,end - max);
        }
        let hasLess = null;
        let previous = null;
        if(start != 1){
            hasLess = (
                <li ><a >...</a></li>
            );
            previous = (
                <li>
                  <a href="javascript:void(0)" >
                    <span className="glyphicon glyphicon-chevron-left" onClick={(e)=>this.props.onPage(start-1)}></span>
                  </a>
                </li>
            );
        }
        let hasMore =null;
        let next = null;
        if(end<total){
            hasMore =  (
                <li ><a  >...</a></li>
            );
            next = (
                <li>
                    <a href="javascript:void(0)" >
                        <span className="glyphicon glyphicon-chevron-right" onClick={(e)=>this.props.onPage(start+1)}></span>
                    </a>
                </li>
            );
        }
        let getLinks= (start,end)=>{
            const links = [];
            for(let i=start;i<=end;i++){
                let className = i==current?'active':'';
                links.push(<li key={i} className={className}><a href="javascript:void(0)" onClick={(e)=>this.props.onPage(i)}>{i}</a></li>);
            }
            return links;
        };
        return(
            <div className="text-center">
                <ul className="pagination">
                    {previous}
                    {hasLess}
                    {getLinks(start,end)}
                    {hasMore}
                    {next}
                </ul>
            </div>
        )
    }
})
require('./paginator.css');
export  default Paginator;