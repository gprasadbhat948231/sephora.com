import React from 'react'
import {FormControl, Input,Box, FormLabel, Button, SimpleGrid } from '@chakra-ui/react';
import usflag from '../Components/Navbarimg/usflag.png';
import canadaflag from '../Components/Navbarimg/canada.png';
import { FaFacebookF, FaInstagram, FaPinterest, FaSnapchat, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer-container'>
            <SimpleGrid columns={[1,2,3,5]} gap='10px' width='80%' margin={'auto'} className='nthchld' paddingTop={'20px'}>
                <div className='list-container'>
                    <h3>About Nemow</h3>
                    <ul>About Nemow</ul>
                    <ul>Newsroom</ul>
                    <ul>Careers</ul>
                    <ul>Nemow Values</ul>
                    <ul>Supply Chair Transparency</ul>
                    <ul>Affiliates</ul>
                    <ul>Nemow Events</ul>
                    <ul>Gift Card</ul>
                    <ul>Nemow Global Sites</ul>
                    <ul>Diversity,Equity & Inclusion</ul>
                    <ul>Checkout on Instagram</ul>
                    <ul>Nemow Accelerate</ul>
                    <ul>Report a vulnerability</ul>
                </div>
                <div className='list-container'>
                    <h3>My Nemow</h3>
                    <ul>Beauty Insider</ul>
                    <ul>Nemow Credit Card</ul>
                    <ul>Community Profile</ul>
                    <ul>Order Status</ul>
                    <ul>Purchase History</ul>
                    <ul>Account Settings</ul>
                    <ul>Beauty Advisor Recommendation</ul>
                    <ul>Beauty Offers</ul>
                    <ul>Quizes and Buying guides</ul>
                    <ul>Rewards Bazaar</ul>
                    <ul>Loves</ul>
                    <ul>Book a reservation</ul>
                </div>
                <div className='list-container'>
                    <h3>Help</h3>
                    <ul>Customer Service</ul>
                    <ul>Returns & Exchange</ul>
                    <ul>Delivery & Pickup Option</ul>
                    <ul>Shipping</ul>
                    <ul>Billing</ul>
                    <ul>International Shippment</ul>
                    <ul>Beauty Services FAQ</ul>
                    <ul>Nemow at Kohl's</ul>
                    <ul>Nemow inside JCPenny</ul>
                    <ul>Store Location</ul>
                    <ul>Online Ordering</ul>
                    <ul>Klarna & Afterpay</ul>
                    <ul>Accessability</ul>
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