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
## Usage ES5 standalone
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Reacomponents - Paginator ES5</title>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    </head>
    <body>
      <div id="the_paginator"></div>
      <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
      <script src="../../build/react-paginator.min.js"></script>
      <script>
        var Paginator = React.createFactory(ReactPaginator);

        window.onload = function () {
          var PaginatorComp = Paginator({
            current: 10,
            total: 1000,
            onPage:function(page){
              console.log("I should do something regarding page "+page);
            }
          });
          var container = document.getElementById('the_paginator');
          var l = ReactDOM.render(PaginatorComp, container);
        };
      </script>
    </body>
    </html>
```

## Usage ES6
```es6
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
```
