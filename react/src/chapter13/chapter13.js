const React = require('react')
const {Link} = require('react-router')

class Content extends React.Component {
    render() {
        return(
            <div>
                <h1>Node.University</h1>
                <div className="navbar navbar-default">
                    <ul className="nav nav-pils navbar-nav ">
                        <li className={(this.context.router.isActive('about')) ? 'active' : ''}>
                            <Link to="/about" activeClassName="active">
                                About
                            </Link>
                        </li>
                        <li className={(this.context.router.isActive('/post')) ? 'active' : ''}>
                            <Link to="/post" activeClassName="active">
                                Blog
                            </Link>
                        </li>
                            <li className={(this.context.router.isActive('/contact')) ? 'active' : ''}>
                                <Link to="/contact" activeClassName="active">
                                    Conctact us
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="active">
                                    Login
                                </Link>
                            </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}

Content.contextType = {
    router: React.Proptypes.object.isRequired
}
module.exports = Content