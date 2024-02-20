import { BriefcaseIcon, StarIcon } from '@heroicons/react/20/solid'
import benefit_1 from '@/assets/benefit_1.png'
import benefit_2 from '@/assets/benefit_2.png'
import benefit_3 from '@/assets/benefit_3.png'
import sponsor_one from '@/assets/image_13.png'
import sponsor_two from '@/assets/image_15.png'
import sponsor_three from '@/assets/image_17.png'
import sponsor_four from '@/assets/image_18.png'
import sponsor_five from '@/assets/image_19.png'
import sponsor_six from '@/assets/image_20.png'
import ante_2 from '@/assets/pics/_DSC3608.jpeg'
import anatomy_lab from '@/assets/pics/anatomylab.jpg'
import aquila from '@/assets/pics/aquila.jpeg'
import christa from '@/assets/pics/christa.jpeg'
import ekosse from '@/assets/pics/ekosse.jpeg'
import eosse from '@/assets/pics/eseosa.jpeg'
import evar from '@/assets/pics/evar.jpeg'
import isaac from '@/assets/pics/isaacRudisingwa.png'
import jean from '@/assets/pics/JeanRobert.jpeg'
import manzi from '@/assets/pics/manzi.jpg'
import multiuser from '@/assets/pics/multi-user-lab.png'
import ante from '@/assets/pics/Nwalahnjie_Anye_Akumawah_(The african Leadership University).jpg'
import recordings from '@/assets/pics/recordings_lab.png'
import surgery from '@/assets/pics/surgery_lab.png'
import wendy from '@/assets/pics/wendy.png'

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "benefits",
      title: "Benefits",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "teams",
      title: "Teams",
    },
]

export const features = [
  {
    id: "feature-1",
    icon: StarIcon,
    title: "Reduced Cost",
    content:
      "With Our Virtual Labs reduce the cost of building facilities",
  },
  {
    id: "feature-2",
    icon: StarIcon,
    title: "Medical Training",
    content:
      "Learn how to use medical equipment before stepping into real world. ",
  },
  {
    id: "feature-3",
    icon: BriefcaseIcon,
    title: "Experts",
    content:
      "Train and learn from experts across the globe with our simulation technology",
  },
  {
    id: "feature-4",
    icon: StarIcon,
    title: "Immersive Training",
    content:
      "Practice clinical cases in an immersive environment",
  }
]

export const productFeatures = [
  {
    title: 'Anatomy Lab',
    image: anatomy_lab,
    description: 'Learn Anatomy at the tip of your fingers with complex simulations and outcomes linked to every body part.'
  },
  {
    title: 'Surgery Lab',
    image: surgery,
    description: 'You can practise at your own pace while timing your understanding of various steps required to complete a surgery, ranging through various tiers of understanding.'
  },
  {
    title: 'AI Training',
    image: '',
    description: 'Get deep understanding of your performance in real time with our AI System'
  },
  {
    title: 'Sugery Recording Labs',
    image: recordings,
    description: 'Immerse yourself in live surgeries of various types'
  },
  {
    title: 'Multi User',
    image: multiuser,
    description: 'Take your learning beyond the boundaries of your country or region and learn from experts across the world while collaborating with others students in VR'
  }
]

export const slides = [
  {
  rating: 1,
  quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
  author: "Michael Scott",
  role: "Medical Student, B&B",
  image: ''
  },
  {
  rating: 3,
  quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
  author: "M Scott",
  role: "Medical Student, B&B",
  image: ''
  },
  {
  rating: 4,
  quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
  author: "Michael S",
  role: "Medical Student, B&B",
  image: ''
  },
  {
  rating: 4,
  quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
  author: "Michael S",
  role: "Medical Student, B&B",
  image: ''
  },
  {
  rating: 4,
  quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
  author: "Michael S",
  role: "Medical Student, B&B",
  image: ''
  },
  // Add more slides as needed
]

export const team = [
  {
    id: 1,
    name: 'Nwalahnjie Akumawah',
    email: 'nwalahnjie.medixr@gmail.com',
    imageUrl: ante,
    role: 'CEO',
    description: 'Computer Graphics Engineer with experience in Cyber Security.',
    linkedin: '',
    github: ''
  },
  {
    id: 2,
    name: 'Eseosa Kay-Uwagboe',
    email: 'eseosa.medixr@gmail.com',
    imageUrl: eosse,
    role: 'CTO',
    description: '3D Experience Artist with importance to details',
    linkedin: '',
    github: ''
  },
  {
    id: 3,
    name: 'Jean Robert Gatwaza',
    email: 'jeanrobertgatwaza.medixr@gmail.com',
    imageUrl: jean,
    role: 'CMO',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    linkedin: '',
    github: ''
  },
  {
    id: 4,
    name: 'Jill Doe',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'COO',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    linkedin: '',
    github: ''
  },
  {
    id: 5,
    name: 'Jones Doe',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'Business Manager',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    linkedin: '',
    github: ''
  },
  {
    id: 6,
    name: 'Jones Doe',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'Content Management',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    linkedin: '',
    github: ''
  },
  {
    id: 7,
    name: 'Jones Doe',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'Content Management',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    linkedin: '',
    github: ''
  },
  {
    id: 8,
    name: 'Jannet Doe',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'UI/UX Designer Intern',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    linkedin: '',
    github: ''
  },
]

export const experts = [
  {
    id: 1,
    name: 'Dr Zyh',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'Patient Care Expert',
    description: 'Dr Zyh has worked in several help post and hospitals around Cameroon and has wide experience in patient consultation and currently runs EasyHealth which brings home consultations'
  },
  {
    id: 2,
    name: 'Dr Daniel',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'Radiologies Expert',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolorum quod iste nostrum ducimus quo. Delectus unde natus provident illum ex, a qui voluptatibus molestias explicabo suscipit tenetur! Eos, tenetur.'
  },
  {
    id: 3,
    name: 'Dr Noel Junior',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'CEO',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolorum quod iste nostrum ducimus quo. Delectus unde natus provident illum ex, a qui voluptatibus molestias explicabo suscipit tenetur! Eos, tenetur.'
  }
]

export const benefits = [
  {
    image: benefit_1,
    benefit: 'Emotional preparedness before stepping into the real field.'
  },
  {
    image: benefit_2,
    benefit: 'Practice within a safe risk free environment at your own Pace.'
  },
  {
    image: benefit_3,
    benefit: 'Master Your skills through collaborations with classmates.'
  },
]

export const accordionData = [
  {
    id: 1,
    question: 'What is MediXR?',
    answer:
      'A Virtual and Augmented Reality Company creating simulations for Medical training.',
  },
  {
    id: 2,
    question: 'What type of services are offered by MediXR?',
    answer:
      'MediXR offers its simulations software to both individuals and organizations',
  },
  {
    id: 3,
    question: 'How can I get access to MediXR software?',
    answer:
      'The software is currently in Developement, but we encourage you to contact us and try out our Demo',
  },
  {
    id: 4,
    question: 'What measures are in place to ensure the simulations are accurate?',
    answer:
      'All simulations created by MediXR are approved by Education board and tested thoroughly with our Hospital and clinic partners',
  },
  {
    id: 5,
    question: 'Why benefits are simulations for learning?',
    answer:
      'Learning in Medical field is crucial, please read the benefits of our system below.',
  },
  {
    id: 6,
    question: 'How can I support MediXR in its goals to improve Patient Healthcare?',
    answer:
      'We are a growing team, and we believe saving lives have no price, please contact us for more information and how you can help',
  },
]

export const sponsors = [
  sponsor_one,
  sponsor_two,
  sponsor_three,
  sponsor_four,
  sponsor_five,
  sponsor_six
]