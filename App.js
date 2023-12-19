const heading = React.createElement(
                  "div", 
                  {id: 'parent', abc: 'xyz'}, 
                  [
                    React.createElement(
                      "div",
                      {id: 'child'},
                      [
                        React.createElement(
                          "h1",
                          {id: 'heading1'},
                          "I'm a h1 heading"
                        ),
                        React.createElement(
                          "h2",
                          {id: 'heading2'},
                          "I'm a h2 heading"
                        )
                      ]
                    ),
                    React.createElement(
                      "div",
                      {id: 'child'},
                      [
                        React.createElement(
                          "h3",
                          {id: 'heading3'},
                          "I'm a h3 heading"
                        ),
                        React.createElement(
                          "h1",
                          {id: 'heading1'},
                          "I'm a h1 heading"
                        )
                      ]
                    )
                  ]
                  )
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
console.log(root);
