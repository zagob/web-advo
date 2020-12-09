import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { 
    Container, 
    StyledBurger,
    Ul,
} from './styles';
const Navbar: React.FC = () => {
  function scrollToTop() {
      scroll.scrollToTop();
  }
    const [open, setOpen] = useState(false);
    
    return (
        <Container open={open}>
            {/* <Nav> */}
            <div className="content">
                <div className="logo">
                    <h1 onClick={scrollToTop}>Logo</h1>
                </div>
                <nav className="content-menu">
                    <Ul open={open}>
                        <li>
                            <Link
                            activeClass="active"
                            to="sobrenos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            >
                            Sobre nós
                            </Link>
                        </li>
    
                        <li>
                            <Link
                            activeClass="active"
                            to="sobrenos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            >
                            Equipe
                            </Link>
                        </li>

                        <li>
                            <Link
                            activeClass="active"
                            to="sobrenos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            >
                            Áreas de atuação
                            </Link>
                        </li>

                        <li>
                            <Link
                            activeClass="active"
                            to="sobrenos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            >
                            Links úteis
                            </Link>
                        </li>

                        <li>
                            <Link
                            activeClass="active"
                            to="sobrenos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            >
                            Contato
                            </Link>
                        </li>
                    </Ul>
                </nav>

                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </StyledBurger>
            </div>
            {/* </Nav> */}
        </Container>
    );
}

export default Navbar;