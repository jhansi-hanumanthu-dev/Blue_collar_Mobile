import { Job } from "../types/Job";
export const locations = {
  Madhapur: { en: "Madhapur", hi: "माधापुर", te: "మాధాపూర్" },
  Kondapur: { en: "Kondapur", hi: "कोंडापुर", te: "కొండాపూర్" },
  Gachibowli: { en: "Gachibowli", hi: "गाचीबौली", te: "గచ్చిబౌలి" },
  HitechCity: { en: "Hitech City", hi: "हाइटेक सिटी", te: "హైటెక్ సిటీ" }
};

export const jobs: Job[] = [
  {
    id: 1,
    category: "maid",
    title: { en: "Full-time House Maid", hi: "फुल टाइम कामवाली", te: "ఫుల్ టైమ్ మేడ్" },
    salary: "₹8,000",
    distance: "1 km",
    location: locations.Madhapur,
    rating: 4.2,
    verified: true,
    description: {
      en: "Responsible for cleaning, cooking, and household chores.",
      hi: "सफाई, खाना बनाने और घर के कामों की जिम्मेदारी।",
      te: "వెంట్రుక, వంట మరియు ఇంటి పనుల బాధ్యత."
    }
  },
  {
    id: 2,
    category: "maid",
    title: { en: "Part-time Maid", hi: "पार्ट टाइम कामवाली", te: "పార్ట్ టైమ్ మేడ్" },
    salary: "₹5,000",
    distance: "3 km",
    location: locations.Kondapur,
    rating: 4.0,
    verified: false,
    description: {
      en: "Assist with daily household cleaning tasks on a part-time basis.",
      hi: "पार्ट-टाइम आधार पर दैनिक घर के सफाई कार्यों में सहायता।",
      te: "పార్ట్-టైమ్‌గా రోజువారీ ఇంటి శుభ్రత పనులను సహాయపడటం."
    }
  },
  {
    id: 3,
    category: "maid",
    title: { en: "Nanny / Child Care Maid", hi: "नैनी / बच्चों की देखभाल", te: "న్యానీ / పిల్లల సంరక్షణ" },
    salary: "₹10,000",
    distance: "2 km",
    location: locations.Gachibowli,
    rating: 4.5,
    verified: true,
    description: {
      en: "Take care of children, play with them, and manage daily routines.",
      hi: "बच्चों की देखभाल करें, उनके साथ खेलें और दैनिक दिनचर्या का प्रबंधन करें।",
      te: "పిల్లలను చూసుకోవడం, వారి తో ఆడటం మరియు దినచర్యను నిర్వహించడం."
    }
  },
  {
    id: 4,
    category: "maid",
    title: { en: "Night Shift Maid", hi: "नाइट शिफ्ट कामवाली", te: "నైట్ షిఫ్ట్ మేడ్" },
    salary: "₹7,500",
    distance: "4 km",
    location: locations.HitechCity,
    rating: 4.1,
    verified: false,
    description: {
      en: "Perform household tasks during night shift hours.",
      hi: "नाइट शिफ्ट के दौरान घर के काम करें।",
      te: "రాత్రి షిఫ్ట్ సమయంలో ఇంటి పనులు చేయండి."
    }
  },
  {
    id: 5,
    category: "maid",
    title: { en: "Senior Care Maid", hi: "बुजुर्ग देखभाल कामवाली", te: "సీనియర్ కేర్ మేడ్" },
    salary: "₹9,000",
    distance: "5 km",
    location: locations.Kondapur,
    rating: 4.3,
    verified: true,
    description: {
      en: "Assist elderly people with daily activities and personal care.",
      hi: "वृद्ध लोगों की दैनिक गतिविधियों और व्यक्तिगत देखभाल में सहायता।",
      te: "వృద్ధులకు రోజువారీ కార్యకలాపాలు మరియు వ్యక్తిగత జాగ్రత్తలలో సహాయం చేయండి."
    }
  },

  {
    id: 6,
    category: "guard",
    title: { en: "Security Guard", hi: "सिक्योरिटी गार्ड", te: "సెక్యూరిటీ గార్డ్" },
    salary: "₹12,000",
    distance: "2 km",
    location: locations.Gachibowli,
    rating: 4.5,
    verified: true,
    description: {
      en: "Maintain safety and security of premises and people.",
      hi: "सुरक्षा और परिसर की निगरानी।",
      te: "ప్రాంగణం మరియు ప్రజల భద్రతను నిర్వహించడం."
    }
  },
  {
    id: 7,
    category: "guard",
    title: { en: "Night Guard", hi: "नाइट गार्ड", te: "నైట్ గార్డ్" },
    salary: "₹13,000",
    distance: "3 km",
    location: locations.Madhapur,
    rating: 4.3,
    verified: false,
    description: {
      en: "Monitor the premises during night hours for safety.",
      hi: "रात्रि में परिसर की निगरानी।",
      te: "రాత్రి సమయంలో ప్రాంగణం పర్యవేక్షణ."
    }
  },

  {
    id: 8,
    category: "delivery",
    title: { en: "Delivery Boy", hi: "डिलीवरी बॉय", te: "డెలివరీ బాయ్" },
    salary: "₹15,000",
    distance: "3 km",
    location: locations.Kondapur,
    rating: 3.9,
    verified: false,
    description: {
      en: "Deliver items quickly and safely to customers.",
      hi: "सामान जल्दी और सुरक्षित रूप से डिलीवर करें।",
      te: "వస్తువులను త్వరగా మరియు భద్రంగా డెలివర్ చేయండి."
    }
  },
  {
    id: 9,
    category: "delivery",
    title: { en: "Part-time Delivery", hi: "पार्ट टाइम डिलीवरी", te: "పార్ట్ టైమ్ డెలివరీ" },
    salary: "₹10,000",
    distance: "5 km",
    location: locations.Gachibowli,
    rating: 4.1,
    verified: true,
    description: {
      en: "Deliver packages on part-time schedule.",
      hi: "पार्ट-टाइम डिलीवरी शेड्यूल।",
      te: "పార్ట్-టైమ్ షెడ్యూల్ లో సరుకు డెలివర్ చేయండి."
    }
  },

  {
    id: 10,
    category: "driver",
    title: { en: "Personal Car Driver", hi: "निजी कार ड्राइवर", te: "వ్యక్తిగత కార్ డ్రైవర్" },
    salary: "₹14,000",
    distance: "2 km",
    location: locations.Madhapur,
    rating: 4.0,
    verified: true,
    description: {
      en: "Drive personal or assigned cars safely.",
      hi: "निजी या असाइन की गई कार को सुरक्षित रूप से चलाएं।",
      te: "వ్యక్తిగత లేదా కేటాయించిన కార్లను సురక్షితంగా డ్రైవ్ చేయండి."
    }
  },
  {
    id: 11,
    category: "driver",
    title: { en: "Delivery Driver", hi: "डिलीवरी ड्राइवर", te: "డెలివరీ డ్రైవర్" },
    salary: "₹12,500",
    distance: "3 km",
    location: locations.Kondapur,
    rating: 3.8,
    verified: false,
    description: {
      en: "Deliver items safely following route instructions.",
      hi: "निर्देशों के अनुसार सुरक्षित रूप से डिलीवर करें।",
      te: "నిర్దేశాలను అనుసరించి సురక్షితంగా సరుకు డెలివర్ చేయండి."
    }
  },

  {
    id: 12,
    category: "plumber",
    title: { en: "Residential Plumber", hi: "घर का प्लम्बर", te: "ఇంటి ప్లంబర్" },
    salary: "₹11,000",
    distance: "2 km",
    location: locations.HitechCity,
    rating: 4.2,
    verified: true,
    description: {
      en: "Fix pipes, taps, and water systems in homes.",
      hi: "घर में पाइप, नल और पानी की प्रणाली ठीक करें।",
      te: "ఇంట్లో పైపులు, ట్యాప్‌లు మరియు వాటర్ సిస్టమ్స్‌ని మరమ్మత్తు చేయండి."
    }
  },
  {
    id: 13,
    category: "plumber",
    title: { en: "Pipe Fitting Expert", hi: "पाइप फिटिंग विशेषज्ञ", te: "పైప్ ఫిట్టింగ్ నిపుణుడు" },
    salary: "₹12,000",
    distance: "4 km",
    location: locations.Madhapur,
    rating: 4.0,
    verified: false,
    description: {
      en: "Specialist in pipe installation and maintenance.",
      hi: "पाइप इंस्टॉलेशन और रखरखाव में विशेषज्ञ।",
      te: "పైప్ ఇన్‌స్టాలేషన్ మరియు నిర్వహణలో నిపుణుడు."
    }
  },

  {
    id: 14,
    category: "cook",
    title: { en: "Home Cook", hi: "घरेलू रसोइया", te: "ఇంటి వంటవాడు" },
    salary: "₹8,500",
    distance: "2 km",
    location: locations.Gachibowli,
    rating: 4.4,
    verified: true,
    description: {
      en: "Prepare meals for families at home.",
      hi: "परिवारों के लिए घर में भोजन तैयार करें।",
      te: "ఇంటిలో కుటుంబాలకు భోజనం సిద్ధం చేయండి."
    }
  },
  {
    id: 15,
    category: "cook",
    title: { en: "Restaurant Cook", hi: "रेस्टोरेंट रसोइया", te: "రెస్టారెంట్ వంటవాడు" },
    salary: "₹12,000",
    distance: "5 km",
    location: locations.Madhapur,
    rating: 4.1,
    verified: false,
    description: {
      en: "Cook meals professionally in a restaurant.",
      hi: "रेस्टोरेंट में पेशेवर रूप से भोजन पकाएं।",
      te: "రెస్టారెంట్‌లో వంట పనులను నిపుణులుగా చేయండి."
    }
  },

  {
    id: 16,
    category: "babysitter",
    title: { en: "Babysitter", hi: "बच्चों की देखभाल", te: "బాల సంరక్షకుడు" },
    salary: "₹6,000",
    distance: "3 km",
    location: locations.Kondapur,
    rating: 4.0,
    verified: true,
    description: {
      en: "Take care of children while parents are away.",
      hi: "माता-पिता अनुपस्थित होने पर बच्चों की देखभाल।",
      te: "పెరెంట్స్ లేకపోవడంలో పిల్లల జాగ్రత్త తీసుకోండి."
    }
  },
  {
    id: 17,
    category: "babysitter",
    title: { en: "Nanny", hi: "नैनी", te: "న్యానీ" },
    salary: "₹9,000",
    distance: "4 km",
    location: locations.Gachibowli,
    rating: 4.3,
    verified: true,
    description: {
      en: "Supervise children and help with learning activities.",
      hi: "बच्चों की निगरानी और सीखने की गतिविधियों में मदद करें।",
      te: "పిల్లలను పర్యవేక్షించండి మరియు నేర్చుకునే కార్యకలాపాలలో సహాయం చేయండి."
    }
  },

  {
    id: 18,
    category: "electrician",
    title: { en: "Home Electrician", hi: "घरेलू इलेक्ट्रीशियन", te: "ఇంటి ఎలక్ట్రిషియన్" },
    salary: "₹10,000",
    distance: "3 km",
    location: locations.HitechCity,
    rating: 4.1,
    verified: false,
    description: {
      en: "Repair and maintain electrical wiring and devices.",
      hi: "बिजली के तार और उपकरणों की मरम्मत और रखरखाव।",
      te: "విద్యుత్ వైర్లను మరియు పరికరాలను మరమ్మత్తు చేయండి."
    }
  },

  {
    id: 19,
    category: "carpenter",
    title: { en: "Furniture Carpenter", hi: "फर्नीचर बढ़ई", te: "ఫర్నిచర్ కార్పెంటర్" },
    salary: "₹11,500",
    distance: "4 km",
    location: locations.Madhapur,
    rating: 4.2,
    verified: true,
    description: {
      en: "Build and repair furniture for homes and offices.",
      hi: "घरों और कार्यालयों के लिए फर्नीचर बनाना और मरम्मत करना।",
      te: "ఇంట్లు మరియు కార్యాలయాల కోసం ఫర్నీచర్ నిర్మించడం మరియు మరమ్మత్తు చేయడం."
    }
  },
  {
    id: 20,
    category: "tutor",
    title: { en: "Math Tutor", hi: "गणित शिक्षक", te: "గణిత టీచర్" },
    salary: "₹12,000",
    distance: "2 km",
    location: locations.Gachibowli,
    rating: 4.5,
    verified: true,
    description: {
      en: "Teach mathematics to students of all levels.",
      hi: "सभी स्तरों के छात्रों को गणित पढ़ाएं।",
      te: "అన్ని స్థాయిల విద్యార్థులకు గణితం బోధించండి."
    }
  },
  {
    id: 21,
    category: "tutor",
    title: { en: "English Tutor", hi: "अंग्रेज़ी शिक्षक", te: "ఇంగ్లీష్ టీచర్" },
    salary: "₹10,500",
    distance: "3 km",
    location: locations.Madhapur,
    rating: 4.2,
    verified: true,
    description: {
      en: "Teach English language and grammar to students.",
      hi: "छात्रों को अंग्रेज़ी भाषा और व्याकरण पढ़ाएं।",
      te: "విద్యార్థులకు ఇంగ్లీష్ భాష మరియు వ్యాకరణం బోధించండి."
    }
  }
];
