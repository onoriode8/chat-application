import React, { Component } from 'react';


const AsyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(response => {
                    this.setState({ component: response.default })
                })
                .catch(err => {
                    alert(err.message);
                });
        }

        render() {
            const C = this.state.component;

            return (
                C ? <C {...this.props} /> : null
            )
        }
    }
}

export default AsyncComponent;