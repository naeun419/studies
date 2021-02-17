import React, {useState, useEffect} from 'react'

// class Example extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             students: []
//         }
//     }
//     componentDidMount() {
//         this.setState({
//             students: require('./data').default
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 {
//                     this.state.students.filter((value) => {
//                         return value.age === 20
//                     })
//                     .map((value) => {
//                         return (
//                             <div style={{ width: '500px', border: '1px solid black' }}>
//                                 <h2>{`id : ${value.id}`}</h2>                                
//                                 <h3>{`name : ${value.name}`}</h3>
//                                 <h3>{`age : ${value.age}`}</h3>
//                                 <h3>{`intro : ${value.intro}`}</h3>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }



const Example = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(require('./data').default)
    }, [])

    return (
        <div>
            <h1>{props.title}</h1>
            {
                students
                .filter((value) => {
                    return value.age === 20
                })
                .map((value) => {
                    return (
                        <div style={{ width: '500px', border: '1px solid black' }}>
                            <h2>{`id : ${value.id}`}</h2>                                
                            <h3>{`name : ${value.name}`}</h3>
                            <h3>{`age : ${value.age}`}</h3>
                            <h3>{`intro : ${value.intro}`}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Example