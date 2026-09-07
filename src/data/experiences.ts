export type ExperienceType = 'work' | 'education' | 'project';

export interface Experience {
  id: string;
  title: string;
  org: string;
  location: string;
  startDate: string;
  endDate: string;
  type: ExperienceType;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'aimpoint',
    title: 'Lead AI Engineer',
    org: 'Aimpoint Digital',
    location: 'New York City, NY',
    startDate: '2023',
    endDate: 'Present',
    type: 'work',
    bullets: [
      'Building AI products and applications across various industries and use cases',
      'Leading end-to-end development from problem framing to shipped solution',
      'Working at the intersection of AI, data, and product to drive real business outcomes',
    ],
  },
  {
    id: 'jpmorgan',
    title: 'Data Analytics Engineer II',
    org: 'JPMorgan Chase & Co.',
    location: 'Remote',
    startDate: '2021',
    endDate: '2023',
    type: 'work',
    bullets: [
      'Built and maintained data analytics pipelines at scale',
      'Collaborated cross-functionally with product and engineering teams',
      'Developed internal tooling to improve data accessibility and reporting',
    ],
  },
  {
    id: 'codebucket',
    title: 'Technical Project Manager',
    org: 'Codebucket Solutions Pvt. Ltd.',
    location: 'India',
    startDate: '2019',
    endDate: '2021',
    type: 'work',
    bullets: [
      'Managed technical delivery for client-facing software projects',
      'Bridged communication between engineering, design, and stakeholders',
      'Drove agile processes and sprint planning across cross-functional teams',
    ],
  },
  {
    id: 'uw-foster',
    title: 'MS in Information Systems',
    org: 'University of Washington — Foster School of Business',
    location: 'Seattle, WA',
    startDate: '2020',
    endDate: '2022',
    type: 'education',
    bullets: [
      'Focused on data systems, product management, and business strategy',
      'Participated in Force For Good hackathon (Oct 2021)',
    ],
  },
  {
    id: 'nie',
    title: 'BE in Information Science',
    org: 'The National Institute of Engineering',
    location: 'India',
    startDate: '2016',
    endDate: '2020',
    type: 'education',
    bullets: [
      'Vice-Chairperson, NIE IEEE Computer Society',
      'Led NIE Summer of Code and All Karnataka Computer Society Congress events',
      'Explored machine learning, robotics, and IoT through workshops and projects',
    ],
  },
  {
    id: 'handwriting',
    title: 'Handwriting Analysis & Personality Detection',
    org: 'Personal Project',
    location: '',
    startDate: '2020',
    endDate: '2020',
    type: 'project',
    bullets: [
      'Built an ML model to detect personality traits from handwriting samples',
      'Combined computer vision and NLP techniques',
    ],
  },
  {
    id: 'sentiment',
    title: 'Sentiment Analysis',
    org: 'Personal Project',
    location: '',
    startDate: '2020',
    endDate: '2020',
    type: 'project',
    bullets: [
      'Developed a sentiment classification model on social media data',
    ],
  },
  {
    id: 'foodtopia',
    title: 'Foodtopia',
    org: 'Personal Project',
    location: '',
    startDate: '2019',
    endDate: '2019',
    type: 'project',
    bullets: [
      'Built a food discovery and recommendation app',
    ],
  },
];

export default experiences;
