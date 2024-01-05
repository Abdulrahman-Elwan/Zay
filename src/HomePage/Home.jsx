import React from 'react'
import {Container ,Row ,Col }  from 'react-bootstrap';
import "./Home.css"
import { Button } from 'react-bootstrap';
import { MdEmail, MdOutlineAddLocationAlt } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import FormCon from '../Form/FormCon';
const Home = () => {
  return (
    <>
    <section className='banner' id='home'>
      <Row>
        <Col>
          <p className='pp2'>
            <span>Zay</span>eCommerce
          </p>
          <h1>
            Tiny and Perfect eCommerce <br /> Template
          </h1>
          <p>
          Zay Shop is an eCommerce HTML5 CSS template with latest <br /> version of Bootstrap 5 (beta 1). 
          This template is 100% free <br /> provided by TemplateMo website.
          Image credits go to Freepik <br /> Stories, Unsplash and Icons 8.
          </p>
        </Col>
        <Col className='banner-img'>
            <img src="img\banner_img_02.jpg" alt="" />
        </Col>
      </Row>
    </section>
    <section className='about' id='about'>
      <Row>
        <Col>
          <h1>
            About Us
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </Col>
        <Col className='banner-img'>
            <img src="img\about-hero.svg" alt="" />
        </Col>
      </Row>
    </section>
    <section className='Categories' id='shop'>
      <Container>
        <h1>
        Categories of The Month
        </h1>
        <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum.
        </p>
        <Row>
          <Col>
            <img src="img\category_img_01.jpg" alt="" />
            <h2>
            Watches
            </h2>
            <Button variant="success">GO Shop</Button>
          </Col>
          <Col>
            <img src="img\category_img_02.jpg" alt="" />
            <h2>
            Shoes
            </h2>
            <Button variant="success">GO Shop</Button>
          </Col>
          <Col>
            <img src="img\category_img_03.jpg" alt="" />
            <h2>
            Accessories
            </h2>
            <Button variant="success">GO Shop</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='Featured'>
      <Container>
        <h1>
        Featured Product
        </h1>
        <p>
        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Row>
          <Col Col-sm-12 Col-md-4 >
            <img src="img\feature_prod_01.jpg" alt="" />
            <h2>
            Gym Weight
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
            </p>
          </Col>
          <Col Col-sm-12 Col-md-4 >
            <img src="img\feature_prod_02.jpg" alt="" />
            <h2>
            Cloud Nike Shoes
            </h2>
            <p>
            Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper
            </p>
          </Col>
          <Col Col-sm-12 Col-md-4 >
            <img src="img\feature_prod_03.jpg" alt="" />
            <h2>
            Summer Addides Shoes
            </h2>
            <p>
            Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section id='contact'>
      <FormCon />
    </section>
    <footer>
    <Container>
      <Row>
        <Col>
          <h2 className='h2-2'>
            Zay Shop
          </h2><hr />
          <address>
          <MdOutlineAddLocationAlt size={"35"} color={"#cfd6e1"} height={800}  /> 123 Consectetur at ligula 10660
          </address>
          <span className='phone'>
          <FaPhoneAlt size={"27"} color={"#cfd6e1"} height={800}/> +20 101 403 0658
          </span><br /><br />
          <span className='email'>
          <MdEmail size={"30"} color={"#cfd6e1"} height={800} />  amm18718f@gmail.com
          </span>
        </Col>
        <Col>
          <h2>
            Products
          </h2><hr />
          <ul>
            <li>Luxury</li>
            <li>Sport Wear</li>
            <li>Men's Shoes</li>
            <li>Women's Shoes</li>
            <li>Popular Dress</li>
            <li>Gym Accessories</li>
            <li>Sport Shoes</li>
          </ul>
        </Col>
        <Col>
          <h2>
            Further Info
          </h2><hr />
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Shop Locations</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </Col>
      </Row><hr />
      <Row>
        <Col>
          <span className='spa'><FaFacebook size={"30"} color={"#cfd6e1"} /></span>
          <span className='spa'><FaInstagram size={"30"} color={"#cfd6e1"} /></span>
          <span className='spa'><FaLinkedinIn size={"30"} color={"#cfd6e1"} /></span>
        </Col>
        <Col>
          <p className='pp1-1'>Copyright © 2021 Company Name | Designed by <u>TemplateMo</u></p>
        </Col>
      </Row>
    </Container>
    </footer>
    </>
  )
}

export default Home
