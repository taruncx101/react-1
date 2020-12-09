import React from 'react';
import {
  useParams
} from "react-router-dom";

  function withMyHook(Component) {
    return function WrappedComponent(props) {
      const routeParams = useParams();
      return <Component {...props} routeParams={routeParams} />;
    };
  }
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    const id = this.props.routeParams.id;
    console.log(id)
    /**need to call an api and set the user */
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          {this.state.user ? <React.Fragment>
          <h5>User Detail:</h5>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.state.user.name}</h5>
              <p className="card-text">{this.state.user.email}</p>
            </div>
          </div>            
          </React.Fragment> :
          <h5>User not found!!!</h5>}
        </div>
      </div>
    );
  }
}

export default withMyHook(UserDetail);