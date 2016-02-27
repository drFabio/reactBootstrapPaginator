import React from 'react';

export const Paginator = React.createClass({
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
        let hasLess = null;
        let previous = null;
        if(start != 1){
            hasLess = (
                <li ><a >...</a></li>
            );
            previous = (
                <li>
                  <a href="#" aria-label="Previous">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" onClick="{this.onPage(start-1)}"></span>
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
                    <a href="#" aria-label="Next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    </a>
                </li>
            );
        }
        let getLinks= (start,end)=>{
            const links = [];
            for(let i=start;i<=end;i++){
                let className = i==current?'active':'';
                links.push(<li key={i} className={className}><a href="#" onClick="{this.onPage(i)}">{i}</a></li>);
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
require('./paginator.scss');