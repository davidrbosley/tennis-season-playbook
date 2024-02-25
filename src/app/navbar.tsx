"use client";

import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  return (
    <header className="header">
      <Link className="nav-main-link" href="/">
        Tennis Playbook
      </Link>

      <nav className="nav-main">
        <ul className="nav-main-list">
          <li>
            <Link className="nav-main-link" href="/roster">
              Roster
            </Link>
          </li>
          <li>
            <Link className="nav-main-link" href="/library">
              Library
            </Link>
          </li>
          <li>
            <Link className="nav-main-link" href="/season">
              Season
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    // <Navbar
    //   bg="primary"
    //   variant="dark"
    //   sticky="top"
    //   expand="sm"
    //   collapseOnSelect
    // >
    //   <Container>
    //     <Navbar.Brand as={Link} href="/">
    //       Playbook
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="main-navbar" />
    //     <Navbar.Collapse id="main-navbar">
    //       <Nav>
    //         <Nav.Link as={Link} href="/roster" active={pathName === "/roster"}>
    //           Roster
    //         </Nav.Link>
    //         <Nav.Link
    //           as={Link}
    //           href="/library"
    //           active={pathName === "/library"}
    //         >
    //           Library
    //         </Nav.Link>
    //         <Nav.Link as={Link} href="/season" active={pathName === "/season"}>
    //           Season
    //         </Nav.Link>

    //         {/* <NavDropdown title="Topics" id="topics-dropdown">
    //           <NavDropdown.Item as={Link} href="/topics/fitness">
    //             Fitness
    //           </NavDropdown.Item>
    //           <NavDropdown.Item as={Link} href="/topics/dogs">
    //             Dogs
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link as={Link} href="/search" active={pathName === "/search"}>
    //           Search
    //         </Nav.Link> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}
