import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBalanceScale } from 'react-icons/fa';

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
                    <div className="icon">
                        <FaBalanceScale size={30} color="#0D2538" />
                    </div>
                        
                    <h1 onClick={scrollToTop}>
                        Bestana Sociedade de Advogados
                    </h1>
                </div>
                <nav className="content-menu">
                    <Ul open={open}>
                        <li className="nav-item">
                            <Link
                            activeClass="active"
                            to="sobrenos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                            Sobre nós
                            </Link>
                        </li>
    
                        <li>
                            <Link
                            activeClass="active"
                            to="equipe"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                            Equipe
                            </Link>
                        </li>

                        <li>
                            <Link
                            activeClass="active"
                            to="area"
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
                            to="contato"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            >
                            Contato
                            </Link>
                        </li>

                        <li>
                            <Link
                            activeClass="active"
                            to="links"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            >
                            Links úteis
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