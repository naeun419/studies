import './top-pants.css'
import React from 'react';
import { Route, Switch, Link, NavLink, useRouteMatch } from 'react-router-dom'
import Gender from './gender/Gender'

const MalePants = () => {
    return (
        <div>
            남성 하의
        </div>
    )
}

const FemalePants = () => {
    return (
        <div>
            여성 하의
        </div>
    )
}

const Pants = (props) => {
    const { match } = props

    const pantsMaleRouteMatch = useRouteMatch(`${match.path}/남성 하의`)
    const pantsFemaleRouteMatch = useRouteMatch(`${match.path}/여성 하의`)

    return (
        <div className = "top">       
            <h3>Pants</h3>
            <div className = 'top-element-btn'>
                <ul>
                    <li className = 'top-li'>
                        <NavLink to = {`${match.url}/남성 하의`}>
                            <button>
                                남성
                            </button>
                        </NavLink>
                    </li>
                    <li className = 'top-li'>
                        <NavLink to = {`${match.url}/여성 하의`}>
                            <button>
                                여성
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </div>
            {
                pantsMaleRouteMatch
                    ? <MalePants match = { pantsMaleRouteMatch } />
                    : pantsFemaleRouteMatch
                        ?  <FemalePants match = { pantsFemaleRouteMatch } />
                        : null
            }
        </div>
    );
};

export default Pants;