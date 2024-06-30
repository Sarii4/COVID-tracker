import { NavbarContainer, LogoContainer, NavLists, NavItem, NavList, Button } from "./navbar.styles"
import BurguerButton from "./burguer-button"
import logo from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()

    return (
        <NavbarContainer>
            <LogoContainer >
                <img src={logo} alt="logo covid" />
            </LogoContainer>
            <NavLists>
                <NavItem>
                    <NavList alt="Home">Home</NavList >
                </NavItem>
                <NavItem>
                    <NavList alt="Prevention">Prevention</NavList >
                </NavItem>
                <NavItem>
                    <NavList alt="Qurantine">Qurantine</NavList >
                </NavItem>
                <NavItem>
                    <NavList alt="Pages">Pages</NavList >
                </NavItem>
                <NavItem>
                    <NavList alt="About">About</NavList >
                </NavItem>
                <NavItem>
                    <NavList alt="Help">Help</NavList >
                </NavItem>
                <Button alt="Tracker" onClick={() => navigate("/tracker")}>Tracker</Button>
            </NavLists>
            <BurguerButton />

        </NavbarContainer>
    );
}

export default Navbar