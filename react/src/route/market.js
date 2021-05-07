import './market.css'
import React from 'react';
import { Route, Switch, Link, NavLink, useRouteMatch } from 'react-router-dom'

import Main from './items/Main'
import Brandnew from './items/Brandnew'
import Shoes from './items/Shoes'
import Outer from './items/Outer'
import Top from './items/Top'
import Pants from './items/Pants'
import NotFound from './items/NotFound'

const Market = () => {
    const mainRouteMatch = useRouteMatch({
        path: '/',
        exact: true
    })
    const brandnewRouteMatch = useRouteMatch('/Brandnew')
    const outerRouteMatch = useRouteMatch({
        path: '/outer/:gender',
        sensitive: true
    })
    const topRouteMatch = useRouteMatch('/Top')
    const pantsRouteMatch = useRouteMatch('/Pants')
    const shoesRouteMatch = useRouteMatch('/Shoes')

    return (
        <div className = 'wrapper'>
            <header className = 'header'>
                <a className = 'title'>
                    Market
                </a>
            </header>
            <div className = 'aside-and-main'>
                <aside className = 'aside'>
                    <ul className = 'menu'>
                        <li>
                            <NavLink
                                className = 'navlink'
                                to = '/brandnew'
                                activeClassName = 'clicked'>
                                    2021 F/W brandnew
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className = 'navlink'
                                to = '/top'
                                activeClassName = 'clicked'>
                                    top
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className = 'navlink'
                                to = '/pants'
                                activeClassName = 'clicked'>
                                    pants
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className = 'navlink'
                                to = '/shoes'
                                activeClassName = 'clicked'>
                                    shoes
                            </NavLink>
                        </li>
                        <h4>
                            outer
                            <li>
                                <NavLink
                                    className = 'navlink'
                                    to = '/outer/man'
                                    activeClassName = 'clicked'>
                                        man
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className = 'navlink'
                                    to = '/outer/woman'
                                    activeClassName = 'clicked'>
                                        woman
                                </NavLink>
                            </li>
                        </h4>
                    </ul>
                </aside>
                <main className = 'main'>
                    {
                        brandnewRouteMatch
                            ? <Brandnew match = { brandnewRouteMatch } />
                                : topRouteMatch
                                ? <Top match = { topRouteMatch } />
                                    : pantsRouteMatch
                                    ? <Pants match = { pantsRouteMatch } />
                                        : shoesRouteMatch
                                        ? <Shoes match = { shoesRouteMatch } />
                                            : outerRouteMatch
                                                ? <Outer match = { outerRouteMatch } />
                                                : mainRouteMatch
                                                    ? <Main match = { mainRouteMatch } />
                                                    : <NotFound />
                    }

                </main>
            </div>
            <footer className = 'footer'>
                <p className = 'footer-msg'>
                    made by naeun
                </p>
            </footer>
        </div>
    );
};

export default Market;