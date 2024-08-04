import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Masthead = styled.header`
    display: flex;
    align-items: center;

    img {
        width: 100px;
    }
`

const Menu = styled.nav`

`

const HorizontalMenu = styled.div`
    display: flex;
    flex-direction: row;
`

const MenuItem = styled(Link)`
    font-size: 20px;
    font-weight: bold;
    padding: 1rem;
`

export function MainMenu() {
    const loggedIn = true;
    return (
          <Masthead>
            <Link to="/" ><img src={logo} className="App-logo" alt="logo" /></Link>
            <Menu>
                <HorizontalMenu>
                    <MenuItem to="/say">Say Stuff</MenuItem>
                    <MenuItem to="/hear">Hear Things</MenuItem>
                    <MenuItem to="/learn">Learn Junk</MenuItem>
                    {loggedIn ? 
                        <>
                        <MenuItem to="/me">Me</MenuItem>
                        <MenuItem to="/team">Team</MenuItem>
                        <MenuItem to="/logout">Log out</MenuItem>
                        </>
                        :
                        <MenuItem to="/login">Login</MenuItem>
                    }
                </HorizontalMenu>
            </Menu>
          </Masthead>
    )
}
