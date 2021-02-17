import React, {useState, useEffect} from 'react';

// class HookExample extends React.Component {
//     confirmLeave(e) {
//       let confirmationMessage = 'Do you really want to close?'
//       e.returnValue = confirmationMessage     // Gecko, Trident, Chrome 34+
//       return confirmationMessage              // Gecko, WebKit, Chrome <34
//     }
//     componentDidMount() {
//       console.log('Attaching confirmLeave event listener for beforeunload')
//       window.addEventListener('beforeunload', this.confirmLeave)
//     }
//     componentWillUnmount() {
//       console.log('Removing confirmLeave event listener for beforeunload')
//       window.removeEventListener('beforeunload', this.confirmLeave)
//     }
//     render() {
//       console.log('Render')
//       return <div>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</div>
//     }
//   }

const HookExample = () => {
    const [users, setUsers] = useState(0);

    useEffect(() => {
        fetch('data-url')
        .then((response) => response.json())
        .then((users) => setUsers({users: users}))
    }, [users])

    return (
        <div className="container">
            <h1>List of Users</h1>
            <table className="table-striped table-condensed table table-bordered table-hover">
                {/* <tbody>{users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.first_name} {user.last_name}</td>
                        <td> {user.email}</td>
                        <td> {user.ip_address}</td>
                    </tr>)}
                </tbody> */}
            </table>
        </div>
    )

}

export default HookExample