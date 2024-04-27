export interface LinkType {
  link: string;
  id: string;
  name: string;
  label?: string;
  favourite?: boolean;
  date: Date;
}

export const links: LinkType[] = [
  {
    id: 'snowflake',
    link: './static/images/certificates/snowflake.png',
    name: 'Snowflake - Snow Pro Core',
    label: 'Data Engineering',
    date: new Date('2023-09-17T17:20'),
  },
  {
    id: 'databricks-fundamentals',
    link: './static/images/certificates/databricks-fundamentals.png',
    name: 'Databricks - Lakehouse Fundamentals',
    label: 'Data Engineering',
    date: new Date('2023-08-16T17:20'),
  },
  {
    id: 'dataiku',
    link: './static/images/certificates/dataiku.png',
    name: 'Dataiku - Core Designer',
    label: 'Data Science',
    date: new Date('2023-07-20T17:20'),
  },
  {
    id: 'aws-cloud',
    link: './static/images/certificates/aws_cloud.png',
    name: 'AWS - Cloud Practitioner',
    label: 'Cloud Computing',
    date: new Date('2022-09-26T17:20'),
  },
  {
    id: 'ffg',
    link: './static/images/certificates/ffg.png',
    name: 'Force For Good',
    label: 'Hackathon',
    date: new Date('2021-10-21T17:20'),
  },
    {
    id: 'aws',
    link: './static/images/certificates/aws.png',
    name: 'Data Analytics Fundamentals using AWS',
    label: 'Data Analytics',
    date: new Date('2021-08-20T17:20'),
  },
  {
    id: 'nisb',
    favourite: true,
    link: './static/images/certificates/nisb.jpg',
    name: 'Vice-Chairperson: NIE IEEE Computer Society',
    label: 'Leadership, Voluteering',
    date: new Date('2019-08-22T17:20'),

  },
  {
    id: 'coursera1',
    link: './static/images/certificates/coursera1.png',
    name: 'Google: Data,Data,Everywhere',
    label: 'Data Analytics',
    date: new Date('2021-08-31T17:20'),
  },
  {
    id: `coursera2`,
    link: `./static/images/certificates/coursera2.png`,
    name: `Google: Ask Questios to make Data-Driven decisions `,
    label: `Data Analytics`,
    date: new Date(`2021-09-01T13:35`),
  },
  {
    id: `cfg`,
    link: `./static/images/certificates/cfg.jpg`,
    name: `JPMorgan Chase: Code for Good hackathon`,
    label: `Hackathon`,
    date: new Date(`2019-07-07T13:33`),
  },
  {
    id: `digitalmarket`,
    link: `./static/images/certificates/digitalmarket.png`,
    name: `Google: Digital Marketing`,
    label: `Free Illustrations`,
    date: new Date(`2017-06-28T13:30`),
  },
  {
    id: `datacamp1`,
    link: `./static/images/certificates/datacamp1.png`,
    name: `Intermediate Python`,
    label: `Data Science`,
    date: new Date(`2020-10-08T13:29`),
  },
  {
    id: `datacamp2`,
    link: `./static/images/certificates/datacamp2.png`,
    name: `Data Manipulation with Pandas `,
    label: `Data Science`,
    date: new Date(`2020-10-31T13:27`),
  },
  {
    id: `akcsc`,
    link: `./static/images/certificates/akcsc.jpg`,
    name: `All Karnataka Computer Society Congress`,
    label: `Leadership, Volunteering`,
    date: new Date(`2018-01-27T13:26`),
  },
  {
    id: `iml`,
    link: `./static/images/certificates/iml.png`,
    name: `Understanding Machine Learning with Python`,
    label: `Machine Learning`,
    date: new Date(`2020-10-05T13:26`),
  },
  {
    id: `iot`,
    link: `./static/images/certificates/iot.jpg`,
    name: `Introduction to IoT and Cloud Computing`,
    label: `Workshop`,
    date: new Date(`2018-11-10T13:25`),
  },
  {
    id: `nsoc`,
    link: `./static/images/certificates/nsoc.jpg`,
    name: `NIE Summer of Code`,
    label: `Leadership, Volunteering`,
    date: new Date(`2018-06-07T01:44`),
  },
  {
    id: `nain`,
    link: `./static/images/certificates/nain.jpg`,
    name: `New Age Incubation Network`,
    label: `Hackathon`,
    date: new Date(`2017-01-25T03:44`),
  },
  {
    id: `robokart`,
    link: `./static/images/certificates/robokart.jpg`,
    name: `Sixth Sense Robotics`,
    label: `Workshop`,
    date: new Date(`2017-09-17T03:44`),
  },
  {
    id: `scuba`,
    link: `./static/images/certificates/scuba.jpg`,
    name: `Introductory Scuba Dive`,
    label: `Recreational`,
    date: new Date(`2018-01-01T03:44`),
  },
]

export default links
