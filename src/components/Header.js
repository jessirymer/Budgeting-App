import React from "react"
import {NavLink} from "react-router-dom"

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
    </div>
)

export default Header