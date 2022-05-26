import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

import scrollbar from "./footerscrolbar.css"

const Footer = () => {
    return (
        <Box >
            <h1 style={{
                
                color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Erka React Bootcamp
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="https://www.erkagrubu.com/tr-tr" target={"_blank"}>Who Are We</FooterLink>
                        <FooterLink href="https://www.linkedin.com/in/furkan-tasdemir/" target={"_blank"}>Who Am I</FooterLink>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Uttar Pradesh</FooterLink>
                        <FooterLink href="#">Ahemdabad</FooterLink>
                        <FooterLink href="#">Indore</FooterLink>
                        <FooterLink href="#">Mumbai</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;