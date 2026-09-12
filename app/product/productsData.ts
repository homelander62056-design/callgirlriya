export interface ProductItem {
  id: string | number;
  name: string;
  city: string;
  title: string;
  description: string;
  phone: string;
  hasWhatsapp: boolean;
  whatsappNumber: string;
  age: number;
  rating: number;
  status: string;
  image: string; // Image path or URL
  aboutMe?: string;
  services?: string[];
  locationDetail?: string;
  height?: string;
  weight?: string;
  figure?: string;
  hair?: string;
  eyes?: string;
  languages?: string[];
  timing?: string;
  badge?: string;
  availableFor?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export const initialProductsData: ProductItem[] = [
  // 1. Banjara Hills
  {
    id: "ananya-sharma-hyderabad-banjara-hills",
    name: "Ananya Sharma",
    city: "Hyderabad / Banjara Hills",
    title: "Hey I am Ananya provide all service Real meet and video call in Banjara Hills 💋✨",
    description: "I am high class independent companion with attractive figure in Banjara Hills. Sexy curvy figure will get u mad. Very neat and clean. Available 24/7 for luxury hotel and home visits with complete privacy guaranteed.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image1.avif",
    aboutMe: "GUARANTEE FULL SATISFACTION & IN CASE OF ANY UNHAPPY EXPERIENCE, WE WOULD REFUND YOUR FEES, WITHOUT ANY QUESTIONS ASKED 👉 WILL PROVIDE YOU WITH SEXY MODELS WHO WILL DANCE & DRINK WITH YOU AND ALSO PROVIDE YOU RELAXING COMPANIONSHIP. 👉YOU MAY TAKE THEM OUT FOR A PARTY OR PRIVATE DINNER. 👉THESE GIRLS ARE INTERESTED IN MAKING YOUR TIME IN HYDERABAD SPECIAL.\n\nBookings Open Now! Excellent High profile Independent Female Model VIP High Class And Top Class Service with us in Banjara Hills Hyderabad.",
    metaTitle: "Ananya Sharma – Call Girl in Banjara Hills Hyderabad | 24/7",
    metaDescription: "Meet Ananya Sharma, a high-class independent companion in Banjara Hills Hyderabad. Real meet & video call available 24/7. Luxury hotel & home visits with full privacy.",
  },

  // 2. Jubilee Hills
  {
    id: "pooja-hegde-hyderabad-jubilee-hills",
    name: "Pooja Hegde",
    city: "Hyderabad / Jubilee Hills",
    title: "VIP Companion & Model Service in Jubilee Hills Hyderabad 👑",
    description: "Charming and friendly VIP companion in Jubilee Hills. Professional service for corporate events, dinner dates, and luxury hotel stays. Real meet available.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image2.avif",
    aboutMe: "High profile Independent Female Model VIP High Class Service in Jubilee Hills Hyderabad. Professional service provider with discrete companionship and entertainment guaranteed.",
    metaTitle: "Pooja Hegde – VIP Escort in Jubilee Hills Hyderabad | Model",
    metaDescription: "Pooja Hegde offers VIP companion & model services in Jubilee Hills Hyderabad. Available for corporate events, dinner dates & luxury hotel stays. Real meet guaranteed.",
  },

  // 3. Hitec City
  {
    id: "priya-reddy-hyderabad-hitec-city",
    name: "Priya Reddy",
    city: "Hyderabad / Hitec City",
    title: "Premium College Escort Service in Hitec City 🔥",
    description: "Sophisticated and educated companion available in Hitec City near Cyber Towers. 100% genuine photos, sweet nature and fully confidential service guaranteed.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image3.avif",
    aboutMe: "100% genuine photos, sweet nature and fully confidential service guaranteed for luxury hotel outcalls and residential visits in Hitec City Hyderabad.",
    metaTitle: "Priya Reddy – Call Girl in Hitec City Hyderabad | Premium",
    metaDescription: "Priya Reddy is a premium college companion in Hitec City Hyderabad near Cyber Towers. 100% genuine photos & confidential hotel/home outcall service.",
  },

  // 4. Gachibowli
  {
    id: "sneha-rao-hyderabad-gachibowli",
    name: "Sneha Rao",
    city: "Hyderabad / Gachibowli",
    title: "Independent IT Park Escort in Gachibowli & DLF 🌸",
    description: "Located near Gachibowli IT Hub and DLF Cyber City. Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality for IT executives and travelers.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image4.avif",
    aboutMe: "Sweet, friendly demeanor, instant booking for outcall and incall services with top hospitality in Gachibowli Hyderabad.",
    metaTitle: "Sneha Rao – Escort in Gachibowli IT Park Hyderabad | Instant",
    metaDescription: "Sneha Rao is an independent escort near Gachibowli Cyber City Hyderabad. Instant incall & outcall booking for IT executives. Friendly & discreet service.",
  },

  // 5. Madhapur
  {
    id: "priya-sen-hyderabad-madhapur",
    name: "Priya Sen",
    city: "Hyderabad / Madhapur",
    title: "Celebrity & Model Escort Service in Madhapur 💃",
    description: "High class model companion in Madhapur. Perfect for business travelers seeking premium companion experience with full privacy near Inorbit Mall.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 21,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image5.avif",
    aboutMe: "High class model companion in Madhapur Hyderabad. Perfect for business travelers seeking premium companion experience with full privacy.",
    metaTitle: "Priya Sen – Model Escort in Madhapur Hyderabad | High Class VIP",
    metaDescription: "Priya Sen is a high-class model escort in Madhapur Hyderabad. Ideal for business travelers seeking a premium companion experience with complete privacy.",
  },

  // 6. Kondapur
  {
    id: "kavya-verma-hyderabad-kondapur",
    name: "Kavya Verma",
    city: "Hyderabad / Kondapur",
    title: "Luxury Escort & Dating Partner in Kondapur Hyderabad 💕",
    description: "Gentle and attentive escort partner in Kondapur near HITEX and Botanical Garden. Fast response on call and WhatsApp for instant hotel visits.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image6.avif",
    aboutMe: "Gentle and attentive escort partner in Kondapur Hyderabad. Fast response on call and WhatsApp for instant hotel visits.",
    metaTitle: "Kavya Verma – Luxury Escort in Kondapur Hyderabad | Fast Booking",
    metaDescription: "Kavya Verma is a luxury escort & dating partner in Kondapur Hyderabad near HITEX. Fast WhatsApp response & instant hotel visit booking available.",
  },

  // 7. Begumpet
  {
    id: "divya-chowdary-hyderabad-begumpet",
    name: "Divya Chowdary",
    city: "Hyderabad / Begumpet",
    title: "Independent Escort Companion in Begumpet ✨",
    description: "Quiet and respectful escort in Begumpet area. Direct call booking available with 100% privacy assurance for discreet gentlemen.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "online",
    image: "/images/image7.avif",
    aboutMe: "Quiet and respectful escort in Begumpet Hyderabad. Direct call booking available with 100% privacy assurance.",
    metaTitle: "Divya Chowdary – Independent Escort in Begumpet Hyderabad",
    metaDescription: "Divya Chowdary is a quiet & respectful independent escort in Begumpet Hyderabad. Direct call booking with 100% privacy assurance for discreet gentlemen.",
  },

  // 8. Somajiguda
  {
    id: "neha-singh-hyderabad-somajiguda",
    name: "Neha Singh",
    city: "Hyderabad / Somajiguda",
    title: "High Profile Call Girl Service in Somajiguda 🌹",
    description: "Attractive and friendly companion in central Somajiguda near Raj Bhavan. Available for evening dates, luxury hotel visits and long drives across Hyderabad.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image8.avif",
    aboutMe: "Attractive and friendly companion in Somajiguda Hyderabad. Available for evening dates, hotel visits and relaxing companionship.",
    metaTitle: "Neha Singh – High Profile Call Girl in Somajiguda Hyderabad",
    metaDescription: "Neha Singh is an attractive high-profile companion in Somajiguda Hyderabad. Available for evening dates, luxury hotel visits & long drives across Hyderabad.",
  },

  // 9. Kukatpally
  {
    id: "simran-kaur-hyderabad-kukatpally",
    name: "Simran Kaur",
    city: "Hyderabad / Kukatpally",
    title: "Independent Young Escort Girl in Kukatpally KPHB 💋",
    description: "Beautiful independent girl in Kukatpally KPHB Colony. Polite, punctual and committed to providing a peaceful and glamorous companion experience.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image9.avif",
    aboutMe: "Beautiful independent girl in Kukatpally Hyderabad. Polite, punctual and committed to providing a peaceful experience.",
    metaTitle: "Simran Kaur – Young Independent Escort in Kukatpally Hyderabad",
    metaDescription: "Simran Kaur is a beautiful independent escort in Kukatpally Hyderabad. Polite, punctual & committed to a glamorous companion experience. Book now via WhatsApp.",
  },

  // 10. Financial District
  {
    id: "aarti-patel-hyderabad-financial-district",
    name: "Aarti Patel",
    city: "Hyderabad / Financial District",
    title: "College Student Escort Service in Financial District Nanakramguda 🎓",
    description: "Fun-loving college student escort in Financial District Nanakramguda. Flexible timings, affordable packages, instant WhatsApp chat.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image10.avif",
    aboutMe: "Fun-loving college student escort in Financial District Hyderabad. Flexible timings, affordable packages, instant WhatsApp chat.",
    metaTitle: "Aarti Patel – College Escort in Financial District Hyderabad",
    metaDescription: "Aarti Patel is a fun-loving college escort in Financial District Nanakramguda Hyderabad. Flexible timings, affordable packages & instant WhatsApp booking.",
  },

  // 11. Manikonda
  {
    id: "ishita-roy-hyderabad-manikonda",
    name: "Ishita Roy",
    city: "Hyderabad / Manikonda",
    title: "Corporate Companion & VIP Escort in Manikonda & Lanco Hills 💼",
    description: "Elegant corporate companion in Manikonda near Lanco Hills. Professional, discrete and well-mannered for corporate executives.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.6,
    status: "Busy",
    image: "/images/image11.avif",
    aboutMe: "Elegant corporate companion in Manikonda Hyderabad. Professional, discrete and well-mannered.",
    metaTitle: "Ishita Roy – Corporate VIP Escort in Manikonda Hyderabad | Lanco",
    metaDescription: "Ishita Roy is an elegant corporate companion in Manikonda near Lanco Hills Hyderabad. Professional & discreet service for IT executives and business travelers.",
  },

  // 12. Ameerpet
  {
    id: "meera-joshi-hyderabad-ameerpet",
    name: "Meera Joshi",
    city: "Hyderabad / Ameerpet",
    title: "Independent Escort Service in Ameerpet Hyderabad 🌺",
    description: "Charming independent escort in Ameerpet. Ideal companion for relaxing cafe dates, city drives and hotel stays.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image12.avif",
    aboutMe: "Charming independent escort in Ameerpet Hyderabad. Ideal companion for relaxing evenings and luxury hotel stays.",
    metaTitle: "Meera Joshi – Independent Escort in Ameerpet Hyderabad",
    metaDescription: "Meera Joshi is a charming escort in Ameerpet Hyderabad. Perfect for cafe dates, city drives & luxury hotel stays. Call or WhatsApp anytime.",
  },

  // 13. Secunderabad
  {
    id: "shreya-das-hyderabad-secunderabad",
    name: "Shreya Das",
    city: "Hyderabad / Secunderabad",
    title: "Five Star Hotel Escort Partner in Secunderabad & Paradise ⭐",
    description: "Sophisticated escort girl in Secunderabad area. Specially available for luxury 5-star hotel outcalls and VIP heritage visits.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 21,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image13.avif",
    aboutMe: "Sophisticated escort girl in Secunderabad & Paradise area. Specially available for luxury 5-star hotel outcalls.",
    metaTitle: "Shreya Das – 5-Star Hotel Escort in Secunderabad | Paradise",
    metaDescription: "Shreya Das is a sophisticated escort in Secunderabad & Paradise Hyderabad. Specialises in luxury 5-star hotel outcalls & VIP heritage visits. Discreet & professional.",
  },

  // 14. Punjagutta
  {
    id: "natasha-malik-hyderabad-punjagutta",
    name: "Natasha Malik",
    city: "Hyderabad / Punjagutta",
    title: "Fashion Model Escort in Punjagutta Hyderabad 💄",
    description: "Glamorous fashion model companion in Punjagutta near Hyderabad Central. Warm nature, hygienic, and committed to total discretion.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image14.avif",
    aboutMe: "Glamorous fashion model companion in Punjagutta Hyderabad. Warm nature, hygienic, and committed to discretion.",
    metaTitle: "Natasha Malik – Model Escort in Punjagutta Hyderabad | Central",
    metaDescription: "Natasha Malik is a glamorous fashion model escort in Punjagutta near Hyderabad Central. Warm, hygienic & fully discreet companion service.",
  },

  // 15. Miyapur
  {
    id: "sonal-chauhan-hyderabad-miyapur",
    name: "Sonal Chauhan",
    city: "Hyderabad / Miyapur",
    title: "Independent Escort & Companion in Miyapur Hyderabad 🌟",
    description: "Friendly independent girl in Miyapur. Quick response on WhatsApp with direct phone call support for dinner dates.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image15.avif",
    aboutMe: "Friendly independent girl in Miyapur Hyderabad. Quick response on WhatsApp with direct phone call support.",
    metaTitle: "Sonal Chauhan – Escort in Miyapur Hyderabad",
    metaDescription: "Sonal Chauhan is a friendly independent escort in Miyapur Hyderabad. Quick WhatsApp & call response. Available for dinner dates & hotel visits.",
  },

  // 16. Film Nagar
  {
    id: "nisha-agarwal-hyderabad-film-nagar",
    name: "Nisha Agarwal",
    city: "Hyderabad / Film Nagar",
    title: "Desi College Girl Escort in Film Nagar Jubilee Hills 💖",
    description: "Lovely desi college girl in Film Nagar near Jubilee Hills. Sweet conversationalist and attentive companion for private time.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image16.avif",
    aboutMe: "Lovely desi college girl in Film Nagar Hyderabad. Sweet conversationalist and attentive companion.",
    metaTitle: "Nisha Agarwal – Desi College Escort in Film Nagar Hyderabad",
    metaDescription: "Nisha Agarwal is a lovely desi college girl escort in Film Nagar Jubilee Hills Hyderabad. Sweet conversationalist & attentive private companion.",
  },

  // 17. Dilsukhnagar
  {
    id: "tanvi-shah-hyderabad-dilsukhnagar",
    name: "Tanvi Shah",
    city: "Hyderabad / Dilsukhnagar",
    title: "High Class Escort in Dilsukhnagar Hyderabad ✨",
    description: "Mature and caring companion in Dilsukhnagar. Safe, secure, and hassle-free meeting arrangements in East Hyderabad.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image17.avif",
    aboutMe: "Mature and caring companion in Dilsukhnagar Hyderabad. Safe, secure, and hassle-free meeting arrangements.",
    metaTitle: "Tanvi Shah – High Class Escort in Dilsukhnagar Hyderabad",
    metaDescription: "Tanvi Shah is a mature high-class escort in Dilsukhnagar Hyderabad. Safe, secure & hassle-free meeting arrangements. Call or WhatsApp to book.",
  },

  // 18. LB Nagar
  {
    id: "maya-deshmukh-hyderabad-lb-nagar",
    name: "Maya Deshmukh",
    city: "Hyderabad / LB Nagar",
    title: "Luxury VIP Escort in LB Nagar & Uppal 🏰",
    description: "High profile companion residing in LB Nagar. Available for industrial executive meets and local weekend hotel stays.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image18.avif",
    aboutMe: "High profile companion in LB Nagar Hyderabad. Available for outstation travels and local weekend stays.",
    metaTitle: "Maya Deshmukh – VIP Escort in LB Nagar Hyderabad",
    metaDescription: "Maya Deshmukh is a high-profile luxury escort in LB Nagar Hyderabad. Available for executive meets & weekend hotel stays. Book via WhatsApp.",
  },

  // 19. Abids
  {
    id: "kriti-malhotra-hyderabad-abids",
    name: "Kriti Malhotra",
    city: "Hyderabad / Abids",
    title: "Independent High Class Escort in Abids & Koti Hyderabad 💫",
    description: "Elegant companion near Abids commercial hub. Top rated verified profile with excellent feedback.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image19.avif",
    aboutMe: "Elegant companion in Abids Hyderabad. Top rated verified profile with excellent feedback.",
    metaTitle: "Kriti Malhotra – High Class Escort in Abids Hyderabad",
    metaDescription: "Kriti Malhotra is a top-rated elegant escort near Abids Hyderabad transit hub. Verified profile with excellent feedback. Instant call & WhatsApp booking.",
  },

  // 20. Himayatnagar
  {
    id: "payal-rajput-hyderabad-himayatnagar",
    name: "Payal Rajput",
    city: "Hyderabad / Himayatnagar",
    title: "Independent Escort Partner in Himayatnagar & Narayanguda 🌸",
    description: "Polite independent profile in Himayatnagar area. Simple booking process via direct phone call.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.7,
    status: "Offline",
    image: "/images/image20.avif",
    aboutMe: "Polite independent profile in Himayatnagar Hyderabad. Simple booking process via direct phone call.",
    metaTitle: "Payal Rajput – Independent Escort in Himayatnagar Hyderabad",
    metaDescription: "Payal Rajput is a polite independent escort in Himayatnagar Hyderabad. Simple and quick booking process via direct phone call. Discreet service.",
  },

  // 21. Mehdipatnam
  {
    id: "swati-mishra-hyderabad-mehdipatnam",
    name: "Swati Mishra",
    city: "Hyderabad / Mehdipatnam",
    title: "High Profile Call Girl Service in Mehdipatnam & Masab Tank 💖",
    description: "Friendly companion in Mehdipatnam area. 100% real photos, safety first policy and privacy guaranteed.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image21.avif",
    aboutMe: "Friendly companion in Mehdipatnam Masab Tank Hyderabad. 100% real photos, safety first policy and privacy guaranteed.",
    metaTitle: "Swati Mishra – Call Girl in Mehdipatnam Hyderabad",
    metaDescription: "Swati Mishra is a high-profile companion in Mehdipatnam & Masab Tank Hyderabad. 100% real photos, safety-first policy and complete privacy guaranteed.",
  },

  // 22. Shamshabad
  {
    id: "rashmi-gautham-hyderabad-shamshabad",
    name: "Rashmi Gautham",
    city: "Hyderabad / Shamshabad",
    title: "Independent Escort Girl in Shamshabad Near Airport 🔥",
    description: "Attractive girl available for home and luxury hotel outcall services in Shamshabad Hyderabad.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image22.avif",
    aboutMe: "Attractive girl available for home and hotel outcall services in Shamshabad Hyderabad.",
    metaTitle: "Rashmi Gautham – Escort in Shamshabad Airport Hyderabad",
    metaDescription: "Rashmi Gautham is an attractive independent escort in Shamshabad near Airport Hyderabad. Available for home & luxury hotel outcall services anytime.",
  },

  // 23. Lingampally
  {
    id: "deepika-nambiar-hyderabad-lingampally",
    name: "Deepika Nambiar",
    city: "Hyderabad / Lingampally",
    title: "College Student Escort in Lingampally & BHEL ⚾",
    description: "Young college escort near Lingampally and BHEL. Fun, energetic and well-mannered companion for outings.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.7,
    status: "Available Now",
    image: "/images/image23.avif",
    aboutMe: "Young college escort near Lingampally Hyderabad. Fun, energetic and well-mannered companion for outings.",
    metaTitle: "Deepika Nambiar – College Escort in Lingampally Hyderabad",
    metaDescription: "Deepika Nambiar is a fun & energetic college escort near Lingampally Hyderabad. Well-mannered companion for outings, dates & hotel visits.",
  },

  // 24. Tolichowki
  {
    id: "shruti-iyer-hyderabad-tolichowki",
    name: "Shruti Iyer",
    city: "Hyderabad / Tolichowki",
    title: "Verified Independent Companion in Tolichowki Hyderabad 🌷",
    description: "Sweet and honest companion in Tolichowki near Gachibowli Road. Direct phone call booking and quick WhatsApp response.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image24.avif",
    aboutMe: "Sweet and honest companion in Tolichowki Hyderabad. Direct phone call booking and quick WhatsApp response.",
    metaTitle: "Shruti Iyer – Verified Escort in Tolichowki Hyderabad",
    metaDescription: "Shruti Iyer is a verified sweet companion in Tolichowki near Gachibowli Road Hyderabad. Direct call booking & quick WhatsApp response guaranteed.",
  },

  // 25. Begumpet Airport Area
  {
    id: "trisha-mukherjee-hyderabad-begumpet-airport",
    name: "Trisha Mukherjee",
    city: "Hyderabad / Begumpet Airport Area",
    title: "VIP Airport Transit & Hotel Escort in Begumpet & Bowenpally 🏖️",
    description: "High class model companion for Hyderabad layovers and luxury hotel visits in Begumpet.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 25,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image25.avif",
    aboutMe: "High class model companion for Hyderabad layovers and hotel visits in Begumpet.",
    metaTitle: "Trisha Mukherjee – Transit Escort in Begumpet Hyderabad | VIP",
    metaDescription: "Trisha Mukherjee is a VIP model escort for Hyderabad layovers & hotel stays in Begumpet. High-class discreet service available 24/7.",
  },

  // 26. SR Nagar
  {
    id: "aditi-bhatia-hyderabad-sr-nagar",
    name: "Aditi Bhatia",
    city: "Hyderabad / SR Nagar",
    title: "Young Independent Girl Escort in SR Nagar Hyderabad 🎀",
    description: "Polite young companion in SR Nagar area near Ameerpet. Available for daytime and overnight bookings.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 21,
    rating: 4.6,
    status: "Available Now",
    image: "/images/image26.avif",
    aboutMe: "Polite young companion in SR Nagar Hyderabad. Available for daytime and overnight bookings.",
    metaTitle: "Aditi Bhatia – Young Escort in SR Nagar Hyderabad",
    metaDescription: "Aditi Bhatia is a polite young independent escort in SR Nagar near Ameerpet Hyderabad. Available for daytime & overnight bookings via call.",
  },

  // 27. Srinagar Colony
  {
    id: "radhika-merchant-hyderabad-srinagar-colony",
    name: "Radhika Merchant",
    city: "Hyderabad / Srinagar Colony",
    title: "VIP Escort & Dating Partner in Srinagar Colony Banjara Hills ✈️",
    description: "Located in serene Srinagar Colony Hyderabad. Ideal companion for executives, fine dining and peaceful layovers.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 24,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image27.avif",
    aboutMe: "Located in Srinagar Colony Hyderabad. Ideal companion for travelers and executives with prompt service.",
    metaTitle: "Radhika Merchant – VIP Escort in Srinagar Colony Hyderabad",
    metaDescription: "Radhika Merchant is a VIP escort & dating partner in Srinagar Colony Hyderabad. Ideal for executives, fine dining & peaceful private companionship.",
  },

  // 28. Kavuri Hills
  {
    id: "jyoti-saxena-hyderabad-kavuri-hills",
    name: "Jyoti Saxena",
    city: "Hyderabad / Kavuri Hills",
    title: "Independent Escort & Dating Partner in Kavuri Hills Madhapur 💐",
    description: "Charming independent partner in Kavuri Hills Madhapur area. Clean, safe, and professional companion service.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.8,
    status: "Available Now",
    image: "/images/image28.avif",
    aboutMe: "Charming independent partner in Kavuri Hills Hyderabad. Clean, safe, and professional companion service.",
    metaTitle: "Jyoti Saxena – Independent Escort in Kavuri Hills Hyderabad",
    metaDescription: "Jyoti Saxena is a charming independent escort in Kavuri Hills Madhapur Hyderabad. Clean, safe & professional companion service. Call or WhatsApp to book.",
  },

  // 29. Khairatabad
  {
    id: "mansi-joshi-hyderabad-khairatabad",
    name: "Mansi Joshi",
    city: "Hyderabad / Khairatabad",
    title: "High Profile Call Girl Service in Khairatabad & Somajiguda 🌺",
    description: "Respectful companion in Khairatabad Hyderabad. Booking available directly via phone line and WhatsApp.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 23,
    rating: 4.7,
    status: "Busy",
    image: "/images/image29.avif",
    aboutMe: "Respectful companion in Khairatabad Hyderabad. Booking available directly via phone line.",
    metaTitle: "Mansi Joshi – High Profile Escort in Khairatabad Hyderabad",
    metaDescription: "Mansi Joshi is a respectful high-profile companion in Khairatabad Hyderabad. Direct WhatsApp & phone call booking. Discreet & professional service.",
  },

  // 30. Hafeezpet
  {
    id: "sunita-rao-hyderabad-hafeezpet",
    name: "Sunita Rao",
    city: "Hyderabad / Hafeezpet",
    title: "Desi College Escort Service in Hafeezpet Hyderabad 💋",
    description: "Sweet desi college girl in Hafeezpet near Hitec City. High quality companion service for home and hotel outcalls.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image30.avif",
    aboutMe: "Sweet desi college girl in Hafeezpet Hyderabad. High quality companion service for home and hotel outcalls.",
    metaTitle: "Sunita Rao – Desi College Escort in Hafeezpet Hyderabad",
    metaDescription: "Sunita Rao is a sweet desi college escort in Hafeezpet near Hitec City Hyderabad. High-quality home & hotel outcall service. Instant WhatsApp booking available.",
  },

  // 31. Kompally
  {
    id: "sweeti-rao-hyderabad-kompally",
    name: "Sweeti Rao",
    city: "Hyderabad / Kompally",
    title: "Hot Girl in Kompally Hyderabad 💋",
    description: "Sweeti desi college girl in Kompally on Medchal Highway. High quality companion service for home and hotel outcalls.",
    phone: "+91 82941 07610",
    hasWhatsapp: true,
    whatsappNumber: "918294107610",
    age: 22,
    rating: 4.9,
    status: "Available Now",
    image: "/images/image31.avif",
    aboutMe: "Sweeti desi college girl in Kompally Hyderabad. High quality companion service for home and hotel outcalls.",
    metaTitle: "Sweeti Rao – Desi College Escort in Kompally Hyderabad",
    metaDescription: "Sweeti Rao is a sweet desi college escort in Kompally Hyderabad. High-quality home & hotel outcall service. Instant WhatsApp booking available.",
  },
];
