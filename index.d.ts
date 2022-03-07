/*      
    __  ___        ____        ______
   /  |/  /       /  _/       /_  __/
  / /|_/ /        / /          / /   
 / /  / /  _    _/ /   _      / /    
/_/  /_/  (_)  /___/  (_)    /_/                                          

M.I.T License

*/

declare module "random-data.js"

export namespace random {

interface addressData{
    id: number
    uid: string
    city: string
    street_name: string
    street_address: string
    secondary_address: string
    building_number: string
    mail_box: string
    community: string
    zip_code: string
    postcode: string
    time_zone: string
    street_suffix: string
    city_suffix: string
    city_prefix: string
    state: string
    state_abbr: string
    country: string
    country_code: string
    latitude: number,
    longitude: number,
    full_address: string
}

interface applianceData{
    id: number
    uid: string
    brand: string
    equipment: string
}

interface appData{
    id: number
    uid: string
    app_nam: string
    app_version: number
    app_author: string
    app_semantic_version: number
    app_major_version: number
    app_minor_version: number
    app_patch_version: number
}

interface bankData{
    id:number,
    uid:string
    account_number:number
    iban:string
    bank_name:string
    routing_number: number
    swift_bic:string
}

interface beerData{
"id":6838,
"uid":"6d614246-c2a2-4624-9b24-cb66f34acf9b",
"brand":"Patagonia",
"name":"Bourbon County Stout",
"style":"Belgian And French Ale",
"hop":"Sterling",
"yeast":"1007 - German Ale",
"malts":"Caramel"
,"ibu":"68 IBU",
"alcohol":"4.0%",
"blg":"12.4°Blg"
}

interface cardData{"id":4678,"uid":"2afea4e5-8566-4a7c-86d6-6f74b1a38218","credit_card_number":"1211-1221-1234-2201","credit_card_expiry_date":"2023-03-06","credit_card_type":"switch"}

interface cannabisData{"id":6800,"uid":"04b11914-284c-45b0-b81d-39f0b857fc40","strain":"Golden Strawberries","cannabinoid_abbreviation":"CBN","cannabinoid":"Cannabicyclic Acid","terpene":"∆ 3 Carene","medical_use":"decongestant","health_benefit":"relieves anxiety","category":"crystalline","type":"hybrid","buzzword":"spliff","brand":"8 | FOLD Cultivation"}

interface bloodData{"id":9937,"uid":"a3cc54ad-9981-4e6b-9126-02719cb062be","type":"A","rh_factor":"-","group":"A-"}

interface codeData{"id":8202,"uid":"c24ccf20-c845-4115-9ba2-451bdfde08bf","npi":"0522613827","isbn":"669305161-8","ean":"6398658796364","rut":"75174330-0","nric":"T0026188I","imei":"521754771010966","asin":"B000A70EOU","sin":"242971406"}

interface coffeeData{"id":5169,"uid":"c60dff74-bc32-42fd-8ffd-c0193acc51ec","blend_name":"Evening Breaker","origin":"Kayanza, Burundi","variety":"Gimma","notes":"juicy, creamy, sweet pea, curry, honeydew","intensifier":"delicate"}

interface commerceData{"id":1694,"uid":"e74cb3a0-e220-4078-9a58-25b7e3d110fd","color":"apricot","department":"Shoes \u0026 Baby","material":"Bronze","product_name":"Fantastic Leather Plate","price":74.47,"price_string":"8.75","promo_code":"KillerPromotion654774"}

interface companyData{"id":7262,"uid":"2f64ee4c-d294-4a97-b657-17d2a2bba7e3","business_name":"Pagac, Zemlak and Daugherty","suffix":"Group","industry":"Political Organization","catch_phrase":"Digitized content-based hierarchy","buzzword":"collaboration","bs_company_statement":"leverage web-enabled partnerships","employee_identification_number":"34-3058086","duns_number":"16-018-2870","logo":"https://pigment.github.io/fake-logos/logos/medium/color/2.png","type":"Government Agency","phone_number":"+809 1-699-290-3809","full_address":"Apt. 142 3805 Koepp Park, Clairefort, AK 94225-8904","latitude":-76.00074276029842,"longitude":172.74441412311774}

interface computerData{"id":4970,"uid":"4cb1f461-1fb4-4500-99ec-a6801aaacbc0","platform":"Windows","type":"server","os":"Ubuntu Desktop 18.04","stack":"Windows, Windows 7"}

interface cryptoData{"id":6564,"uid":"fde3e822-27cd-4c60-810e-3aecb2f7dc74","md5":"38fe982dab36e5ba8ab42d2491348e4f","sha1":"90262fb73ff7ae230c271f91ea4cff5aad2a5949","sha256":"7f1ea7c30238596b01fbedc0fb8e2bc7699665fd75eb4f9241553c32acd9017c"}

interface cryptoCoinData{"id":8254,"uid":"7e42b644-efa3-44a9-97aa-49cb49db71ce","coin_name":"Monero","acronym":"XMR","logo":"https://i.imgur.com/2HJr7OR.png"}

interface colorData{"id":9983,"uid":"501c6e25-1f5e-45f8-b1bb-248fc6170572","hex_value":"#4bd3a7","color_name":"periwinkle","hsl_value":[219,0.42,0.19],"hsla_value":[260,0.05,0.58,0.7]}

interface dessertData{"id":8306,"uid":"d9cb4441-0f03-4cca-ba7a-e21493a29349","variety":"Frozen Yogurt","topping":"Marshmallows","flavor":"Caramel"}

interface deviceData{"id":4294,"uid":"d64d0437-1160-4e39-928c-dba65ed1e7d2","build_number":115,"manufacturer":"ASUS","model":"iPhone 6 / 6 Plus","platform":"Windows 10","serial_number":"ejfjnRNInxh0363JC2WM","version":614}

interface foodData{"id":855,"uid":"852a11a6-0e72-40b8-9e25-439d694a5100","dish":"Pork Belly Buns","description":"Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.","ingredient":"Goji Berry","measurement":"1/3 cup"}

interface nameData{"id":9394,"uid":"ffc53e86-8b29-4d73-a0bc-6ed0e35ef0d3","name":"Owen Money","two_word_name":"Roger Overandout","four_word_name":"Harry R. M. Pitts","name_with_initials":"Yule B. Sari","name_with_middle":"Lindsey Cremin Smitham","first_name":"Sherman","middle_name":"Hansen","last_name":"Schneider","male_first_name":"Wade","female_first_name":"Donella","prefix":"Mr.","initials":"AMY"}

interface hipsterStuffData{"id":1792,"uid":"8f88ba17-5788-4729-8c80-2e41dfffb974","word":"pinterest","words":["tattooed","kickstarter","twee"],"sentence":"Single-origin coffee marfa semiotics gentrify forage heirloom fashion axe.","sentences":["Cray tattooed sustainable banh mi cold-pressed you probably haven't heard of them.","Fanny pack sartorial narwhal salvia marfa letterpress.","Try-hard beard mixtape biodiesel butcher pour-over."],"paragraph":"You probably haven't heard of them chillwave sartorial godard biodiesel swag. Bitters yolo truffaut keffiyeh chartreuse kitsch narwhal everyday. Flexitarian try-hard keffiyeh austin chicharrones. Stumptown viral pop-up venmo organic.","paragraphs":["Messenger bag lomo mustache. Keffiyeh mlkshk ennui polaroid williamsburg. Pork belly brunch meditation park. Pop-up artisan chicharrones authentic.","Kale chips helvetica banh mi chia. +1 kombucha gastropub. Cardigan readymade five dollar toast bushwick.","+1 cred vinyl marfa blog iphone lumbersexual hashtag. Salvia +1 occupy neutra aesthetic artisan. Freegan thundercats cray. Park fixie waistcoat."]}

interface invoiceData{"id":2366,"uid":"e133708a-3e88-46e2-8956-fb605e6bad6f","reference":"4358403520839420","creditor_reference":"RF24534013"}

interface userData{"id":5322,"uid":"26c9f8de-6d76-4254-a471-38de02f6964b","password":"YwgLXCTJ3H","first_name":"Tonisha","last_name":"Kunde","username":"tonisha.kunde","email":"tonisha.kunde@email.com","avatar":"https://robohash.org/assumendapossimusest.png?size=300x300\u0026set=set1","gender":"Male","phone_number":"+683 155.361.4367 x27910","social_insurance_number":"546983388","date_of_birth":"1967-01-28","employment":{"title":"Product Farming Coordinator","key_skill":"Problem solving"},"address":{"city":"Kutchstad","street_name":"Pagac Radial","street_address":"3407 Gutmann Mills","zip_code":"63459","state":"New Mexico","country":"United States","coordinates":{"lat":-68.74319401595741,"lng":-140.4185271646835}},"credit_card":{"cc_number":"4309-2539-0693-4950"},"subscription":{"plan":"Student","status":"Pending","payment_method":"Paypal","term":"Full subscription"}}

interface stripeData{"id":6294,"uid":"dca9357b-af56-4a63-9e16-3e9c670d510e","valid_card":"4000056655665556","token":"tok_mastercard_debit","invalid_card":"4000000000000002","month":"02","year":"2028","ccv":"242","ccv_amex":"7284"}

interface subscription{"id":4485,"uid":"c7b7b708-929a-48db-93f3-ac0deb3765b6","plan":"Essential","status":"Blocked","payment_method":"Alipay","subscription_term":"Biennal","payment_term":"Annual"}

interface vehicle{"id":616,"uid":"13c9e1ea-b1f0-44ec-8baf-5e7aa2bd01fd","vin":"17DB26KLPZ0F03800","make_and_model":"Chevy Malibu","color":"Black","transmission":"CVT","drive_type":"4x2/2-wheel drive","fuel_type":"E-85/Gasoline","car_type":"Crew Cab Pickup","car_options":["MP3 (Single Disc)","Keyless Entry","Tinted Glass","Antilock Brakes","Third Row Seats","Moonroof/Sunroof","Antilock Brakes","Tow Package"],"specs":["4.6L DOHC 32-valve V8 engine -inc: DI \u0026 SFI dual fuel injection, dual variable valve timing w/intelligence \u0026 electronically controlled intake (VVT-iE), aluminum block \u0026 heads","Glove box lamp","Black roof molding","Front \u0026 rear passenger folding assist grips","Trim-panel-mounted storage net","Dual-stage front airbags w/occupant classification system"],"doors":1,"mileage":66371,"kilometrage":86567,"license_plate":"KMG-9628"}

interface idNumberData{"id":716,"uid":"861628d7-56ba-450d-93c6-076b4601952d","valid_us_ssn":"626-59-4139","invalid_us_ssn":"610-00-4088"}

interface internetStuffData{"id":3896,"uid":"7a38b5d3-5a46-40c2-a9f5-2378d7beba97","email":"cecil.lakin@example.com","username":"jonah","password":"L035nIkCb8Ug","domain_name":"zemlak.io","ip_v4_address":"92.119.97.209","private_ip_v4_address":"10.58.14.175","public_ip_v4_address":"54.77.236.139","ip_v4_cidr":"171.59.113.128/11","ip_v6_address":"cb42:7385:c34e:400:70a9:83c4:913c:ee25","ip_v6_cidr":"e21a:621e:56f2:e5f0:a17e:29b:b0ff:bf01/106","mac_address":"a0:27:d5:7e:7b:c0","url":"http://feest-mcclure.co/denver.deckow","slug":"autem_id","user_agent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"}

interface loremIpsumData{"id":1385,"uid":"35611b6d-8740-4c70-8c75-96bcf775c530","word":"ex","words":["minima","excepturi","voluptatem"],"characters":"gztb680kf45df4i7f3njrlain5y899ly6smqhvkkd562p5atul3u4azgx6ag11zgoc1g7gmcy8jieya4tyo5x99fnfx8abrbtoq0nh7mthl6k4ji0he9a2564aqvtsdk7r76wtchcttljydo7kvtudagujm4l4e1zdu7fk0jxhu5szre9xdz6aipqswt60q0aj9xu1wv69bxnnxsezn1mx09ligx49q6egqljoeiwkng4rcpk6x9jg47cxqvebt","short_sentence":"Facilis neque aut sunt.","long_sentence":"Quis dignissimos corporis quia adipisci.","very_long_sentence":"Sit eveniet ad ut sit nemo praesentium est dolor illo minima suscipit doloribus omnis voluptas nobis facilis laborum necessitatibus dignissimos.","paragraphs":["Dignissimos aut cupiditate. Commodi quibusdam totam. Provident reprehenderit et.","Animi eum non. Tempore amet numquam. Fugiat optio suscipit.","Fugit voluptas dolore. Quia officia et. Eos perspiciatis aut."],"question":"Molestiae adipisci nemo culpa?","questions":["Sint odio aperiam?","Consequatur porro non?","Autem accusamus voluptas?","Et sit est?","Rerum voluptate aliquid?","Est accusantium nostrum?","Deleniti corrupti provident?","Est modi nesciunt?","Hic odio fuga?","Ut tenetur fuga?"]}

interface loremFlickrData{"id":7069,"uid":"2a72d1a6-de60-4fcd-b5c0-4a57da40b0d9","image":"https://loremflickr.com/300/300","image_50_60":"https://loremflickr.com/50/60","image_100_100":"https://loremflickr.com/100/100","image_200_100":"https://loremflickr.com/200/100","image_500_500":"https://loremflickr.com/500/500","image_1920_1080":"https://loremflickr.com/1920/1080"}

interface loremPixelData{"id":2024,"uid":"e2fb6988-57f1-4f6f-9553-6496f908f560","image":"https://lorempixel.com/300/300","image_50_60":"https://lorempixel.com/50/60","image_100_100":"https://lorempixel.com/100/100","image_200_100":"https://lorempixel.com/200/100","image_500_500":"https://lorempixel.com/500/500","image_1920_1080":"https://lorempixel.com/1920/1080"}

interface nationData{"id":2594,"uid":"fff22fb2-9c75-48e4-a406-bd24c06104f1","nationality":"Guianese (French)","language":"Japanese","capital":"Singapore","national_sport":"baseball","flag":"🇨🇭"}

interface numberData{"id":35,"uid":"0e362260-2dd9-4299-aa11-9cfe39b027f1","number":2256741667,"leading_zero_number":"0046078412","decimal":46.61,"normal":44.87400948491462,"hexadecimal":"375cd3eac2c77196","positive":2636.5021670894976,"negative":-577.8070394420629,"non_zero_number":3,"digit":9}

interface phoneNumberData{"id":7960,"uid":"5f8119eb-cc6f-49ac-b823-0ca838dff210","phone_number":"(415) 751-8693","cell_phone":"1-304-293-8487","cell_phone_in_e164":"+24918837530239"}

interface placeHolditData{"id":2195,"uid":"b631d846-105e-41f9-a077-1dcfaa16b6d0","image":"https://placehold.it/300x300.png","image_jpg":"https://placehold.it/300x300.jpg","image_gif":"https://placehold.it/300x300.gif"}

interface restaurantData{"id":5950,"uid":"453202c3-91c2-4e83-b24b-454de512e25a","name":"YK Bar \u0026 Grill","type":"Asian","description":"Our mission has been to help people achieve their health and wellness goals. though weve changed over the years, our values have remained the same.","review":"They are way understaffed, where the cashier needs to stop taking orders to help pack to-go orders. The line ends up piling up and people are neglected.  Seen this happen multiple times during lunch hours.","logo":"https://loremflickr.com/500/500/restaurant","phone_number":"560.138.8190 x712","address":"Apt. 471 9769 Arla Forges, North Joseph, MI 29596","hours":{"monday":{"opens_at":"9:29 AM","closes_at":"3:17 PM","is_closed":false},"tuesday":{"opens_at":"11:24 AM","closes_at":"6:28 PM","is_closed":true},"wednesday":{"opens_at":"6:12 AM","closes_at":"4:37 PM","is_closed":false},"thursday":{"opens_at":"10:56 AM","closes_at":"4:52 PM","is_closed":false},"friday":{"opens_at":"10:45 AM","closes_at":"10:13 PM","is_closed":true},"saturday":{"opens_at":"6:15 AM","closes_at":"3:49 PM","is_closed":true},"sunday":{"opens_at":"11:30 AM","closes_at":"9:21 PM","is_closed":true}}}

export function address(size: number): Promise<addressData[]>

export function appliance(size: number): Promise<applianceData[]>

export function app(size: number): Promise<appData[]>

export function bank(size: number): Promise<bankData[]>

export function beer(size: number): Promise<beerData[]>

export function blood(size: number): Promise<bloodData[]>

export function card(size: number): Promise<cardData[]>

export function cannabis(size: number): Promise<cannabisData[]>

export function code(size: number): Promise<codeData[]>

export function coffee(size: number): Promise<coffeeData[]>

export function commerce(size: number): Promise<commerceData[]>

export function company(size: number): Promise<companyData[]>

export function computer(size: number): Promise<computerData[]>

export function crypto(size: number): Promise<cryptoData[]>

export function cryptoCoin(size: number): Promise<cryptoCoinData[]>

export function color(size: number): Promise<colorData[]>

export function dessert(size: number): Promise<dessertData[]>

export function device(size: number): Promise<deviceData[]>

export function food(size: number): Promise<foodData[]>

export function name(size: number): Promise<nameData[]>

export function hipsterStuff(size: number): Promise<hipsterStuffData[]>

export function invoice(size: number): Promise<invoiceData[]>

export function user(size: number): Promise<userData[]>

export function stripe(size: number): Promise<stripeData[]>

export function subscription(size: number): Promise<subscriptionData[]>

export function vehicle(size: number): Promise<vehicleData[]>

export function idNumber(size: number): Promise<idNumberData[]>

export function internetStuff(size: number): Promise<internetStuffData[]>

export function loremIpsum(size: number): Promise<loremIpsumData[]>

export function loremFlickr(size: number): Promise<loremFlickrData[]>

export function loremPixel(size: number): Promise<loremPixelData[]>

export function nation(size: number): Promise<nationData[]>

export function number(size: number): Promise<numberData[]>

export function phoneNumber(size: number): Promise<phoneNumberData[]>

export function placeholdit(size: number): Promise<placeHolditData[]>

export function restaurant(size: number): Promise<restaurantData[]>

}

export namespace Omniauth{

    interface googleData{"provider":"google_oauth2","uid":"499592427","info":{"name":"Marcos Trantow","first_name":"Marcos","last_name":"Trantow","email":"marcos_trantow@example.org","image":"https://placehold.it/300x300.png"},"credentials":{"token":"4ab75e8454e3c2e4e259358a7853e017","refresh_token":"ba50d2b5e9c94264402ebd87d9b51469","expires_at":1677551429,"expires":true},"extra":{"raw_info":{"sub":"499592427","email":"marcos_trantow@example.org","email_verified":"false","name":"Marcos Trantow","given_name":"Marcos","family_name":"Trantow","profile":"https://plus.google.com/499592427","picture":"https://placehold.it/300x300.png","gender":"female","birthday":"1957-04-14","local":"en","hd":"funk-gerhold.com"},"id_info":{"iss":"accounts.google.com","at_hash":"9b88e9b601d1187a80378c7c490977e2","email_verified":true,"sub":"7574599430362162494427042246","azp":"APP_ID","email":"marcos_trantow@example.org","aud":"APP_ID","iat":1677995562,"exp":1646760882,"openid_id":"https://www.google.com/accounts/o8/id?id=499592427"}}}

    interface facebookData{"provider":"facebook","uid":"5168932","info":{"email":"prohaska_steven@example.org","name":"Steven Prohaska","first_name":"Steven","last_name":"Prohaska","image":"https://placehold.it/300x300.png","verified":false},"credentials":{"token":"66bd608e6d679f6d6c56b53adb866b13","expires_at":1675615000,"expires":true},"extra":{"raw_info":{"id":"5168932","name":"Steven Prohaska","first_name":"Steven","last_name":"Prohaska","link":"http://www.facebook.com/sprohaska","username":"sprohaska","location":{"id":"591884101","name":"Vonbury, Alaska"},"gender":"male","email":"prohaska_steven@example.org","timezone":-4,"locale":"en_US","verified":true,"updated_time":"2021-07-20T03:07:08+00:00"}}}

    interface twitterData{"provider":"twitter","uid":"154370","info":{"nickname":"lucillamertz","name":"Lucilla Mertz","location":"Vonborough, Iowa","image":"https://placehold.it/300x300.png","description":"Accusantium tempore alias vel.","urls":{"Website":null,"Twitter":"https://twitter.com/lucillamertz"}},"credentials":{"token":"b0a8ce4caedbd0f807ac4fee2816cb3b","secret":"fb1432b9d016fed1686bc2cbd8daafba"},"extra":{"access_token":"","raw_info":{"name":"Lucilla Mertz","listed_count":8,"profile_sidebar_border_color":"#e7abad","url":null,"lang":"en","statuses_count":497,"profile_image_url":"https://placehold.it/300x300.png","profile_background_image_url_https":"https://placehold.it/300x300.png","location":"Vonborough, Iowa","time_zone":"Hellerland","follow_request_sent":true,"id":"154370","profile_background_tile":true,"profile_sidebar_fill_color":"#afd72d","followers_count":8109,"default_profile_image":true,"screen_name":"","following":true,"utc_offset":-4,"verified":true,"favourites_count":6,"profile_background_color":"#bd128a","is_translator":false,"friends_count":1112,"notifications":false,"geo_enabled":true,"profile_background_image_url":"https://placehold.it/300x300.png","protected":false,"description":"Accusantium tempore alias vel.","profile_link_color":"#280b23","created_at":"Fri Mar 19 13:17:20 +0000 2021","id_str":"154370","profile_image_url_https":"https://placehold.it/300x300.png","default_profile":false,"profile_use_background_image":true,"entities":{"description":{"urls":[]}},"profile_text_color":"#79786d","contributors_enabled":true}}}

    interface linkedinData{"provider":"linkedin","uid":"668151","info":{"name":"Julieta Tillman","email":"julieta_tillman@example.com","nickname":"Julieta Tillman","first_name":"Julieta","last_name":"Tillman","location":"West Boydbury, North Dakota","description":"Rerum neque delectus quisquam.","image":"https://placehold.it/300x300.png","phone":"774.967.0107 x0034","headline":"Rerum neque delectus quisquam.","industry":"Sports, Baby \u0026 Toys","urls":{"public_profile":"http://www.linkedin.com/in/julietatillman"}},"credentials":{"token":"30c73ec890da81cb3dd9e928d74353df","secret":"b6849c6229495db007460589d7516290"},"extra":{"access_token":{"token":"30c73ec890da81cb3dd9e928d74353df","secret":"b6849c6229495db007460589d7516290","consumer":null,"params":{"oauth_token":"30c73ec890da81cb3dd9e928d74353df","oauth_token_secret":"b6849c6229495db007460589d7516290","oauth_expires_in":1660778656,"oauth_authorization_expires_in":1648348407},"response":null},"raw_info":{"firstName":"Julieta","headline":"Rerum neque delectus quisquam.","id":"668151","industry":"Sports, Baby \u0026 Toys","lastName":"Tillman","location":{"country":{"code":"mf"},"name":"West Nikia"},"pictureUrl":"https://placehold.it/300x300.png","publicProfileUrl":"http://www.linkedin.com/in/julietatillman"}}}

    interface githubData{"provider":"github","uid":"59690680","info":{"nickname":"willie-mayert","email":"willie.mayert@example.net","name":"Willie Mayert","image":"https://placehold.it/300x300.png","urls":{"GitHub":"https://github.com/willie-mayert"}},"credentials":{"token":"29b3bd71d64378d3b03b6a1d03f0a914","expires":false},"extra":{"raw_info":{"login":"willie-mayert","id":"59690680","avatar_url":"https://placehold.it/300x300.png","gravatar_id":"","url":"https://api.github.com/users/willie-mayert","html_url":"https://github.com/willie-mayert","followers_url":"https://api.github.com/users/willie-mayert/followers","following_url":"https://api.github.com/users/willie-mayert/following{/other_user}","gists_url":"https://api.github.com/users/willie-mayert/gists{/gist_id}","starred_url":"https://api.github.com/users/willie-mayert/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/willie-mayert/subscriptions","organizations_url":"https://api.github.com/users/willie-mayert/orgs","repos_url":"https://api.github.com/users/willie-mayert/repos","events_url":"https://api.github.com/users/willie-mayert/events{/privacy}","received_events_url":"https://api.github.com/users/willie-mayert/received_events","type":"User","site_admin":false,"name":"Willie Mayert","company":null,"blog":null,"location":"South Christopher, Oklahoma","email":"willie.mayert@example.net","hireable":null,"bio":null,"public_repos":179,"public_gists":850,"followers":556,"following":920,"created_at":"1928-06-20T17:21:54+00:00","updated_at":"2022-03-04T22:36:46+00:00"}}}

    interface appleData{"provider":"apple","uid":"874817.cec2c179270a9c6ad2153335e1b9b59e.2830","info":{"sub":"874817.cec2c179270a9c6ad2153335e1b9b59e.2830","email":"heller.carrol@example.net","first_name":"Carrol","last_name":"Heller"},"credentials":{"token":"e50a51ee49150f19c156a276fd934ab8","refresh_token":"1c19b5dbedd911fd6d2efa2a1f880167","expires_at":1665527468,"expires":true},"extra":{"raw_info":{"iss":"https://appleid.apple.com","aud":"CLIENT_ID","exp":1671184326,"iat":1652622559,"sub":"874817.cec2c179270a9c6ad2153335e1b9b59e.2830","at_hash":"23ed5a577e3722efe44466c5fb5d0d99","auth_time":1651697236,"email":"heller.carrol@example.net","email_verified":true}}}

    export function google(): Promise<googleData>

    export function facebook(): Promise<facebookData>

    export function twitter(): Promise<twitterData>

    export function linkedin(): Promise<linkedinData>

    export function github(): Promise<githubData>

    export function apple(): Promise<appleData>
    
}
