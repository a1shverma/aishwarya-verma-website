export type categories = `Languages` | `Full Stack Development` | `DevOps` | 'Data Analytics';

export interface ToolType {
  link: string;
  id: string;
  name: string;
  category: categories[];
  labels?: string[];
  description: string;
}

const Tools: ToolType[] = [
  {
    id: `python`,
    category: [`Languages`, 'Data Analytics'],
    link: `https://python.com/`,
    labels: [`Advanced`],
    name: `Python`,
    description: `My go-to backend language for any type of problem.`,
  },
  {
    id: `c++`,
    category: [`Languages`],
    link: `https://c++.com/`,
    labels: [`Advanced`],
    name: `C++`,
    description: `OOP language`,
  },
  {
    id: `c`,
    category: [`Languages`],
    link: `https://c.com/`,
    labels: [`Advanced`],
    name: `C`,
    description: `Lorem Ipsum`,
  },
  {
    id: `java`,
    category: [`Languages`],
    link: `https://java.com/`,
    labels: [`Intermediate`],
    name: `Java`,
    description: `Lorem Ipsum`,
  },
  {
    id: `php`,
    category: [`Languages`],
    link: `https://php.com`,
    labels: [`Intermediate`],
    name: `PHP`,
    description: `Lorem Ipsum`,
  },
  {
    id: `html`,
    category: [`Full Stack Development`],
    link: `https://www.html.com`,
    labels: [`Advanced`],
    name: `HTML5`,
    description: `Lorem Ipsum`,
  },
  {
    id: `css`,
    category: [`Full Stack Development`],
    link: `https://www.css.com`,
    labels: [`Advanced`],
    name: `CSS3`,
    description: `Lorem Ipsum`,
  },
  {
    id: `sql`,
    category: [`Full Stack Development`],
    link: `https://www.mysql.com`,
    labels: [`Advanced`],
    name: `MySQL`,
    description: `Lorem Ipsum`,
  },
  {
    id: `bootstrap`,
    category: [`Full Stack Development`],
    link: `https://www.bootstrap.com`,
    labels: [`Advanced`],
    name: `Bootstrap`,
    description: `Lorem Ipsum`,
  },
  {
    id: `node`,
    category: [`Full Stack Development`],
    link: `https://www.node.com/`,
    labels: [`Intermediate`],
    name: `NodeJS`,
    description: `Lorem Ipsum`,
  },
  {
    id: `javascript`,
    category: [`Full Stack Development`],
    link: `https://javascipt.com/`,
    labels: [`Advanced`],
    name: `Javascript`,
    description: `Lorem Ipsum`,
  },
  {
    id: `flask`,
    category: [`Full Stack Development`],
    link: `https://flask.com`,
    labels: [`Advanced`],
    name: `Flask`,
    description: `Lorem Ipsum`,
  },
  {
    id: `wordpress`,
    category: [`Full Stack Development`],
    link: `https://wordpress.com`,
    labels: [`Advanced`],
    name: `Wordpress`,
    description: `Lorem Ipsum`,
  },
  {
    id: `jenkins`,
    category: [`DevOps`],
    link: `https://jenkins.com/`,
    labels: [`Advanced`],
    name: `Jenkins`,
    description: `Lorem Ipsum`,
  },
  {
    id: `git`,
    category: [`DevOps`],
    link: `https://git.com/`,
    labels: [`Advanced`],
    name: `Git`,
    description: `Lorem Ipsum`,
  },
  {
    id: `bitbucket`,
    category: [`DevOps`],
    link: `https://bitbucket.com/`,
    labels: [`Advanced`],
    name: `Bitbucket`,
    description: `Lorem Ipsum`,
  },
  {
    id: `github`,
    category: [`DevOps`],
    link: `https://www.github.com/`,
    labels: [`Advanced`],
    name: `Github`,
    description: `Lorem Ipsum`,
  },

  {
    id: `aws`,
    category: [`DevOps`],
    link: `https://aws.com/`,
    labels: [`Intermediate`],
    name: `AWS`,
    description: `Lorem Ipsum`,
  },
  {
    id: `heroku`,
    category: [`DevOps`],
    link: `https://heroku.com/`,
    labels: [`Intermediate`],
    name: `Heroku`,
    description: `Lorem Ipsum`,
  },
  {
    id: `selenium`,
    category: [`DevOps`],
    link: `https://selenium.com/`,
    labels: [`Intermediate`],
    name: `Selenium`,
    description: `Lorem Ipsum.`,
  },
  {
    id: `jira`,
    category: [`DevOps`],
    link: `https://jira.info/`,
    labels: [`Advanced`],
    name: `Jira`,
    description: `Lorem Ipsum.`,
  },
  {
    id: `r`,
    category: [`Data Analytics`],
    link: `https://r.com/`,
    labels: [`Beginner`],
    name: `R`,
    description: `Lorem Ipsum.`,
  },
  {
    id: `tableau`,
    category: [`Data Analytics`],
    link: `https://tableau.com`,
    labels: [`Intermediate`],
    name: `Tableau`,
    description: `Lorem Ipsum.`,
  },
  {
    id: `matplotlib`,
    category: [`Data Analytics`],
    link: `https://matplotlib.com`,
    labels: [`Intermediate`],
    name: `Matplotlib`,
    description: `Lorem Ipsum.`,
  },
  {
    id: `excel`,
    category: [`Data Analytics`],
    link: `https://jira.info/`,
    labels: [`Advanced`],
    name: `MS Excel`,
    description: `Lorem Ipsum.`,
  },
];
export default Tools;