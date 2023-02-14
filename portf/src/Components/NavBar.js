/*
what this file do: 

Creating navbar on the top of the site .
See if the user scroll.
Forming how the navbar is working with btn's and link.
*/
import {Navbar, Container} from "react-bootstrap";
import { useState } from "react";

export const NavBar = () => 
{
    const[activeLink,setActiveLink] = useState('home');
    //change color when user scroll
    const[scroll, seScroll] = useState(false);

    useEffect(() =>
    {
        const onScroll = () =>
        {
            if (window.scrollY > 50) //to see if the user has scrolled
            {
                seScroll(true);
            }
            else
            {
            seScroll(false);  
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => 
    {
        setActiveLink(value)
    }

        return (
            <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <img src = {''} alt = "logo" />
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

    //Add links to the top navbar
                    <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} //home
                        onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>

                    <Nav.Link href="#Skills" className = {activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} // skills
                        onClick = {() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>  

                    <Nav.Link href="#Projects" className = {activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} //projects
                        onClick = {() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
                </Nav>


                <span className ="navbarText">
                <div className = "socialIcon">
    //Links to Socialmedia 
                    <a href ="#"><img src={''} alt="" /></a>
                    <a href ="#"><img src={''} alt="" /></a>
                    <a href ="#"><img src={''} alt="" /></a>
                </div>
                <button className = "contacktMe" onClick={() => console.log('connect')}
                    ><span>Let's connect</span></button>
                </span>

                    
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
}