import React from 'react';
import UserCard from '../../components/User/UserCard'
export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [],
        totalUsers: 0,
        currentPage: 1,
    };
  }
componentDidMount() {
    this.loadUsers(1);    
}
  loadUsers = (page) => {
    const url = `${this.props.apiBaseUrl}/user/user-list?page=${page}`;
    fetch(url, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch users.");
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({
          users: resData.rows,
          totalUsers: resData.count,
        });
      })
    .catch(err => {
        console.log(err)
    });
  };
    render() {
      return (
          <div className="row">
          <div className="col-sm-12" style={{ paddingTop: '50px'}}>
            <h5>Total: {this.state.totalUsers}</h5>
          </div>
          {this.state.users.map((user) => (
              <UserCard user={user} key={ user.id }/>
          ))}
          <div className="col-sm-12"></div>
        </div>
      );
  }
}