import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { io } from "socket.io-client";
import UserCard from '../../components/User/UserCard'
import Pagination from '../../components/Helper/Pagination'
export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [],
        totalUsers: 0,
        currentPage: 1,
        perPage: 4,
        showUserAdded: false,
    };
  }
componentDidMount() {
    this.loadUsers(1);
    const socket = io(this.props.apiBaseUrl);
    socket.on("user-added", data => {
        //console.log('user added')
        this.setState({ showUserAdded: true });
        setTimeout(() => {
            this.setState({ showUserAdded: false });
        }, 1000);
        this.loadUsers(this.state.currentPage);
    });
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
        const users = resData.rows.map(o => {
          o.dateString = new Date(o.createdAt).toDateString();
          return o;
        })
        this.setState({
          users: users,
          totalUsers: resData.count,
          currentPage: page,
        });
      })
    .catch(err => {
        console.log(err)
    });
  };
    render() {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-sm-12" style={{ paddingTop: "50px" }}>
              {this.state.showUserAdded && <p>New User!!!</p>}
              <h5>Total: {this.state.totalUsers}</h5>
            </div>
            {this.state.users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
            <div className="col-sm-12" style={{ marginTop: "15px" }}>
              <Pagination
                total={this.state.totalUsers}
                currentPage={this.state.currentPage}
                perPage={this.state.perPage}
                changePage={this.loadUsers}
              />
            </div>
          </div>
          {this.props.children}
        </React.Fragment>
      );
  }
}