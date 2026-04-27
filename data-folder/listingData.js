export function getProduct(listingId) {       
       let matchinglisting;  

            Listing.forEach((Listings) => { 
                if (Listings.id === listingId) {   
                    matchinglisting = Listings 
                } 
                
            });  

            return matchinglisting;
        };
 
 export const Listing = [{
    id: "BEBFL6G45F",
image: 'images/1000015491114-Pink-PEACH-1000015491114_01-2100.jpg',
price: 997,
title: 'Men Printed Regular - FiT - shirt',
}, {
    id: "BHEHDLUY67",
    image: 'images/1000016225533-Blue-BLUE-1000016225533_01-2100.jpg',
    price: 1199,
    title: 'Men Printed - Loose - FIT T - shirt',
}, {
    id: "NHSIE67GHG",
    image: 'images/1000016303470-Red-RED-1000016303470_01-2100.jpg',
    price: 899,
    title:  'Men checked Loose fit - T - shirt',
}, {
    id: "NHDBS678HY",
    image: 'images/1000016041042-Blue-BLUE-1000016041042_01-2100.jpg',
    price: 1049,
    title: 'Men Loose fit collar Printed shirt'
},{
    id: "BHG5656HJ6",
    image: 'images/1000016020352-White-WHITE-1000016020352_01-2100.jpg',
    price:  1000,
    title: 'Men striped Regular - Fit T - shirt'
}, {
    id : "NDJ6753F4G",
    image: 'images/WHITE-SHIRT.jpg',
    price: 1100,
    title: 'Men checked regular - Fit T - shirt'
}, 
{
    id: "BDHKE678SD",
 image: 'images/1000015813210-Blue-BLUE-1000015813210_01-2100.jpg"',
 price: 799,
 title: 'Men checked casual shirt - loose fit.'
},
{
  id: "BDHKE78HJS",
image: 'images/images-9.jpg"',
price: 899,
title: 'Men Brown casual shirt - loose fit.' 
}, 
{
    id: "BDHKE78HJM",
image: 'images/images-9.jpg"',
price: 899,
title: 'Men Brown casual shirt - loose fit.'
},
{
    id: "BDHKE78HJN",
image: 'images/images-9.jpg"',
price: 899,
title: 'Men Brown casual shirt - loose fit.'
}]; 