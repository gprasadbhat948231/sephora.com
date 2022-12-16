import React from 'react'
import { Text, Menu, MenuButton, MenuList, Image, Box } from "@chakra-ui/react";
import "./Navbarbtm.css";
const Navbarbtm = () => {
     return (
          <div className='Nav-container'>
               <div className='Nav-categories'>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              New
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All New</Text>
                                   <Text className='lists'>Just Dropped</Text>
                                   <Text className='lists'>New Makeup</Text>
                                   <Text className='lists'>New Skincare</Text>
                                   <Text className='lists'>New Haircare</Text>
                                   <Text className='lists'>New Fragrance</Text>
                                   <Text className='lists'>New Bath & Body</Text>
                                   <Text className='lists'>New Tools & Brushes</Text>
                              </Box>
                              <Box >
                                   <Text className='lists'>The Next Big Thing</Text>
                                   <Text className='lists'>Bestsellers</Text>
                                   <Text className='lists'>Quizzes & Buying Guides</Text>
                                   <Text className='lists'>Clean Beauty Guide</Text>
                                   <Text className='lists'>Planet Positive Beauty Guide</Text>
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590" alt="new1" width="300px" height="300px" />
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/meganav/large/2022-sept-concealer-story-site-desktop-global-navigation-button-us-ca.jpg?imwidth=294" alt="new2" width="300px" height="300px" />
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Brands
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>Brands A-Z</Text>
                                   <Text className='lists'>NEMOW COLLECTIONS</Text>
                                   <Text className='lists'>New Brands</Text>
                                   <Text className='sublists'>Simi Haze</Text>
                                   <Text className='sublists'>Curlsmith</Text>
                                   <Text className='sublists'>Boy Smells</Text>
                                   <Text className='sublists'>Kulfi</Text>
                              </Box>
                              <Box >
                                   <Text className='lists'>Only at Nemow</Text>
                                   <Text className='sublists'>Dr. Jart+</Text>
                                   <Text className='sublists'>Farmacy</Text>
                                   <Text className='sublists'>FORVR Mood</Text>
                                   <Text className='sublists'>Rare Beauty</Text>
                                   <Text className='sublists'>MAKEUP BY MARIO</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Affordable Brands</Text>
                                   <Text className='sublists'>NEMOW COLLECTIONS</Text>
                                   <Text className='sublists'>The Ordinary</Text>
                                   <Text className='sublists'>The Inkey list</Text>
                                   <Text className='sublists'>Verb</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Black-Owned Brands</Text>
                                   <Text className='sublists'>Shani Darden Skin Care</Text>
                                   <Text className='sublists'>ROSE Ingleton MD</Text>
                                   <Text className='sublists'>EADEM</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Clean at Nemow</Text>
                                   <Text className='sublists'>Skinfix</Text>
                                   <Text className='sublists'>Youth to the People</Text>
                                   <Text className='sublists'>SKYLAR</Text>
                                   <Text className='sublists'>ILIA</Text>
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Makeup
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All Makeup</Text>
                                   <Text className='lists'></Text>
                                   <Text className='lists'>Face</Text>
                                   <Text className='sublists'>Foundation</Text>
                                   <Text className='sublists'>BB & CC Creams</Text>
                                   <Text className='sublists'>Tinted Moisturixer</Text>
                                   <Text className='sublists'>Concelear</Text>
                                   <Text className='sublists'>Face Primer</Text>
                                   <Text className='sublists'>Highlighter</Text>
                                   <Text className='sublists'>Color Correct</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Eye</Text>
                                   <Text className='sublists'>Eye Palettes</Text>
                                   <Text className='sublists'>Mascara</Text>
                                   <Text className='sublists'>Eyeliner</Text>
                                   <Text className='sublists'>Eyebrow</Text>
                                   <Text className='sublists'>False Eyelashes</Text>
                                   <Text className='sublists'>Eye Shadow</Text>
                                   <Text className='sublists'>Eyelash Serums</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Lip</Text>
                                   <Text className='sublists'>Lipstick</Text>
                                   <Text className='sublists'>Lip Gloss</Text>
                                   <Text className='sublists'>Lip Balm & Treatement</Text>
                                   <Text className='sublists'>Liquid Lipstick</Text>
                                   <Text className='sublists'>LipStain</Text>
                                   <Text className='sublists'>Lip Liner</Text>
                                   <Text className='sublists'>Lip Plumper</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Cheek</Text>
                                   <Text className='sublists'>Blush</Text>
                                   <Text className='sublists'>Bronzer</Text>
                                   <Text className='sublists'>Hilighter</Text>
                                   <Text className='sublists'>Contour</Text>
                                   <Text className='sublists'>Cheek Palettes</Text>
                                   <Text className='lists'>Value & Gift Sets</Text>
                                   <Text className='lists'>Makeup Palettes</Text>
                                   <Text className='lists'>Brushes & Applicators</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>New</Text>
                                   <Text className='lists'>BestSellers</Text>
                                   <Text className='lists'>Clean Makeup</Text>
                                   <Text className='lists'>Vegan Makeup</Text>
                                   <Text className='lists'>Mini Size</Text>
                                   <Text className='lists'>Value Size</Text>
                                   <Text className='lists'>Nemow Collection</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Help Me Choose</Text>
                                   <Text className='sublists'>Foundation Quiz</Text>
                                   <Text className='sublists'>Lip Quiz</Text>
                                   <Text className='sublists'>Brow Quiz</Text>
                                   <Text className='sublists'>Complexion Routine Builder</Text>
                                   <Text className='sublists'>Guide to Foundation</Text>
                                   <Text className='sublists'>Clean Makeup Guide</Text>
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Skincare
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All Skincare</Text>
                                   <Text className='lists'></Text>
                                   <Text className='lists'>Moisturizer</Text>
                                   <Text className='sublists'>Night Creams</Text>
                                   <Text className='sublists'>Face Oils</Text>
                                   <Text className='sublists'>Mists and essence</Text>
                                   <Text className='sublists'>BB CC Creams</Text>
                                   <Text className='sublists'></Text>
                                   <Text className='sublists'>Cleansers</Text>
                                   <Text className='sublists'>Face Wash & Cleanser</Text>
                                   <Text className='sublists'>Makeup Removers</Text>
                                   <Text className='sublists'>Face Wipes</Text>
                                   <Text className='sublists'>Toners</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Treatements</Text>
                                   <Text className='sublists'>Face Serums</Text>
                                   <Text className='sublists'>Blemish & Acne</Text>
                                   <Text className='sublists'>Facial Peels</Text>
                                   <Text className='sublists'></Text>
                                   <Text className='sublists'>Masks</Text>
                                   <Text className='sublists'>Face Masks</Text>
                                   <Text className='sublists'>Sheet Masks</Text>
                                   <Text className='sublists'>Eye Masks</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Eye Care</Text>
                                   <Text className='sublists'>Eye Creams</Text>
                                   <Text className='sublists'>Eye Masks</Text>
                                   <Text className='lists'>Lip Balm & Treatement</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Sunscreen</Text>
                                   <Text className='sublists'>Face Sunscreen</Text>
                                   <Text className='sublists'>Body Sunscreen</Text>
                                   <Text className='sublists'>Highteck tools</Text>
                                   <Text className='sublists'>Wellness</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Shop By Concern</Text>
                                   <Text className='sublists'>Acne & Blemishes</Text>
                                   <Text className='sublists'>Anti-Aging</Text>
                                   <Text className='sublists'>Dark-Spots</Text>
                                   <Text className='sublists'>Pores</Text>
                                   <Text className='sublists'>Dryness</Text>
                                   <Text className='sublists'>Dullness</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>New</Text>
                                   <Text className='lists'>Bestsellers</Text>
                                   <Text className='lists'>Clean Skincare</Text>
                                   <Text className='lists'>Vegan Skincare</Text>
                                   <Text className='lists'>Value & Gifts</Text>
                                   <Text className='lists'>Mini Size</Text>
                                   <Text className='lists'>Black-Owned Brands Skincare</Text>
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Hair
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All Hair</Text>
                                   <Text className='lists'></Text>
                                   <Text className='lists'>Shampoo & Conditioner</Text>
                                   <Text className='sublists'>Shampoo</Text>
                                   <Text className='sublists'>Conditioner</Text>
                                   <Text className='sublists'>Scalp Scrub</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Treatements</Text>
                                   <Text className='sublists'>Hair Masks</Text>
                                   <Text className='sublists'>Leave-in Conditioner</Text>
                                   <Text className='sublists'>Hair Oil</Text>
                                   <Text className='sublists'>Hair Serum</Text>
                                   <Text className='sublists'>Scalp Treatement</Text>
                                   <Text className='sublists'>Hair Sumplements</Text>
                                   <Text className='sublists'>Hair Thinning</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Styling</Text>
                                   <Text className='sublists'>Styling Creams</Text>
                                   <Text className='sublists'>Dry Shampoo</Text>
                                   <Text className='lists'>Hair Primer</Text>
                                   <Text className='lists'>Hair Spray</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Value & Gift Sets</Text>
                                   <Text className='sublists'>Tools</Text>
                                   <Text className='sublists'>Hair Dryers</Text>
                                   <Text className='sublists'>Flat irons</Text>
                                   <Text className='sublists'>Curling irons</Text>
                                   <Text className='lists'>Brushes & Combs</Text>
                                   <Text className='lists'>Accessories</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Shop By Concern</Text>
                                   <Text className='sublists'>Damaged Hair</Text>
                                   <Text className='sublists'>Dryness</Text>
                                   <Text className='sublists'>Frizz</Text>
                                   <Text className='sublists'>Scalp Care</Text>
                                   <Text className='sublists'>Volume</Text>
                                   <Text className='sublists'>Color Care</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>New</Text>
                                   <Text className='lists'>Bestsellers</Text>
                                   <Text className='lists'>Clean Skincare</Text>
                                   <Text className='lists'>Vegan Skincare</Text>
                                   <Text className='lists'>Value & Gifts</Text>
                                   <Text className='lists'>Mini Size</Text>
                                   <Text className='lists'>Black-Owned Brands Skincare</Text>
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Fragrance
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All Fragrance</Text>
                                   <Text className='lists'></Text>
                                   <Text className='lists'>Women</Text>
                                   <Text className='sublists'>Perfume</Text>
                                   <Text className='sublists'>Perfume Oils</Text>
                                   <Text className='sublists'>Body Mist & Hair Mist</Text>
                                   <Text className='sublists'></Text>
                                   <Text className='lists'>Men</Text>
                                   <Text className='sublists'>Cologne</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Value & Gift Sets</Text>
                                   <Text className='sublists'>Perfume Gift Sets</Text>
                                   <Text className='sublists'>Cologne Gift Sets</Text>
                                   <Text className='sublists'>Home Gift Sets</Text>
                                   <Text className='sublists'>Nemow Favoirite</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Candles & Home Scents</Text>
                                   <Text className='sublists'>Candles</Text>
                                   <Text className='sublists'>Diffusers</Text>
                                   <Text className='lists'></Text>
                                   <Text className='lists'>Shop By Fragrance Family</Text>
                                   <Text className='sublists'>Floral</Text>
                                   <Text className='sublists'>Fresh</Text>
                                   <Text className='sublists'>Warm & Spicy</Text>
                                   <Text className='sublists'>Earthy & Woody</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>New</Text>
                                   <Text className='lists'>Bestsellers</Text>
                                   <Text className='lists'>Clean Skincare</Text>
                                   <Text className='lists'>Vegan Skincare</Text>
                                   <Text className='lists'>Value & Gifts</Text>
                                   <Text className='lists'>Mini Size</Text>
                                   <Text className='lists'>Black-Owned Brands Skincare</Text>
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Bath & Body
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All Bath & Body</Text>
                                   <Text className='lists'></Text>
                                   <Text className='lists'>Bath & Shower</Text>
                                   <Text className='sublists'>Body Wash & Shower Gel</Text>
                                   <Text className='sublists'>Scrub & Exfollants</Text>
                                   <Text className='sublists'>Bath Socks & Bubble Bath</Text>
                                   <Text className='sublists'></Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Body Care</Text>
                                   <Text className='sublists'>Intimate Care & Vibrators</Text>
                                   <Text className='sublists'>Hand Sanitizers</Text>
                                   <Text className='sublists'>Cellulite & Stretch Marks</Text>
                                   <Text className='sublists'>Deodrant & Antipersprant</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>New</Text>
                                   <Text className='lists'>Bestsellers</Text>
                                   <Text className='lists'>Clean Skincare</Text>
                                   <Text className='lists'>Vegan Skincare</Text>
                                   <Text className='lists'>Value & Gifts</Text>
                                   <Text className='lists'>Mini Size</Text>
                                   <Text className='lists'>Black-Owned Brands Skincare</Text>
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294" alt="Bath" width="300px" height="300px" />
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Mini Size
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All Mini Size</Text>
                                   <Text className='lists'>Makeup</Text>
                                   <Text className='lists'>Skincare</Text>
                                   <Text className='lists'>Hair</Text>
                                   <Text className='lists'>Fragrance</Text>
                                   <Text className='lists'>Bath & Body</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Value & Gift</Text>
                                   <Text className='lists'>$15 and Under</Text>
                                   <Text className='lists'>$25 and Under</Text>
                                   <Text className='lists'>Nemow Favorites</Text>
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-minis-us-can-release.jpg?imwidth=590" alt="mini-size" width="300px" height="300px" />
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294" alt="mini-size" width="300px" height="300px" />
                              </Box>
                         </MenuList>
                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              💫 Gifts ✨
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>All Gifts</Text>
                                   <Text className='lists'>Gift Finder</Text>
                                   <Text className='lists'>Gift Cards</Text>
                                   <Text className='lists'>Value & Gift Set</Text>
                                   <Text className='lists'></Text>
                                   <Text className='lists'>By Price</Text>
                                   <Text className='sublists'>$10 and under</Text>
                                   <Text className='sublists'>$15 and under</Text>
                                   <Text className='sublists'>$25 and under</Text>
                                   <Text className='sublists'>$50 and under</Text>
                                   <Text className='sublists'>$75 and under</Text>
                                   <Text className='sublists'>$100 and under</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>By Category</Text>
                                   <Text className='sublists'>Makeup</Text>
                                   <Text className='sublists'>Skincare</Text>
                                   <Text className='sublists'>Hair</Text>
                                   <Text className='sublists'>Fragrance</Text>
                                   <Text className='sublists'>Candles & Home Scents</Text>
                                   <Text className='sublists'>Tools</Text>
                                   <Text className='sublists'>Brush Sets & Accessories</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>By Recipient</Text>
                                   <Text className='sublists'>For Her</Text>
                                   <Text className='sublists'>For Him</Text>
                                   <Text className='sublists'>For Teenagers</Text>
                                   <Text className='sublists'>For Them</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Top Rated Gifts</Text>
                                   <Text className='sublists'>Mini Size</Text>
                                   <Text className='sublists'>Only at Nemow</Text>
                                   <Text className='sublists'>Luxury Gifts</Text>
                                   <Text className='sublists'>The Luxury Guide</Text>
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/2022-holiday-launch-gift-card-site-desktop-global-navigation-button-gift-card-US-CAN-2838-release.jpg?imwidth=590" alt="gifts" width="300px" height="300px" />
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Beauty under $20
                         </MenuButton>
                         <MenuList className='menulist' >
                              <Box>
                                   <Text className='lists'>Makeup Under $20</Text>
                                   <Text className='lists'>Skincare under $20</Text>
                                   <Text className='lists'>Hair under $20</Text>
                                   <Text className='lists'>Fragranceunder $20</Text>
                                   <Text className='lists'> Tools & Brushes under $20</Text>
                                   <Text className='lists'>Bath & Body under $20</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Nemow Collection Under $20</Text>
                                   <Text className='sublists'>Makeup</Text>
                                   <Text className='sublists'>Skincare</Text>
                                   <Text className='sublists'>Hair</Text>
                                   <Text className='sublists'>Candles & Home Scents</Text>
                                   <Text className='sublists'>Tools & Brushes</Text>
                                   <Text className='sublists'>Bath & Body</Text>
                                   <Text className='sublists'>Value & Gift Sets</Text>
                                   <Text className='sublists'>Clean Beauty</Text>
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-beauty-under-20-us-can-release.jpg?imwidth=590" alt="under20$" width="300px" height="300px" />
                              </Box>
                         </MenuList>

                    </Menu>
                    <Menu>
                         <MenuButton
                              className='menubtn' >
                              Sale & Offers
                         </MenuButton>
                         <MenuList className='menulist' >
                         <Box>
                                   <Text className='lists'>Sale & Offers</Text>
                                   <Text className='lists'>All Sale</Text>
                                   <Text className='lists'>Makeup</Text>
                                   <Text className='lists'>Skincare</Text>
                                   <Text className='lists'>Haircare</Text>
                                   <Text className='lists'>Fragrance</Text>
                                   <Text className='lists'>Tools & Brushes</Text>
                                   <Text className='lists'>Bath & Body</Text>
                                   <Text className='lists'>Mini Size</Text>
                              </Box>
                              <Box>
                                   <Text className='lists'>Beauty Offers</Text>    
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294" alt="under20$" width="300px" height="300px" />
                              </Box>
                              <Box>
                                   <Image src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294" alt="under20$" width="300px" height="300px" />
                              </Box>
                         </MenuList>

                    </Menu>
               </div>
          </div>
     )
}

export default Navbarbtm
