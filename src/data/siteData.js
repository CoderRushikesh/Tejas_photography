/* ------------------------------------------------------------------
   SITE SETTINGS
   Contact details come from  public/site-config.js  (so you can change
   them even in the built version without rebuilding). Defaults below are
   used only if that file is missing.
------------------------------------------------------------------- */
const cfg = (typeof window !== 'undefined' && window.SITE_CONFIG) || {};

export const SITE = {
  name:          'Tejas Photography',
  owner:         'Tejas Dolas',
  // WhatsApp number: country code + number, digits only (no + or spaces)
  whatsappNumber: cfg.whatsappNumber || '919876543210',
  phoneDisplay:   cfg.phoneDisplay   || '+91 98765 43210',
  email:          cfg.email          || 'Dolastejas20@gmail.com',
  location:       cfg.location       || 'Pune, Maharashtra',
  instagram:      cfg.instagram      || 'https://www.instagram.com/tejas_dolas_photography/',
  facebook:       cfg.facebook       || '#',
  youtube:        cfg.youtube        || '#',
};

/** Builds a click-to-chat link that opens WhatsApp with the message already typed. */
export const waLink = (message = 'Hi Tejas, I would like to know more about your photography services.') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

/* ------------------------------------------------------------------
   IMAGES  — all files live in  public/images/
------------------------------------------------------------------- */
const img = (file) => `${process.env.PUBLIC_URL}/images/${file}`;

export const IMAGES = {
  hero1:   img('prewedding-couple-teal-gown.jpg'),
  hero2:   img('bridal-purple-saree.jpg'),
  about1:  img('wedding-couple-maharashtrian.jpg'),
  about2:  img('portrait-street-saree.jpg'),
  owner:   img('owner-tejas-dolas.jpg'),
  ctaBand: img('prewedding-lake-couple.jpg'),
};

// w / h = real pixel size, used to reserve space so the page does not jump while loading
export const GALLERY_ITEMS = [
  { id:0,  cat:'prewedding', src:img('prewedding-lake-couple.jpg'),         w:2000, h:1334, alt:'Pre-wedding couple shoot by the lake' },
  { id:1,  cat:'wedding',    src:img('bridal-purple-saree.jpg'),            w:1290, h:1734, alt:'Bride in purple saree with mehndi and green bangles' },
  { id:2,  cat:'portrait',   src:img('portrait-street-saree.jpg'),          w:1080, h:1350, alt:'Portrait in a saree by a street lamp post' },
  { id:3,  cat:'wedding',    src:img('wedding-couple-maharashtrian.jpg'),   w:2000, h:1334, alt:'Maharashtrian wedding couple portrait' },
  { id:4,  cat:'fashion',    src:img('fashion-ethnic-group.jpg'),           w:1080, h:1080, alt:'Ethnic fashion shoot with five models in orange' },
  { id:5,  cat:'prewedding', src:img('prewedding-couple-teal-gown.jpg'),    w:2000, h:1333, alt:'Couple pre-wedding shoot, teal gown' },
  { id:6,  cat:'portrait',   src:img('portrait-teal-saree-graffiti.jpg'),   w:1266, h:1900, alt:'Portrait in teal saree against graffiti wall' },
  { id:7,  cat:'fashion',    src:img('fashion-diamond-necklace.jpg'),       w:1080, h:952,  alt:'Diamond necklace jewellery campaign' },
  { id:8,  cat:'portrait',   src:img('portrait-beige-saree.jpg'),           w:1080, h:1163, alt:'Portrait in beige sheer saree' },
  { id:9,  cat:'fashion',    src:img('fashion-black-lehenga.jpg'),          w:1080, h:1080, alt:'Black lehenga fashion shoot' },
  { id:10, cat:'portrait',   src:img('portrait-white-shirt.jpg'),           w:1080, h:1080, alt:'Portrait in white shirt and black vest' },
  { id:11, cat:'fashion',    src:img('fashion-mens-portrait.jpg'),          w:1080, h:970,  alt:'Menswear fashion portrait' },
  { id:12, cat:'portrait',   src:img('portrait-black-dress.jpg'),           w:1030, h:1037, alt:'Portrait in black dress with silver belt' },
];

export const INSTAGRAM_IMGS = [
  img('fashion-ethnic-group.jpg'),
  img('fashion-black-lehenga.jpg'),
  img('portrait-white-shirt.jpg'),
  img('prewedding-lake-couple.jpg'),
  img('portrait-black-dress.jpg'),
  img('bridal-purple-saree.jpg'),
];

export const OWNER = {
  name:  'Tejas Dolas',
  role:  'Photographer & Founder',
  years : 'since 2018',
  bio: [
    'Tejas Dolas is the photographer behind Tejas Photography. For the last 8 years he has been behind the lens at weddings, pre-wedding shoots, portrait sessions and fashion shoots, turning real moments into frames you will want to look at for years.',
    'His approach is simple: make you comfortable, let the moment happen, and capture it with honest emotion and a cinematic eye. Every shoot is personally planned and personally shot by Tejas.',
  ],
  services: [
    'Wedding Photography', 'Pre-Wedding Shoots', 'Engagement Sessions',
    'Portrait Sessions', 'Fashion & Model Shoots', 'Brand & Jewellery Shoots',
    'Cinematic Films', 'Maternity Photography',
  ],
};

export const SERVICES = [
  { num:'01', icon:'💍', name:'Wedding Photography',     desc:'Candid and traditional — every emotion, ritual, tearful hug and joyful dance captured with quiet precision.' },
  { num:'02', icon:'🎬', name:'Cinematic Films',          desc:'Full HD and 4K wedding films with cinematic colour grading, music and storytelling — a movie of your love story.' },
  { num:'03', icon:'🌅', name:'Pre-Wedding Shoots',       desc:'Romantic, playful, bold or subtle — your story told against spectacular backdrops across India.' },
  { num:'04', icon:'👗', name:'Fashion & Model Shoots',   desc:'Editorial and portfolio shoots with styling, lighting and direction that make every outfit and every face stand out.' },
  { num:'05', icon:'👤', name:'Portrait Sessions',        desc:'Individual and family portraits that reveal personality, warmth and story — shot with artistry and intention.' },
  { num:'06', icon:'💎', name:'Brand & Jewellery Shoots', desc:'Clean, polished product and campaign imagery for jewellery, clothing and local brands that want to look premium.' },
  { num:'07', icon:'🤱', name:'Maternity Photography',    desc:'Celebrating the glow and grace of motherhood with intimate, artistic portraits that honour this magical chapter.' },
  { num:'08', icon:'💒', name:'Engagement Sessions',      desc:'Casual, candid and full of chemistry — perfect way to celebrate your YES before the big day arrives.' },
  { num:'09', icon:'🌴', name:'Destination Weddings',     desc:'We travel with you. Complete coverage of destination weddings, from the first ritual to the last dance.' },
];

export const PACKAGES = [
  {
    name:'Silver', tagline:'Perfect for intimate celebrations',
    price:'35,000', featured:false,
    features:['1 Photographer · Full Day Coverage','200+ Edited Photos','Online Gallery Delivery','Basic Cinematic Teaser','Print Ready Files'],
  },
  {
    name:'Gold', tagline:'The complete wedding experience',
    price:'65,000', featured:true,
    features:['2 Photographers · 2-Day Coverage','1000+ Edited Photos','Full Cinematic Film (10–15 min)','Pre-Wedding Shoot Included','Photo Book Album','Online Gallery + USB'],
  },
  {
    name:'Platinum', tagline:'For the grandest occasions',
    price:'1,10,000', featured:false,
    features:['3 Photographers + Drone Coverage','Unlimited Edited Photos','Cinematic Film + Short Film','Destination Pre-Wedding Shoot','Premium Leather Album','Social Media Highlights Reel','Priority 2-Week Delivery'],
  },
];

export const TESTIMONIALS = [
  { text:"I am a newbie model, but each and every picture he clicked has come out to be so professional like I've been modelling since ages. Really a great experience!!!", author:'Krishnakali Sarkar', event:'Google Review' },
  { text:"Excellent service by Tejas. He was very cooperative throughout the event and the picture quality was great. He was very punctual, and reached on time! Was super prompt and genuinely made the experience so seamless. Definitely recommend!", author:'Parvinder Singh', event:'Google Review' },
  { text:"Tejas is a great guy with pure soul. I’ve worked with many photographers, but his unique personality is super comforting. I highly recommend him.", author:'Payal', event:'Google Review · Local Guide' },
  { text:"One of the Best Photographer in Pune area. He does Professional Photography of Modelling,Short films and all Family Functions As per customers convenience.", author:'Gokul Dahiwal', event:'Google Review' },
  { text:"Being a makeup artist its very important to have a good photographer who understand your requirements. Tejas and his team did and delivered the same. Very professional and creative photographer he is. Thanks to the whole team and best wishes.", author:'Jyoti Nagare', event:'Google Review' },
  { text:"You can create magic with tha camera professionally captured perfect click tha angle of this picture is what makes this perfect shot", author:'Pandurang Bhise', event:'Google Review' },
  { text:"Great photographer. Very understanding and cooperative. Hardworking and so much talented.", author:'Anup Kumar Balyan', event:'Google Review' },
];

export const PROCESS_STEPS = [
  { num:'01', name:'First Consultation', desc:'A relaxed conversation to understand your vision, style preferences and the story you want to tell.' },
  { num:'02', name:'Planning Together',  desc:'We plan every detail — locations, timeline, special moments — so nothing is missed on the day.' },
  { num:'03', name:'We Capture Magic',   desc:'On the day, we blend in and capture genuine emotions as they unfold — naturally and authentically.' },
  { num:'04', name:'Deliver Memories',   desc:'Beautifully edited photos and films delivered within the agreed timeline to your private online gallery.' },
];

export const CONTACT_DETAILS = [
  { icon:'📱', label:'Call / WhatsApp', value:SITE.phoneDisplay },
  { icon:'✉️', label:'Email',           value:SITE.email },
  { icon:'📍', label:'Based In',        value:`${SITE.location} · Pan India` },
];

export const TICKER_ITEMS = [
  'Wedding Photography','Cinematic Films','Pre-Wedding Shoots',
  'Fashion & Model Shoots','Portrait Sessions','Brand & Jewellery Shoots',
  'Maternity Photography','Engagement Shoots','Destination Weddings',
];

export const STATS = [
  { target:400, suffix:'+', label:'Weddings' },
  { target:8,   suffix:'',  label:'Years Experience' },
  { target:10,  suffix:'',  label:'Cities Covered' },
];
