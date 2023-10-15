import React from "react"


const asyncComponent = (importComponent) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                component: null
            }
        };

    componentDidMount() {
        importComponent()
            .then(response => {
                this.setState({ component: response.default })
            })
    }
    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }
};

export default asyncComponent;