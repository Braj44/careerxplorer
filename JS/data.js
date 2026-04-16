// ════════════════════════════════════════
// data.js — All static data for CareerXplorer
// ════════════════════════════════════════

const QUIZ_QUESTIONS = [
  { cat:"Logical Thinking", text:"Math ke kisi problem ko solve karne mein tumhe kaisa lagta hai?",
    opts:[{ico:"😍",text:"Bahut maza aata hai, puzzles mujhe pasand hain",s:{sci:3,com:1,art:0}},{ico:"🤔",text:"Thoda mushkil lagta hai, par try karta/ti hoon",s:{sci:1,com:2,art:0}},{ico:"😐",text:"Boring lagta hai, creative cheezein zyada pasand hain",s:{sci:0,com:0,art:3}},{ico:"💰",text:"Sirf tabhi pasand jab paise se related ho",s:{sci:0,com:3,art:0}}]},
  { cat:"Creative Thinking", text:"Free time mein tum kya karna pasand karte ho?",
    opts:[{ico:"🎭",text:"Drawing, music, dance ya drama",s:{sci:0,com:0,art:3}},{ico:"🔬",text:"Experiments karna ya naye cheezein discover karna",s:{sci:3,com:0,art:0}},{ico:"📈",text:"Games ya trading mein strategy banana",s:{sci:0,com:3,art:0}},{ico:"📚",text:"History ya stories padhna",s:{sci:0,com:1,art:2}}]},
  { cat:"Future Vision", text:"10 saal baad tum apne aap ko kahan dekhte ho?",
    opts:[{ico:"👨‍💻",text:"Doctor, Engineer ya Scientist",s:{sci:3,com:0,art:0}},{ico:"👔",text:"Business owner ya finance expert",s:{sci:0,com:3,art:0}},{ico:"🎬",text:"Designer, filmmaker ya artist",s:{sci:0,com:0,art:3}},{ico:"⚖️",text:"Lawyer, IAS officer ya journalist",s:{sci:0,com:1,art:2}}]},
  { cat:"Favorite Subjects", text:"School mein kaun sa subject tumhara favorite hai?",
    opts:[{ico:"⚗️",text:"Science (Physics, Chemistry, Biology)",s:{sci:3,com:0,art:0}},{ico:"📊",text:"Maths aur Economics",s:{sci:1,com:3,art:0}},{ico:"🖼️",text:"Art, Music ya Drama",s:{sci:0,com:0,art:3}},{ico:"🌍",text:"History, Geography ya Languages",s:{sci:0,com:1,art:2}}]},
  { cat:"Problem Solving", text:"Koi bada problem aane par tum kya karte ho?",
    opts:[{ico:"📐",text:"Data collect, analyze, logical solution nikalo",s:{sci:3,com:1,art:0}},{ico:"💡",text:"Creative tarike se sochta/ti hoon",s:{sci:0,com:0,art:3}},{ico:"🤝",text:"Team ke saath milke practical solution",s:{sci:0,com:3,art:1}},{ico:"📝",text:"Write karo ya discuss karo",s:{sci:0,com:1,art:2}}]},
  { cat:"What Excites You", text:"Tumhare liye zyada exciting kya hai?",
    opts:[{ico:"🧬",text:"Jeevan ke secrets — cells, DNA, planets",s:{sci:3,com:0,art:0}},{ico:"📉",text:"Market, profit-loss, investments",s:{sci:0,com:3,art:0}},{ico:"🎵",text:"Art, music aur self-expression",s:{sci:0,com:0,art:3}},{ico:"🗣️",text:"Log aur unki kahaniyaan",s:{sci:0,com:1,art:2}}]},
  { cat:"Tech & Gadgets", text:"Technology ke baare mein tumhara nazar kaisa hai?",
    opts:[{ico:"🤖",text:"AI, robots — bahut fascinating lagta hai!",s:{sci:3,com:1,art:0}},{ico:"📱",text:"Digital marketing aur e-commerce mein interest",s:{sci:0,com:3,art:0}},{ico:"🎮",text:"Game design aur animation!",s:{sci:0,com:0,art:3}},{ico:"😊",text:"Theek hai, jitni zaroorat utna use",s:{sci:0,com:1,art:1}}]},
  { cat:"How People Know You", text:"Log tumhe kaise jaante hain?",
    opts:[{ico:"🔍",text:"Curious aur analytical — hamesha 'why' poochha karte ho",s:{sci:3,com:0,art:0}},{ico:"💸",text:"Practical aur smart — business sense",s:{sci:0,com:3,art:0}},{ico:"🌈",text:"Creative aur expressive — ideas se bharpoor",s:{sci:0,com:0,art:3}},{ico:"💬",text:"Communicator — baaton se dil jeet lete ho",s:{sci:0,com:1,art:2}}]},
  { cat:"Work Style", text:"Kaise kaam karna tumhe zyada comfortable lagta hai?",
    opts:[{ico:"🏗️",text:"Lab ya field mein practical kaam",s:{sci:3,com:0,art:1}},{ico:"🏢",text:"Office mein strategies aur planning",s:{sci:0,com:3,art:0}},{ico:"🎨",text:"Studio ya creative space mein kaam",s:{sci:0,com:0,art:3}},{ico:"📜",text:"Research aur writing",s:{sci:1,com:1,art:2}}]},
  { cat:"Biggest Dream", text:"Sabse bada sapna kya hai?",
    opts:[{ico:"🚀",text:"Space ya medical research mein discover karna",s:{sci:3,com:0,art:0}},{ico:"🏦",text:"Bada business ya startup banana",s:{sci:0,com:3,art:0}},{ico:"🏆",text:"Award-winning artist ya designer banna",s:{sci:0,com:0,art:3}},{ico:"🌏",text:"Society change karna — politics, law ya media",s:{sci:0,com:1,art:2}}]}
];

const STREAM_DATA = {
  sci:{ name:"Science Stream", emoji:"🔬", color:"#4f8ef7",
    tagline:"Tumhara analytical aur curious mind Science ke liye bana hai!",
    opps:["Engineering (IIT/NIT)","MBBS/Medical","Data Science","Research/PhD","Space/ISRO","Pharmacy"],
    rank:"Scientist" },
  com:{ name:"Commerce Stream", emoji:"📈", color:"#f7c948",
    tagline:"Business aur finance tumhari duniya hai — lakho opportunities hain!",
    opps:["CA/CMA/CS","MBA/BBA","Banking & Finance","Entrepreneur","Stock Market","E-Commerce"],
    rank:"Strategist" },
  art:{ name:"Arts & Humanities", emoji:"🎨", color:"#a78bfa",
    tagline:"Creative aur expressive talent tumhara superpower hai!",
    opps:["Fashion Design","Journalism","Law (LLB)","Psychology","UX Design","Civil Services"],
    rank:"Creator" }
};

const CAREERS = [
  {stream:"sci",icon:"👨‍💻",title:"Software Engineer",salary:"₹8–40L",desc:"Apps, websites aur software banao. India ki fastest growing field.",steps:["B.Tech CS","Internships","TCS/Infosys/Startups"]},
  {stream:"sci",icon:"🏥",title:"MBBS Doctor",salary:"₹10–50L",desc:"Logo ki jaan bachao. Noble aur respected profession.",steps:["PCB in 12th","NEET Exam","MBBS 5.5 years"]},
  {stream:"sci",icon:"🚀",title:"Data Scientist",salary:"₹10–35L",desc:"Data se insights nikalo, AI models banao. Bahut demand hai.",steps:["B.Tech/B.Sc","Python/ML Skills","Top Companies"]},
  {stream:"sci",icon:"🔬",title:"Research Scientist",salary:"₹6–25L",desc:"New discoveries karo — labs, universities ya govt institutes mein.",steps:["B.Sc/B.Tech","M.Sc/M.Tech","PhD + Research"]},
  {stream:"com",icon:"📊",title:"Chartered Accountant",salary:"₹7–30L",desc:"India ka most respected finance profession. High demand always.",steps:["12th Commerce","CA Foundation","CA Final"]},
  {stream:"com",icon:"🏢",title:"MBA Graduate",salary:"₹8–50L",desc:"Management, marketing, finance — CEO tak ka rasta.",steps:["BBA/B.Com","CAT/GMAT","IIM/Top MBA"]},
  {stream:"com",icon:"🏦",title:"Investment Banker",salary:"₹12–60L",desc:"Companies ko fund raise karne mein help karo. High paying!",steps:["B.Com/BBA","MBA Finance","Goldman/JPMorgan"]},
  {stream:"com",icon:"🚀",title:"Entrepreneur",salary:"Unlimited 🔥",desc:"Apna khud ka business banao. Risk high, reward bhi high!",steps:["Any Degree","Skills Build","Launch Startup"]},
  {stream:"art",icon:"🎨",title:"UX/UI Designer",salary:"₹6–25L",desc:"Apps aur websites ko beautiful aur usable banao.",steps:["Design Degree","Portfolio Build","Tech Companies"]},
  {stream:"art",icon:"⚖️",title:"Advocate/Lawyer",salary:"₹5–50L",desc:"Insaaf ke liye lado. Corporate ya criminal law mein career.",steps:["12th Any Stream","LLB 5 years","Practice/Firm"]},
  {stream:"art",icon:"📺",title:"Journalist",salary:"₹4–20L",desc:"News report karo, stories khojo. Print, digital ya TV mein.",steps:["BA Journalism","Internships","Media House"]},
  {stream:"art",icon:"🧠",title:"Psychologist",salary:"₹5–20L",desc:"Logo ki mental health mein help karo. Growing field in India.",steps:["BA Psychology","MA/M.Sc","Clinical Practice"]}
];

const CAREER_DETAILS = [
  {icon:"👨‍💻",title:"Software Engineer",salary:"₹8–40L",stream:"sci",desc:"Apps, websites aur software banao. India ki fastest growing field hai. Startups se lekar Google tak har jagah demand hai.",skills:["Python/Java/C++","Problem Solving","Data Structures","Git & Version Control"],exams:["JEE Main/Advanced","BITSAT","State CETs"],colleges:["IITs","NITs","BITS Pilani","VIT"],scope:"Bahut high — India mein 10 lakh+ software jobs har saal!"},
  {icon:"🏥",title:"MBBS Doctor",salary:"₹10–50L",stream:"sci",desc:"Logo ki sehat bachao. India mein doctor hona ek bahut respected profession hai.",skills:["Biology (Must)","Chemistry","Patience","Communication"],exams:["NEET UG"],colleges:["AIIMS Delhi","JIPMER","BHU","Govt Medical Colleges"],scope:"Always high demand — India mein doctor-patient ratio bahut kam hai"},
  {icon:"🚀",title:"Data Scientist",salary:"₹10–35L",stream:"sci",desc:"Data se patterns nikalo, AI models banao, business decisions help karo.",skills:["Python","Statistics","Machine Learning","SQL"],exams:["JEE/GATE","B.Sc Statistics"],colleges:["IITs","IISc","ISI Kolkata","BITS"],scope:"Exploding demand — 2025 mein India mein 1 lakh+ data science jobs"},
  {icon:"🔬",title:"Research Scientist",salary:"₹6–25L",stream:"sci",desc:"New discoveries karo — physics, chemistry, biology, space science mein.",skills:["Deep Subject Knowledge","Analytical Thinking","Writing","Patience"],exams:["JEE/NEET","JEST","CSIR NET"],colleges:["IISc Bangalore","IITs","TIFR","IISER"],scope:"Stable govt jobs + international opportunities"},
  {icon:"📊",title:"Chartered Accountant",salary:"₹7–30L",stream:"com",desc:"India ka most prestigious finance certification. Companies ki accounts, tax, audit — sab CA karta hai.",skills:["Accountancy","Taxation","Law","Maths"],exams:["CA Foundation","CA Intermediate","CA Final"],colleges:["ICAI (No college needed)","B.Com kaafi hai"],scope:"50,000+ vacancies har saal. Big 4 firms mein ₹20L+ package"},
  {icon:"🏢",title:"MBA Graduate",salary:"₹8–50L",stream:"com",desc:"Management, marketing, finance, HR — MBA ke baad leadership roles milti hain.",skills:["Leadership","Communication","Analytics","Networking"],exams:["CAT","XAT","GMAT (foreign)"],colleges:["IIM Ahmedabad/Bangalore/Calcutta","XLRI","FMS Delhi"],scope:"Top IIMs se average package ₹25-35L per annum"},
  {icon:"🏦",title:"Investment Banker",salary:"₹12–60L",stream:"com",desc:"Companies ko fund raise karne mein help karo, mergers-acquisitions handle karo.",skills:["Finance","Excel/Modelling","Networking","Hustle"],exams:["CAT/GMAT","CFA (optional)"],colleges:["IIMs","ISB Hyderabad","NMIMS"],scope:"Goldman Sachs, JP Morgan, Morgan Stanley hire karte hain India se"},
  {icon:"🚀",title:"Entrepreneur",salary:"Unlimited",stream:"com",desc:"Apna khud ka business banao. E-commerce, SaaS, D2C brand — kuch bhi!",skills:["Resilience","Sales","Marketing","Finance Basics"],exams:["Koi exam nahi!"],colleges:["IITs/IIMs helpful","Par zaruri nahi"],scope:"India mein startup ecosystem bahut bada ho gaya — 100+ unicorns hain!"},
  {icon:"🎨",title:"UX/UI Designer",salary:"₹6–25L",stream:"art",desc:"Apps aur websites ko beautiful aur easy-to-use banao.",skills:["Figma/Adobe XD","User Research","Visual Design","Prototyping"],exams:["NID (Design)","UCEED","State Design Exams"],colleges:["NID Ahmedabad","IDC IIT Bombay","NIFT"],scope:"Every tech product ko designer chahiye — very high demand"},
  {icon:"⚖️",title:"Advocate/Lawyer",salary:"₹5–50L",stream:"art",desc:"Insaaf ke liye lado. Corporate law mein ₹50L+ bhi possible hai.",skills:["Reading & Research","Argumentation","Writing","Patience"],exams:["CLAT","AILET","LSAT India"],colleges:["NLSIU Bangalore","NLU Delhi","Symbiosis Law"],scope:"Corporate lawyers ki bahut demand hai"},
  {icon:"📺",title:"Journalist",salary:"₹4–20L",stream:"art",desc:"News report karo, stories khojo, truth samaj ke saamne rakho.",skills:["Writing","Communication","Research","Curiosity"],exams:["IIMC Entrance","Journalism Entrances"],colleges:["IIMC Delhi","Jamia Millia","Symbiosis"],scope:"Digital journalism bahut bada ho raha hai — YouTube journalists bhi ₹20L+ kamate hain"},
  {icon:"🧠",title:"Psychologist",salary:"₹5–20L",stream:"art",desc:"Logo ki mental health mein help karo. India mein bahut growing field!",skills:["Empathy","Communication","Research","Counselling"],exams:["BA/BSc Psychology","RCI Registration"],colleges:["NIMHANS Bangalore","Delhi University","Christ University"],scope:"India mein mental health awareness badh rahi hai — demand growing!"}
];

const COLLEGES = [
  {stream:"sci",rank:1,name:"IIT Bombay",city:"Mumbai, Maharashtra",tags:["B.Tech","M.Tech","JEE Advanced"],color:"#4f8ef7"},
  {stream:"sci",rank:2,name:"IIT Delhi",city:"New Delhi",tags:["B.Tech","Research","JEE Advanced"],color:"#4f8ef7"},
  {stream:"sci",rank:3,name:"AIIMS Delhi",city:"New Delhi",tags:["MBBS","Medical","NEET"],color:"#4f8ef7"},
  {stream:"sci",rank:4,name:"NIT Trichy",city:"Tamil Nadu",tags:["B.Tech","JEE Mains","Affordable"],color:"#4f8ef7"},
  {stream:"com",rank:1,name:"SRCC Delhi",city:"Delhi University",tags:["B.Com(H)","Economics","Cut-off 99%+"],color:"#f7c948"},
  {stream:"com",rank:2,name:"Narsee Monjee",city:"Mumbai",tags:["BMS","BAF","Finance"],color:"#f7c948"},
  {stream:"com",rank:3,name:"Christ University",city:"Bangalore",tags:["BBA","B.Com","Finance"],color:"#f7c948"},
  {stream:"com",rank:4,name:"Symbiosis Pune",city:"Pune",tags:["BBA","Economics","Management"],color:"#f7c948"},
  {stream:"art",rank:1,name:"LSR College",city:"Delhi University",tags:["Psychology","English","Sociology"],color:"#a78bfa"},
  {stream:"art",rank:2,name:"Jamia Millia Islamia",city:"New Delhi",tags:["Journalism","Law","Design"],color:"#a78bfa"},
  {stream:"art",rank:3,name:"NID Ahmedabad",city:"Gujarat",tags:["Design","B.Des","Top Design School"],color:"#a78bfa"},
  {stream:"art",rank:4,name:"NLSIU Bangalore",city:"Karnataka",tags:["Law","LLB","CLAT"],color:"#a78bfa"}
];

const COLLEGE_DETAILS = [
  {rank:1,name:"IIT Bombay",city:"Mumbai",stream:"sci",color:"#4f8ef7",desc:"India ka #1 engineering college. World class research facilities, amazing placements.",courses:["B.Tech (8 branches)","M.Tech","PhD","Dual Degree"],cutoff:"JEE Advanced Top 100 rank",fees:"₹2.5L/year (hostel included)",placement:"Avg ₹20L, highest ₹2Cr+",website:"iitb.ac.in"},
  {rank:2,name:"IIT Delhi",city:"New Delhi",stream:"sci",color:"#4f8ef7",desc:"Delhi mein best engineering college. Government, industry aur research — teeno mein top alumni hain.",courses:["B.Tech","M.Tech","MBA (DMS)","PhD"],cutoff:"JEE Advanced Top 200 rank",fees:"₹2.5L/year",placement:"Avg ₹18L, highest ₹1.5Cr+",website:"iitd.ac.in"},
  {rank:3,name:"AIIMS Delhi",city:"New Delhi",stream:"sci",color:"#4f8ef7",desc:"India ka best medical college. World class facilities aur free fees!",courses:["MBBS","MD/MS","BSc Nursing","PhD"],cutoff:"NEET Top 50 rank (General)",fees:"₹6,000/year (almost free!)",placement:"Govt jobs + private hospitals ₹15L+",website:"aiims.edu"},
  {rank:4,name:"NIT Trichy",city:"Tamil Nadu",stream:"sci",color:"#4f8ef7",desc:"Best NIT in India. Placements bahut acchi hain.",courses:["B.Tech (10 branches)","M.Tech","MBA","PhD"],cutoff:"JEE Mains Top 5000 rank",fees:"₹1.5L/year",placement:"Avg ₹8L, highest ₹80L",website:"nitt.edu"},
  {rank:1,name:"SRCC Delhi",city:"Delhi University",stream:"com",color:"#f7c948",desc:"India ka #1 commerce college. SRCC se B.Com karna ek prestige hai.",courses:["B.Com (Hons)","Economics (Hons)"],cutoff:"99%+ in 12th",fees:"₹15,000/year (DU rates)",placement:"Internships at Big 4, Banks, Consulting",website:"srcc.du.ac.in"},
  {rank:2,name:"Narsee Monjee",city:"Mumbai",stream:"com",color:"#f7c948",desc:"Mumbai ka top commerce college. Industry-specific courses jo placements mein help karte hain.",courses:["BMS","BAF","BBI","B.Com"],cutoff:"92-95% in 12th",fees:"₹80,000/year",placement:"Good placements in BFSI sector",website:"nmcollege.in"},
  {rank:3,name:"Christ University",city:"Bangalore",stream:"com",color:"#f7c948",desc:"South India ka top choice for BBA/B.Com. Modern curriculum, good industry connections.",courses:["BBA","B.Com","BA Economics","MBA"],cutoff:"85-90% + entrance test",fees:"₹1.5L/year",placement:"KPMG, Deloitte, startups mein",website:"christuniversity.in"},
  {rank:4,name:"Symbiosis Pune",city:"Pune",stream:"com",color:"#f7c948",desc:"Private college mein top choice. Diverse student body, good infrastructure.",courses:["BBA","B.Com","Economics","MBA"],cutoff:"SET entrance exam",fees:"₹2L/year",placement:"Average ₹5-8L package",website:"symbiosiscollege.edu.in"},
  {rank:1,name:"LSR College",city:"Delhi University",stream:"art",color:"#a78bfa",desc:"Arts ke liye Delhi ka best women's college. Psychology, History, English — sabhi top departments hain.",courses:["BA Psychology","BA English","BA History","BA Economics"],cutoff:"97-99% in 12th",fees:"₹12,000/year",placement:"Civil Services, Media, Research",website:"lsr.edu.in"},
  {rank:2,name:"Jamia Millia Islamia",city:"New Delhi",stream:"art",color:"#a78bfa",desc:"Journalism ke liye best. Law Faculty bhi bahut strong hai.",courses:["BA Journalism","LLB","BA History","Fine Arts"],cutoff:"Entrance exam based",fees:"₹20,000/year",placement:"Media houses, Law firms",website:"jmi.ac.in"},
  {rank:3,name:"NID Ahmedabad",city:"Gujarat",stream:"art",color:"#a78bfa",desc:"India ka #1 design college. Creativity ki koi limit nahi yahan.",courses:["B.Des (8 specializations)","M.Des","PhD"],cutoff:"NID entrance exam",fees:"₹2L/year",placement:"Apple, Google, Indian brands hire karte hain",website:"nid.edu"},
  {rank:4,name:"NLSIU Bangalore",city:"Karnataka",stream:"art",color:"#a78bfa",desc:"India ka #1 law college. 5 saal baad top law firm mein ₹15L+ package.",courses:["BA LLB (5 year)","LLM","PhD Law"],cutoff:"CLAT Top 100 rank",fees:"₹2.5L/year",placement:"Top law firms, Corporate, Judiciary",website:"nls.ac.in"}
];
