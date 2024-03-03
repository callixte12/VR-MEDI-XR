import benefit_1 from '../../public/benefit_1.png'
import benefit_2 from '../../public/benefit_2.png'
import benefit_3 from '../../public/benefit_3.png'
import sponsor_one from '../../public/image_13.png'
import sponsor_two from '../../public/image_15.png'
import sponsor_three from '../../public/image_17.png'
import sponsor_four from '../../public/image_18.png'
import sponsor_five from '../../public/image_19.png'
import sponsor_six from '../../public/image_20.png'
import anatomy_lab from '../../public/anatomylab.jpg'
import christa from '../../public/christa.jpeg'
import eosse from '../../public/eseosa.jpeg'
import isaac from '../../public/isaacRudisingwa.png'
import jean from '../../public/JeanRobert.jpeg'
import manzi from '../../public/manzi.jpg'
import multiuser from '../../public/multi-user-lab.png'
import ante from '../../public/Nwalahnjie_Anye_Akumawah_(The african Leadership University).jpg'
import recordings from '../../public/recordings_lab.png'
import surgery from '../../public/surgery_lab.png'
import wendy from '../../public/wendy.jpeg'
import cost from '../../public/cost.svg'
import expert from '../../public/experts.svg'
import immersive from '../../public/immersive.svg'
import training from '../../public/training.svg'
import jean_jacques from '../../public/jean_jacques.jpg'
import zyh from '../../public/zyh.jpg'
import ante_2 from '../../public/_DSC3608.jpeg'
import aquila from '../../public/aquila.jpeg'
import ekosse from '../../public/ekosse.jpeg'
import evar from '../../public/evar.jpeg'

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
    icon: cost,
    title: "Reduced Cost",
    content:
      "With Our Virtual Labs reduce the cost of building facilities",
  },
  {
    id: "feature-2",
    icon: training,
    title: "Medical Training",
    content:
      "Learn how to use medical equipment before stepping into real world. ",
  },
  {
    id: "feature-3",
    icon: expert,
    title: "Experts",
    content:
      "Train and learn from experts across the globe with our simulation technology",
  },
  {
    id: "feature-4",
    icon: immersive,
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
    description: 'Immerse yourself in live surgeries of various types for the best possible experience'
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
  quote: "The ability to learn in an immersive environment is such game changing experience for me in learning Anatomy.",
  author: "Marius",
  role: "Medical Student",
  image: ''
  },
  {
  rating: 3,
  quote: "Ability to practice everything i am reading is unparalleled and nearly seem impossible at first.",
  author: "Tina",
  role: "Medical Student",
  image: ''
  },
  {
  rating: 4,
  quote: "Being confident is a critical skill and medicine, and with such a simulations, i have never been more confident",
  author: "Waheed",
  role: "Medical Student",
  image: ''
  },
  {
  rating: 4,
  quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
  author: "Michael S",
  role: "Medical Student",
  image: ''
  }
]

export const team = [
  {
    id: 1,
    name: 'Nwalahnjie Akumawah',
    email: 'nwalahnjie.medixr@gmail.com',
    imageUrl: ante,
    role: 'C.E.O.',
    description: 'Nwalahnjie is a problem solver with expertise in Computer graphics tild towards creating solutions to improve education in Healthcare.',
    tel: '250790801049',
    linkedin: 'http://linkedin.com/in/nwalahnjie-akumawah-51a88b20b',
    github: ''
  },
  {
    id: 2,
    name: 'Eseosa Kay-Uwagboe',
    email: 'eseosa.medixr@gmail.com',
    imageUrl: eosse,
    role: 'C.T.O.',
    description: 'Eseosa excels in animating, modeling, and sculpting 3D content in Blender, exporting to Unity for VR medical simulations. Proficient in manipulating 3D models and CT scans, they create realistic surgical simulations for medical education. Their dedication to merging technology and education drives innovation in VR medical training.',
    tel: '250790135592',
    linkedin: 'https://www.linkedin.com/in/eseosa-kay-uwagboe-7928a225a/',
    github: ''
  },
  {
    id: 3,
    name: 'Jean Robert Gatwaza',
    email: 'jeanrobertgatwaza.medixr@gmail.com',
    imageUrl: jean,
    role: 'C.M.O.',
    description: 'Driven by simplicity, Robert envision a world by where human-machine relationship transcends challenges for healthy living',
    tel: '250788494219',
    linkedin: 'https://www.linkedin.com/in/gatwaza/',
    github: ''
  },
  {
    id: 4,
    name: 'Christa Uwicyeza',
    email: 'johndoe@gmail.com',
    imageUrl: christa,
    role: 'C.O.O.',
    description: "Christa champions a world where streamlined interactions between humans and technology foster well-being and overcome life's complexities.",
    tel: '250783731214',
    linkedin: 'https://www.linkedin.com/in/christa-uwicyeza-17779a252/',
    github: ''
  },
  {
    id: 5,
    name: 'Isaac Rudasingwa',
    email: 'johndoe@gmail.com',
    imageUrl: isaac,
    role: 'Business Manager',
    description: 'Isaac is a visionary software engineer, business strategist, and XR architect passionate about immersive technologies. He excels in transforming ideas into impactful solutions, blending technology and business needs seamlessly.',
    tel: '250786494450',
    linkedin: 'https://www.linkedin.com/in/isaac-rudasingwa-617073246',
    github: ''
  },
  {
    id: 7,
    name: 'Manzi Guy Badian',
    email: 'johndoe@gmail.com',
    imageUrl: manzi,
    role: 'Content Management',
    description: "Expert at making users question their life choices by creating interfaces so intuitive, they'll wonder why they ever bothered learning to read. I specialize in making buttons that nobody can resist clicking, except maybe your grandma. Fluent in Lorem Ipsum and can speak in wireframes. My designs are so sleek, they make Apple jealous.",
    tel: '250787682784',
    linkedin: 'https://www.linkedin.com/in/manzi-badian-a3ba74274/',
    github: ''
  },
  {
    id: 8,
    name: 'Byiringiro Remy Marius',
    email: 'johndoe@gmail.com',
    imageUrl: '',
    role: 'UI/UX Designer Intern',
    description: 'Marius is a medical student who has a keen interest in research.He enjoys to explore new topics and finding innovative solutions to health problems.He hopes to publish his findings in a reputable journal and become a successful physician-scientist who changed the world.',
    tel: '250788717630',
    linkedin: 'http://www.linkedin.com/in/byiringiro-remy-marius-6b6320241',
    github: ''
  },
  {
    id: 9,
    name: 'Wendy Ornella Ruzindana',
    email: 'johndoe@gmail.com',
    imageUrl: wendy,
    role: 'UI/UX Designer Intern',
    description: "With her expertise in managing operations, Wendy plays a pivotal role in steering the company towards its mission and vision. Her strategic focus on business operations ensures that MediXR move forward effectively and efficiently.",
    tel: '250791501423',
    linkedin: 'http://www.linkedin.com/in/byiringiro-remy-marius-6b6320241',
    github: ''
  },
]

export const experts = [
  {
    id: 1,
    name: 'Dr Zyh',
    email: 'johndoe@gmail.com',
    imageUrl: zyh,
    role: 'Patient Care Expert',
    description: 'Dr Zyh has worked in several help post and hospitals around Cameroon and has wide experience in patient consultation and currently runs EasyHealth which brings home consultations'
  },
  {
    id: 2,
    name: 'Dr Daniel',
    email: 'johndoe@gmail.com',
    imageUrl: jean_jacques,
    role: 'Radiologies Expert',
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