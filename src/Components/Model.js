import React from 'react'

function Model() {
    // this.setState((state, props) => { return { first }})

  return (
    <div>
        <button>x</button>
        <div className="title"><h1>Are you sure you want to continue?</h1></div>
        <div className="body"><p>Click Enter for fun</p> </div>
        <div className="footer">
            <button>Cancel</button>
            <button>Enter</button>
        </div>
    </div>
  )
}

export default Model