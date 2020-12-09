const UserCard = (props) => {
    return (
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.user.name}</h5>
            <p className="card-text">{props.user.email}</p>
            <p className="card-text">{props.user.dateString}</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
}
export default UserCard;