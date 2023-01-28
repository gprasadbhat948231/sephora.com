import React from 'react'
import {FormControl, Input,Box, FormLabel, Button, SimpleGrid } from '@chakra-ui/react';
import usflag from '../Components/Navbarimg/usflag.png';
import canadaflag from '../Components/Navbarimg/canada.png';
import { FaFacebookF, FaInstagram, FaPinterest, FaSnapchat, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer-container'>
            <SimpleGrid columns={[1,2,3,5]} gap='10px' width='80%' margin={'auto'} className='nthchld' paddingTop={'20px'}>
                <div className='list-container'>
                    <NavLink to="/"><h3>About Nemow</h3></NavLink>
                    <NavLink to="/"><ul>About Nemow</ul></NavLink>
                    <NavLink to="/"><ul>Newsroom</ul></NavLink>
                    <NavLink to="/"><ul>Careers</ul></NavLink>
                    <NavLink to="/"><ul>Nemow Values</ul></NavLink>
                    <NavLink to="/"><ul>Supply Chair Transparency</ul></NavLink>
                    <NavLink to="/"><ul>Affiliates</ul></NavLink>
                    <NavLink to="/"><ul>Nemow Events</ul></NavLink>
                    <NavLink to="/"><ul>Gift Card</ul></NavLink>
                    <NavLink to="/"><ul>Nemow Global Sites</ul></NavLink>
                    <NavLink to="/"><ul>Diversity,Equity & Inclusion</ul></NavLink>
                    <NavLink to="/"><ul>Checkout on Instagram</ul></NavLink>
                    <NavLink to="/"><ul>Nemow Accelerate</ul></NavLink>
                    <NavLink to="/"><ul>Report a vulnerability</ul></NavLink>
                </div>
                <div className='list-container'>
                    <NavLink to='/'><h3>My Nemow</h3></NavLink>
                    <NavLink to='/'><ul>Beauty Insider</ul></NavLink>
                    <NavLink to='/'><ul>Nemow Credit Card</ul></NavLink>
                    <NavLink to='/'><ul>Community Profile</ul></NavLink>
                    <NavLink to='/'><ul>Order Status</ul></NavLink>
                    <NavLink to='/'><ul>Purchase History</ul></NavLink>
                    <NavLink to='/'><ul>Account Settings</ul></NavLink>
                    <NavLink to='/'><ul>Beauty Advisor Recommendation</ul></NavLink>
                    <NavLink to='/'><ul>Beauty Offers</ul></NavLink>
                    <NavLink to='/'><ul>Quizes and Buying guides</ul></NavLink>
                    <NavLink to='/'><ul>Rewards Bazaar</ul></NavLink>
                    <NavLink to='/'><ul>Loves</ul></NavLink>
                    <NavLink to='/'><ul>Book a reservation</ul></NavLink>
                </div>
                <div className='list-container'>
                    <NavLink to="/"><h3>Help</h3></NavLink>
                    <NavLink to="/"><ul>Customer Service</ul></NavLink>
                    <NavLink to="/"><ul>Returns & Exchange</ul></NavLink>
                    <NavLink to="/"><ul>Delivery & Pickup Option</ul></NavLink>
                    <NavLink to="/"><ul>Shipping</ul></NavLink>
                    <NavLink to="/"><ul>Billing</ul></NavLink>
                    <NavLink to="/"><ul>International Shippment</ul></NavLink>
                    <NavLink to="/"><ul>Beauty Services FAQ</ul></NavLink>
                    <NavLink to="/"><ul>Nemow at Kohl's</ul></NavLink>
                    <NavLink to="/"><ul>Nemow inside JCPenny</ul></NavLink>
                    <NavLink to="/"><ul>Store Location</ul></NavLink>
                    <NavLink to="/"><ul>Online Ordering</ul></NavLink>
                    <NavLink to="/"><ul>Klarna & Afterpay</ul></NavLink>
                    <NavLink to="/"><ul>Accessability</ul></NavLink>
                </div>
                <div className='list-container'>
                    <h3>Region & Language</h3>
                    <div>
                        <img src={usflag} alt='usaflag' />
                        <ul>United State-English</ul>
                    </div>
                    <div>
                        <img src={canadaflag} alt='canada flag' />
                        <ul>Canada-English</ul>
                    </div>
                    <div>
                        <img src={canadaflag} alt='canada flag' />
                        <ul>Canada - Français</ul>
                    </div>
                </div>
                <SimpleGrid columns={[1,2,2,1]} gap='10px' width={'auto'}>
                    <Box>
                        <h2>We Belong to</h2>
                        <h2>Something Beautiful</h2>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>Signup for Nemow Emails</FormLabel>
                            <Input type='email' placeholder='Enter your email Address' background={'white'} color='black'/>
                            <Button bg={'black'} width='100%' borderRadius='50px' marginTop='15px' border='1px solid white'>Signup</Button>
                        </FormControl>
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
            <hr style={{width:'83%',margin:'auto'}}/>
            <SimpleGrid columns={[1,1,2]} margin='auto' width={'80%'} padding='15px'>
                    <div className='bottom-footer-left'>
                        <p>© 2022 Sephora USA, Inc. All rights reserved.</p>
                        <SimpleGrid columns={[2,3,6]}>
                            <p style={{fontSize:'12px'}}>Privacy Policy</p>
                            <p style={{fontSize:'12px'}}>Terms of Use</p>
                            <p style={{fontSize:'12px'}}>Accessability</p>
                            <p style={{fontSize:'12px'}}>Sitemap</p>
                            <p style={{fontSize:'12px'}}>Your Privary Choices</p>
                        </SimpleGrid>
                        <SimpleGrid columns={[1,2]}>
                            <p>1-877-737-4672</p>
                            <p>TTY: 1-888-866-9845</p>
                        </SimpleGrid>
                    </div>
                    <SimpleGrid columns={[4,7]} gap='10px'>
                        <FaInstagram size={'1.7em'}/>
                        <FaFacebookF size={'1.7em'}/>
                        <FaTwitter size={'1.7em'}/>
                        <FaYoutube size={'1.7em'}/>
                        <FaPinterest size={'1.7em'}/>
                        <FaSnapchat size={'1.7em'}/>
                        <FaTiktok size={'1.7em'}/>
                    </SimpleGrid>
            </SimpleGrid>
        </div>
    )
}

export default Footer