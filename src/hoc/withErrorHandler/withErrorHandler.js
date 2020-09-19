import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.req = axios.interceptors.request.use((req) => {
        this.setState({
          error: null,
        });
        return req;
      });

      this.res = axios.interceptors.response.use(res => res, (error) => {
        this.setState({
          error: error,
        });
      });
    }

    componentWillUnmount () {
        axios.interceptors.request.eject(this.req);
        axios.interceptors.response.eject(this.res);
    }

    clickedErrorHandler = () => {
      this.setState({
        error: null,
      });
    };

    render() {
      return (
        <Aux>
          <Modal animate={this.state.error} modalClosed={this.clickedErrorHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
