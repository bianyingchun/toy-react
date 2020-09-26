import { createElement, render, Component } from './toy-react'
class MyComponent extends Component {
    render () {
        return <div>
            <h2>MyComponent</h2>
            {this.children}
        </div>
    }
}


render(<MyComponent class="c1" title="title"><div>abc</div></MyComponent>, document.body)