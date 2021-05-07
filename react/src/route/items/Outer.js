import React from 'react';
import { useParams } from 'react-router-dom'

// const genderData = {
//     man: {
//         title: '남성 아우터'
//     },
//     woman: {
//         title: '여성 아우터'
//     }
// };

const Outer = (props) => {
    // const { match } = props
    // const { gender } = match.params
    // const data = genderData[gender]

    // if (!data) {
    //     return  <div>잘못된 data</div>
    // }
    // const params = useParams()
    // let { gender } = useParams()

    return (
        <div>
            { props.match.params.gender }'s outer
            {/* { data.title } */}
        </div>
    );
};

export default Outer;