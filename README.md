# reactBootstrapPaginator
A contextual paginator on top of react and bootstrap

## What do you mean with contextual paginator?

I mean that it's presentation will change according to the context.

If you have the pages 1-10  , are on the first one and want to show 10 pages it will look like this:
![1_to_10](https://cloud.githubusercontent.com/assets/2636143/13376102/9acd464c-dd90-11e5-9e18-2035c6a12b95.png)

**Notice no left arrow or dots indicating more**

On 1-50 and you are on page 30 it would look like this:

![1-50](https://cloud.githubusercontent.com/assets/2636143/13376100/9ac9a96a-dd90-11e5-9774-0f48a88fb999.png)

**Notice both arrows , dots indicating more pages**

And if you are on the last page it will look like this:

![end](https://cloud.githubusercontent.com/assets/2636143/13376101/9acc64c0-dd90-11e5-9655-a30c765d8d6c.png)

**Notice no right arrow and no right dots**


## Usage ES6

```es6
    import Paginator from 'Paginator';
    import React from 'react';
    export const MyThing = React.createClass({
        pages:{
            current:100,
            max:20,
            total:1000
        }
        pageClick(page){
            console.log("I should do something regarding page "+page);
        },
        render(){
            return(
                <Paginator current={this.pages.current} total={this.pages.total} max={this.max} onPage={this.pageClick} />

            )
        }
});
```
