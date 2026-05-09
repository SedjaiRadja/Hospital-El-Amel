import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.webp";
import doctor3 from "../assets/doctor3.webp";
import doctor4 from "../assets/doctor4.webp";
import doctor5 from "../assets/doctor5.avif";
import doctor6 from "../assets/doctor6.jpg";
import doctor7 from "../assets/doctor7.avif";
import doctor8 from "../assets/doctor8.jpg";
import doctor9 from "../assets/doctor9.jpg";
import doctor10 from "../assets/doctor10.jpeg";

const doctors = [
  {
    id: 1,
    fullName: "Sedjai Radja",
    image: doctor1,
    dateOfBirth: "1987-10-21",
    specialty: "Cardiology",
    experienceYears: 12,
    bio: "Cardiologist specialized in interventional cardiology with over 12 years of experience treating cardiovascular diseases.",
    address: "Algiers, Algeria",
    availability: "Sunday - Thursday | 09:00 - 17:00",
    education: "MD in Cardiology - University of Algiers",
    certifications: [
      "European Society of Cardiology Certification",
      "Advanced Cardiac Life Support (ACLS)",
    ],
    rating: 4.9,
  },

  {
    id: 2,
    fullName: "Hamadi Naima",
    image: doctor2,
    dateOfBirth: "1986-05-20",
    specialty: "Pediatrics",
    email: "hamadi.naima@hospital.com",
    phone: "+213-555-0102",
    experienceYears: 8,
    bio: "Pediatrician focused on child health, growth monitoring, and preventive care.",
    address: "Oran, Algeria",
    languages: ["Arabic", "French"],
    availability: "Saturday - Wednesday | 08:30 - 16:30",
    education: "MD in Pediatrics - University of Oran",
    certifications: ["Pediatric Advanced Life Support (PALS)"],
    rating: 4.6,
  },

  {
    id: 3,
    fullName: "Khouane Alaa",
    image: doctor3,
    dateOfBirth: "1980-04-08",
    specialty: "Dentistry",
    email: "khouane.alaa@hospital.com",
    phone: "+213-555-0103",
    experienceYears: 10,
    bio: "Dentist specializing in restorative and cosmetic dentistry.",
    address: "Constantine, Algeria",
    languages: ["Arabic", "French"],
    availability: "Sunday - Thursday | 10:00 - 18:00",
    education: "DDS - University of Constantine",
    certifications: ["Cosmetic Dentistry Certification"],
    rating: 4.7,
  },

  {
    id: 4,

    fullName: "Abbou Fatima",
    image: doctor4,
    dateOfBirth: "1981-06-23",
    specialty: "Gynecology",
    email: "abbou.fatima@hospital.com",
    phone: "+213-555-0104",
    experienceYears: 6,
    bio: "Gynecologist specialized in women's reproductive health and prenatal care.",
    address: "Blida, Algeria",
    languages: ["Arabic", "French"],
    availability: "Saturday - Wednesday | 09:00 - 15:00",
    education: "MD in Gynecology - University of Blida",
    certifications: ["Obstetrics & Gynecology Board Certification"],
    rating: 4.5,
  },

  {
    id: 5,

    fullName: "Mebtoul Imane",
    image: doctor5,
    dateOfBirth: "1979-02-04",
    specialty: "Neurology",
    email: "mebtoul.imane@hospital.com",
    phone: "+213-555-0105",
    experienceYears: 11,
    bio: "Neurologist with expertise in brain disorders and neurodegenerative diseases.",
    address: "Algiers, Algeria",
    languages: ["Arabic", "French", "English"],
    availability: "Sunday - Thursday | 08:00 - 16:00",
    education: "MD in Neurology - University of Algiers",
    certifications: ["Neurodiagnostic Certification"],
    rating: 4.9,
  },

  // NEW DOCTORS

  {
    id: 6,

    fullName: "Karim Boussaid",
    image: doctor6,
    dateOfBirth: "1984-09-14",
    specialty: "Dermatology",
    email: "karim.boussaid@hospital.com",
    phone: "+213-555-0106",
    experienceYears: 9,
    bio: "Dermatologist specialized in skin diseases, cosmetic treatments, and laser therapy.",
    address: "Setif, Algeria",
    languages: ["Arabic", "French", "English"],
    availability: "Sunday - Thursday | 09:00 - 17:00",
    education: "MD in Dermatology - University of Setif",
    certifications: [
      "Dermatologic Surgery Certification",
      "Laser Therapy Certification",
    ],
    rating: 4.8,
  },

  {
    id: 7,

    fullName: "Yasmine Brahimi",
    image: doctor7,
    dateOfBirth: "1989-11-03",
    specialty: "Ophthalmology",
    email: "yasmine.brahimi@hospital.com",
    phone: "+213-555-0107",
    experienceYears: 7,
    bio: "Ophthalmologist experienced in vision correction and eye surgery treatments.",
    address: "Annaba, Algeria",
    languages: ["Arabic", "French"],
    availability: "Monday - Friday | 08:00 - 15:00",
    education: "MD in Ophthalmology - University of Annaba",
    certifications: [
      "LASIK Surgery Certification",
      "Retinal Disease Certification",
    ],
    rating: 4.7,
  },

  {
    id: 8,

    fullName: "Nadir Touati",
    image: doctor8,
    dateOfBirth: "1983-01-17",
    specialty: "Orthopedics",
    email: "nadir.touati@hospital.com",
    phone: "+213-555-0108",
    experienceYears: 13,
    bio: "Orthopedic surgeon specialized in bone injuries, fractures, and joint replacement surgeries.",
    address: "Tlemcen, Algeria",
    languages: ["Arabic", "French", "English"],
    availability: "Sunday - Thursday | 07:30 - 16:30",
    education: "MD in Orthopedic Surgery - University of Tlemcen",
    certifications: [
      "Joint Replacement Certification",
      "Sports Injury Treatment Certification",
    ],
    rating: 4.9,
  },

  {
    id: 9,

    fullName: "Samira Cheriet",
    image: doctor9,
    dateOfBirth: "1990-08-26",
    specialty: "Psychiatry",
    email: "samira.cheriet@hospital.com",
    phone: "+213-555-0109",
    experienceYears: 5,
    bio: "Psychiatrist helping patients manage anxiety, depression, and emotional disorders.",
    address: "Bejaia, Algeria",
    languages: ["Arabic", "French"],
    availability: "Saturday - Wednesday | 10:00 - 18:00",
    education: "MD in Psychiatry - University of Bejaia",
    certifications: [
      "Clinical Psychiatry Certification",
      "Mental Health Counseling Certification",
    ],
    rating: 4.6,
  },

  {
    id: 10,

    fullName: "Adel Meziane",
    image: doctor10,
    dateOfBirth: "1982-12-12",
    specialty: "Radiology",
    email: "adel.meziane@hospital.com",
    phone: "+213-555-0110",
    experienceYears: 14,
    bio: "Radiologist specialized in MRI, CT scans, and diagnostic imaging.",
    address: "Batna, Algeria",
    languages: ["Arabic", "French", "English"],
    availability: "Sunday - Thursday | 08:00 - 17:00",
    education: "MD in Radiology - University of Batna",
    certifications: [
      "Diagnostic Imaging Certification",
      "MRI Specialist Certification",
    ],
    rating: 4.8,
  },
];
export default doctors;
