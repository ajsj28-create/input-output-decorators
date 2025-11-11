import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {
  // 🧩 Task 1
  fname: string = "Ravi";
  lname: string = "Kiran";
  age: number = 30;
  city: string = "Pune";
  profession: string = "Software Engineer";
  company: string = "TechUnity Corp";
  hobby: string = "cycling";
  experience: number = 8;
  favLang: string = "JavaScript";
  petName: string = "Bruno";
  petType: string = "dog";
  married: string = "Yes";

  // 🧩 Task 2
  studentName: string = "Aarav";
  school: string = "Sunshine Public School";
  grade: number = 7;
  favSubject: string = "Science";
  bestFriend: string = "Riya";
  favSport: string = "Cricket";
  dream: string = "Scientist";
  city2: string = "Nagpur";
  teacherName: string = "Mrs. Sharma";
  marks: number = 89;

  // 🧩 Task 3
  brand: string = "Apple";
  model: string = "iPhone 15 Pro";
  price: number = 145000;
  color: string = "Titanium Blue";
  storage: string = "256GB";
  camera: string = "48MP";
  os: string = "iOS 18";
  owner: string = "Rohit";
  purchaseYear: number = 2024;
  warranty: string = "2 years";

  // 🧩 Task 4
  movieName: string = "Inception";
  director: string = "Christopher Nolan";
  releaseYear: number = 2010;
  actor: string = "Leonardo DiCaprio";
  genre: string = "Sci-Fi";
  rating: number = 8.8;
  duration: string = "2h 28m";
  platform: string = "Netflix";
  favScene: string = "Hallway fight";

  // 🧩 Task 5
  traveler: string = "Sanya";
  country: string = "Japan";
  city5: string = "Tokyo";
  days: number = 10;
  favPlace: string = "Shibuya Crossing";
  localFood: string = "Sushi";
  stayHotel: string = "Hotel Sakura";
  travelMode: string = "Flight";
  spent: string = "₹1,20,000";

  // 🧩 Task 6
  playerName: string = "Virat Kohli";
  team: string = "India";
  runs: number = 122;
  balls: number = 63;
  opponent: string = "Pakistan";
  venue: string = "Melbourne";
  matchType: string = "T20 World Cup";
  result: string = "India won by 4 wickets";
  strikeRate: number = 193.65;

  // 🧩 Task 7
  author: string = "J.K. Rowling";
  book: string = "Harry Potter and the Sorcerer’s Stone";
  genre7: string = "Fantasy";
  published: number = 1997;
  copiesSold: string = "120 million";
  mainCharacter: string = "Harry Potter";
  setting: string = "Hogwarts";
  publisher: string = "Bloomsbury";

  // 🧩 Task 8
  shopName: string = "Gadget Hub";
  owner8: string = "Mehul";
  location: string = "Mumbai";
  openTime: string = "10 AM";
  closeTime: string = "9 PM";
  bestSelling: string = "Smartwatches";
  foundedYear: number = 2015;
  employees: number = 15;
  rating8: number = 4.7;

  // 🧩 Task 9
  trainer: string = "Neha";
  gymName: string = "FitLife Studio";
  experience9: number = 6;
  specialization: string = "Weight Training";
  location9: string = "Bangalore";
  clients: number = 120;
  timing: string = "6 AM - 10 PM";
  rating9: number = 4.9;

  // 🧩 Task 10
  restaurant: string = "Spice Villa";
  chef: string = "Rajesh";
  cuisine: string = "Indian";
  location10: string = "Hyderabad";
  signatureDish: string = "Butter Chicken";
  rating10: number = 4.8;
  established: number = 2010;
  branches: number = 5;

  // 🧩 Task 11
  singer: string = "Arijit Singh";
  concertName: string = "Soul Beats Tour";
  location11: string = "Dubai";
  date: string = "5th June 2025";
  crowd: number = 25000;
  ticketPrice: number = 8000;
  duration11: string = "3 hours";
  organizer: string = "LiveNation";

  // 🧩 Task 12
  carBrand: string = "Tesla";
  model12: string = "Model Y";
  owner12: string = "Karan";
  range: string = "455 km";
  price12: string = "₹70 lakh";
  battery: string = "75 kWh";
  topSpeed: string = "217 km/h";
  color12: string = "Midnight Blue";

  // 🧩 Task 13
  teacher: string = "Mrs. Meena";
  subject: string = "Mathematics";
  school13: string = "Green Valley School";
  experience13: number = 15;
  favTopic: string = "Geometry";
  awards: number = 3;
  city13: string = "Delhi";

  // 🧩 Task 14
  employee: string = "Suresh";
  designation: string = "Project Manager";
  department: string = "IT";
  company14: string = "NextGen Solutions";
  years: number = 10;
  city14: string = "Pune";
  projects: number = 25;
  teamSize: number = 12;

  // 🧩 Task 15
  youtuber: string = "TechGuru";
  subscribers: string = "2.3M";
  contentType: string = "Tech Reviews";
  joinYear: number = 2017;
  uploads: number = 560;
  favVideo: string = "iPhone 15 Review";
  country15: string = "India";

  // 🧩 Task 16
  game: string = "Valorant";
  player: string = "Rohan";
  rank: string = "Diamond";
  playHours: number = 1200;
  favAgent: string = "Jett";
  bestWeapon: string = "Vandal";
  region: string = "Asia Pacific";

  // 🧩 Task 17
  developer: string = "Sneha";
  stack: string = "MERN";
  company17: string = "Innovate Labs";
  exp: number = 5;
  favTech: string = "React";
  projectCount: number = 18;
  mentor: string = "Ankit";
  location17: string = "Chennai";

  // 🧩 Task 18
  photographer: string = "Rahul";
  camera18: string = "Canon EOS R5";
  specialization18: string = "Wedding Photographer";
  experience18: number = 7;
  location18: string = "Jaipur";
  awards18: number = 4;
  clients18: number = 320;
  
  // 🧩 Task 19
  chef19: string = "Aditi";
  show: string = "MasterChef India";
  season: number = 9;
  dish: string = "Truffle Risotto";
  rank19: string = "Runner-up";
  city19: string = "Ahmedabad";
  fans: string = "1M";

  // 🧩 Task 20
  artist: string = "Ravi";
  artStyle: string = "Abstract";
  medium: string = "Oil Paint";
  exhibitions: number = 12;
  awards20: number = 3;
  city20: string = "Goa";
  favPiece: string = "The Silent Wave";
  
  // 🧩 Task 21
  doctor: string = "Dr. Meera";
  specialization21: string = "Cardiologist";
  hospital: string = "City Care Hospital";
  experience21: number = 12;
  city21: string = "Pune";
  patientsPerDay: number = 30;
  rating21: number = 4.8;

  // 🧩 Task 22
  pilot: string = "Captain Arjun";
  airline: string = "Air India";
  experience22: number = 14;
  aircraft: string = "Boeing 787 Dreamliner";
  routes: string = "Delhi-London";
  flightHours: number = 9500;

  // 🧩 Task 23
  influencer: string = "Nisha Vlogs";
  platform23: string = "Instagram";
  followers: string = "850K";
  niche: string = "Travel & Lifestyle";
  collaborations: number = 45;
  country23: string = "India";

  // 🧩 Task 24
  student: string = "Kabir";
  university: string = "IIT Bombay";
  course: string = "Computer Science";
  semester: number = 5;
  cgpa: number = 9.2;
  project: string = "AI Chatbot";
  mentor24: string = "Dr. Patel";

  // 🧩 Task 25
  entrepreneur: string = "Ananya";
  startup: string = "EcoBox";
  idea: string = "Sustainable Packaging";
  founded: number = 2021;
  employees25: number = 22;
  funding: string = "₹3 crore";
  city25: string = "Bangalore";

  // 🧩 Task 1
meeting = {
  title: 'Tech Strategy Discussion',
  schedule: {
    date: '2025-12-01',
    time: '4:30 PM',
    location: { city: 'Mumbai', room: 'Conference Hall A' }
  }
};

// 🧩 Task 2
student2 = {
  name: 'Aisha Khan',
  grades: {
    subjects: [
      { name: 'Math', marks: 92 },
      { name: 'Science', marks: 88 }
    ],
    overall: 90
  }
};

// 🧩 Task 3
employee3 = {
  id: 1024,
  info: {
    name: 'Rahul Sharma',
    position: 'Frontend Developer',
    department: { name: 'IT', floor: 3 }
  }
};

// 🧩 Task 4
booking = {
  passenger: { name: 'Simran Kaur', age: 29 },
  trip: {
    from: 'Delhi',
    to: 'Paris',
    date: '2025-12-25',
    seat: { type: 'Business', number: '12B' }
  }
};

// 🧩 Task 5
course5 = {
  title: 'Full Stack Web Development',
  duration: '6 months',
  instructor: {
    name: 'Vikram Patel',
    contact: { email: 'vikram@learnhub.com', phone: '9876543210' }
  }
};

// 🧩 Task 6
order = {
  orderId: 'ORD-5487',
  customer: { name: 'Anjali Verma' },
  items: [
    { name: 'Laptop', price: 75000 },
    { name: 'Mouse', price: 1200 }
  ],
  total: 76200
};

// 🧩 Task 7
playlist = {
  name: 'Chill Vibes',
  createdBy: 'Arnav',
  songs: [
    { title: 'Ocean Eyes', artist: 'Billie Eilish' },
    { title: 'Sunflower', artist: 'Post Malone' }
  ]
};

// 🧩 Task 8
enrollment = {
  student: {
    id: 'ST-303',
    name: 'Divya Nair',
    year: 2,
    program: { name: 'B.Tech CSE', department: 'Computer Science' }
  },
  semester: 'Winter 2025',
  subjects: [
    { code: 'CS501', title: 'Data Structures', credits: 3 },
    { code: 'CS503', title: 'Operating Systems', credits: 4 }
  ],
  advisor: { name: 'Prof. Ajay Kumar', email: 'ajay@univ.edu' }
};

// 🧩 Task 9
patientRecord = {
  patientId: 'PT-4523',
  name: 'Rajeev Mehta',
  age: 45,
  visit: {
    date: '2025-10-10',
    doctor: { name: 'Dr. Rakesh Sinha', department: 'Cardiology' },
    prescription: [
      { medicine: 'Aspirin', dosage: '75mg', frequency: 'Once Daily' },
      { medicine: 'Atorvastatin', dosage: '10mg', frequency: 'Night' }
    ]
  },
  insurance: { provider: 'MediCare', policyNo: 'MC-9988' }
};

// 🧩 Task 10
transaction = {
  account: { holder: 'Farhan Ali', number: 'XXXX-7865' },
  details: {
    amount: 15000,
    type: 'Credit',
    date: '2025-11-09',
    branch: { name: 'Andheri', ifsc: 'SBIN0001234' }
  }
};

// 🧩 Task 11
product = {
  name: 'Wireless Headphones',
  price: 4999,
  manufacturer: { brand: 'SoundMax', warranty: '1 year' },
  reviews: { rating: 4.5, total: 230 }
};

// 🧩 Task 12
movie = {
  info: {
    title: 'Interstellar',
    director: { name: 'Christopher Nolan', country: 'UK' },
    release: { year: 2014, language: 'English' }
  }
};

// 🧩 Task 13
shipment = {
  trackingId: 'TRK9845',
  destination: { city: 'Chennai', country: 'India' },
  status: { current: 'In Transit', lastUpdated: '2025-11-07' }
};

// 🧩 Task 14
admission = {
  student: { name: 'Rohan Mehta', age: 19 },
  college: { name: 'IIT Bombay', course: 'B.Tech CSE' },
  session: { start: '2025-07-01', end: '2029-05-31' }
};

// 🧩 Task 15
conference = {
  name: 'JSConf India',
  year: 2025,
  location: { city: 'Goa', venue: 'IT Convention Center' },
  speakers: [
    { name: 'Tanvi Singh', topic: 'Web Performance' },
    { name: 'Harish Nair', topic: 'Angular Best Practices' }
  ]
};

// 🧩 Task 16
invoice = {
  invoiceNo: 'INV-2048',
  customer: { name: 'Pooja Desai', city: 'Ahmedabad' },
  billing: {
    items: [
      { name: 'Smartphone', price: 24000 },
      { name: 'Charger', price: 1500 }
    ],
    total: 25500
  },
  date: '2025-10-20'
};

// 🧩 Task 17
orderNow = {
  orderId: 'ORD-7856',
  customer: { name: 'Ravi Kumar', location: 'Delhi' },
  items: [
    { name: 'Wireless Mouse', price: 899 },
    { name: 'Keyboard', price: 1299 }
  ],
  totalAmount: 2198,
  status: 'Delivered'
};

// 🧩 Task 18
ticket = {
  passenger: { name: 'Neha Sharma', age: 29 },
  flight: {
    airline: 'Air India',
    number: 'AI-302',
    route: { from: 'Mumbai', to: 'Singapore' }
  },
  seat: '14B',
  date: '2025-12-04'
};

// 🧩 Task 19
transactionBank = {
  txnId: 'TXN987654',
  sender: { name: 'Kiran Verma', account: 'SB-9820' },
  receiver: { name: 'Manoj Das', account: 'SB-7411' },
  amount: 5000,
  date: '2025-11-02'
};

// 🧩 Task 20
productSell = {
  id: 'PRD-501',
  title: 'MacBook Air M3',
  specs: { processor: 'Apple M3', storage: '512GB SSD', color: 'Midnight' },
  price: 134999
};

// 🧩 Task 21
guestBook = {
  bookingId: 'HTL-3342',
  guest: { name: 'Rekha Joshi', nights: 3 },
  hotel: { name: 'Blue Lagoon', city: 'Goa' },
  room: { type: 'Deluxe', number: 407 },
  checkIn: '2025-12-20'
};

// 🧩 Task 22
cart = {
  user: { name: 'Simran Kaur' },
  items: [
    { name: 'T-shirt', quantity: 2, price: 799 },
    { name: 'Sneakers', quantity: 1, price: 2999 }
  ],
  total: 4597
};

// 🧩 Task 23
restaurantOrder = {
  orderId: 'RES-9807',
  customer: { name: 'Pratik Deshmukh', table: 5 },
  items: [
    { name: 'Paneer Tikka', price: 320 },
    { name: 'Butter Naan', price: 60 }
  ],
  total: 380
};

// 🧩 Task 24
classSchedule = {
  subject: 'Mathematics',
  teacher: { name: 'Mr. Rajesh', room: '201A' },
  time: { start: '10:00 AM', end: '11:00 AM' }
};

// 🧩 Task 25
ecommerceOrder = {
  orderId: 'ORD-9999',
  customer: {
    name: 'Tanya Kapoor',
    contact: { email: 'tanya.kapoor@mail.com', phone: '9876543210' },
    address: {
      street: '45, Rosewood Apartments',
      city: 'Gurgaon',
      pin: 122002
    }
  },
  items: [
    { name: 'iPhone 15', qty: 1, price: 79999 },
    { name: 'AirPods Pro', qty: 1, price: 24999 }
  ],
  payment: { mode: 'Credit Card', status: 'Paid' },
  delivery: { expected: '2025-11-12', status: 'Dispatched' }
};

  constructor() {}

  ngOnInit(): void {}

}