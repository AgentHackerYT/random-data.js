/*      
    __  ___        ____        ______
   /  |/  /       /  _/       /_  __/
  / /|_/ /        / /          / /   
 / /  / /  _    _/ /   _      / /    
/_/  /_/  (_)  /___/  (_)    /_/                                          

M.I.T License

*/

const axios = require('axios').default

const baseURL = "https://random-data-api.com/api"

async function address(size = 1){

   const {data} = await axios.get(baseURL + "/address/random_address?size=" + size)

   return await data

}

async function appliance(size = 1){

    const {data} = await axios.get(baseURL + "/appliance/random_appliance?size=" + size)

    return await data
 
}

async function app(size = 1){

    const {data} = await axios.get(baseURL + "/app/random_app?size=" + size)

    return await data

}

async function bank(size = 1){

    const {data} = await axios.get(baseURL + "/bank/random_bank?size=" + size)

    return await data

}

async function beer(size = 1){

    const {data} = await axios.get(baseURL + "/beer/random_beer?size=" + size)

    return await data

}

async function blood(size = 1){

    const {data} = await axios.get(baseURL + "/blood/random_blood?size=" + size)

    return await data

}

async function card(size = 1){
    
    const {data} = await axios.get(baseURL + "/business_credit_card/random_card?size=" + size)

    return await data

}

async function cannabies(size = 1){

    const {data} = await axios.get(baseURL + "cannabis/random_cannabis?size=" + size)

    return await data

}

async function code(size = 1){

    const {data} = await axios.get(baseURL + "/code/random_code?size=" + size)

    return await data

}

async function coffee(size = 1){

    const {data} = await axios.get(baseURL + "/coffee/random_coffee?size=" + size)

    return await data

}

async function commerce(size = 1){

    const {data} = await axios.get(baseURL + "/commerce/random_commerce?size=" + size)

    return await data

}

async function computer(size = 1){

    const {data} = await axios.get(baseURL + "/computer/random_computer?size=" + size)

    return await data

}

async function company(size = 1){

    const {data} = await axios.get(baseURL + "/company/random_company?size=" + size)

    return await data

}

async function crypto(size = 1){

    const {data} = await axios.get(baseURL + "/crypto/random_crypto?size=" + size)

    return await data

}

async function cryptoCoin(size = 1){

    const {data} = await axios.get(baseURL + "/crypto_coin/random_crypto_coin?size=" + size)

    return await data

}

async function color(size = 1){

    const {data} = await axios.get(baseURL + "/color/random_color?size=" + size)

    return await data

}

async function dessert(size = 1){

    const {data} = await axios.get(baseURL + "/dessert/random_dessert?size=" + size)

    return await data

}

async function device(size = 1){

    const {data} = await axios.get(baseURL + "/device/random_device?size=" + size)

    return await data

}

async function food(size = 1){
    
    const {data} = await axios.get(baseURL + "/food/random_food?size=" + size)

    return await data

}

async function name(size = 1){

    const {data} = await axios.get(baseURL + "/name/random_name?size=" + size)

    return await data

}   

async function hipsterStuff(size = 1){

    const {data} = await axios.get(baseURL + "/hipster/random_hipster_stuff?size=" + size)

    return await data

}

async function invoice(size = 1){

    const {data} = await axios.get(baseURL + "/invoice/random_invoice?size=" + size)

    return await data

}

async function user(size = 1){

    const {data} = await axios.get(baseURL + "/user/random_user?size=" + size)

    return await data

}

async function stripe(size = 1){

    const {data} = await axios.get(baseURL + "/stripe/random_stripe?size=" + size)

    return await data

}

async function subscription(size = 1){

    const {data} = await axios.get(baseURL + "/subscription/random_subscription?size=" + size)

    return await data

}

async function vehicle(size = 1){

    const {data} = await axios.get(baseURL + "/vehicle/random_vehicle?size=" + size)

    return await data

}

async function idNumber(size = 1){

    const {data} = await axios.get(baseURL + "/id_number/random_id_number?size=" + size)

    return await data
}

async function internetStuff(size = 1){

    const {data} = await axios.get(baseURL + "/internet_stuff/random_internet_stuff?size=" + size)

    return await data

}

async function loremIpsum(size = 1){

    const {data} = await axios.get(baseURL + "/lorem_ipsum/random_lorem_ipsum")

    return await data

}

async function loremFlickr(size = 1){

    const {data} = await axios.get(baseURL + "/lorem_flickr/random_lorem_flickr?size=" + size)

    return await data

}

async function loremPixel(size = 1){

    const {data} = await axios.get(baseURL + "/lorem_pixel/random_lorem_pixel?size=" + size)

    return await data

}

async function nation(size = 1){

    const {data} = await axios.get(baseURL + "/nation/random_nation?size=" + size)

    return await data

}

async function number(size = 1){

    const {data} = await axios.get(baseURL + "/number/random_number?size=" + size)

    return await data

}

async function phoneNumber(size = 1){

    const {data} = await axios.get(baseURL + "/phone_number/random_phone_number?size=" + size)

    return await data

}

async function placeholdit(size = 1){

    const {data} = await axios.get(baseURL + "/placeholdit/random_placeholdit?size=" + size)

    return await data

}

async function restaurant(size = 1){

    const {data} = await axios.get(baseURL + "/restaurant/random_restaurant?size=" + size)

    return await data

}

module.exports.random = {
    address, 
    appliance, 
    app, 
    bank, 
    beer, 
    blood, 
    card, 
    cannabies, 
    code, 
    coffee, 
    commerce,
    company,
    crypto,
    cryptoCoin,
    color,
    dessert,
    device,
    food,
    name,
    hipsterStuff,
    invoice,
    user,
    stripe,
    subscription,
    vehicle,
    idNumber,
    internetStuff,
    loremIpsum,
    loremFlickr,
    loremPixel,
    nation,
    number,
    phoneNumber,
    placeholdit,
    restaurant  
}

let oauthURL = 'https://random-data-api.com/api/omniauth/'

async function google(){

    const {data} = await axios.get(oauthURL + "/google_get")

    return await data

}

async function facebook(){

    const {data} = await axios.get(oauthURL + "/facebook_get")

    return await data

}

async function twitter(){

    const {data} = await axios.get(oauthURL + "/twitter_get")

    return await data

}

async function linkedin(){

    const {data} = await axios.get(oauthURL + "/linkedin_get")

    return await data

}

async function github(){

    const {data} = await axios.get(oauthURL + "/github_get")

    return await data

}

async function apple(){

    const {data} = await axios.get(oauthURL + "/apple_get")

    return await data

}

module.exports.Omniaauth = {
    google,
    facebook,
    twitter,
    linkedin,
    github,
    apple
}
