import './top-pants.css'
import React from 'react';
import { Route, Switch, Link, NavLink, useRouteMatch } from 'react-router-dom'
import Gender from './gender/Gender'
import NotFound from './NotFound'

const MaleTop = () => {
    return (
        <div>
            남성 상의
        </div>
    )
}

const FemaleTop = () => {
    return (
        <div>
            여성 상의
        </div>
    )
}

const Top = (props) => {
    const { match } = props

    const topMaleRouteMatch = useRouteMatch(`${match.path}/남성 상의`)
    const topFemaleRouteMatch = useRouteMatch(`${match.path}/여성 상의`)

    return (
        <div className = "top">       
            <h3>Top</h3>
            <div className = 'top-element-btn'>
                <ul>
                    <li className = 'top-li'>
                        <NavLink to = {`${match.url}/남성 상의`}>
                            <button>
                                남성
                            </button>
                        </NavLink>
                    </li>
                    <li className = 'top-li'>
                        <NavLink to = {`${match.url}/여성 상의`}>
                            <button>
                                여성
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {
                topMaleRouteMatch
                    ? <MaleTop match = { topMaleRouteMatch } />
                    : topFemaleRouteMatch
                        ?  <FemaleTop match = { topFemaleRouteMatch } />
                        : null
            }
        </div>
    );
};

export default Top;