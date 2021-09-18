export const pinnedRepos: pinnedRepoType[] = [
  {
    id: `graphology`,
    stack: ['Python', 'ANN','Node', 'Javascript'],
    name: `Personality Analysis with Handwriting`,
    deployedLink: 'https://github.com/a1shverma/Handwriting-Analysis-and-Personality-Detection',
    image:
      '/static/images/projectImages/graphology.png',
    longDescription: `As a part of my final year project, we built an online portal which uses the concept and theories of Graphology and detects personality traits of any writer from the uploaded handwritten notes. `,
  }, 
  {
    id: `website`,
    stack: ['Next.JS', 'Chakra-UI', 'MDX', 'Node'],
    name: `My Website`,
    deployedLink: 'https://github.com/a1shverma/aishwarya-verma-website',
    image:
      '/static/images/projectImages/website.png',
    longDescription: `I stumbled upon Michael Hall's website through Reddit and was inspired to make a similar one for myself. I learnt a lot about NextJS and Chakra, and had a great time making it.`,
  },
  {
    image:'/static/images/projectImages/foodtopia.png',
    name: 'Foodtopia',
    stack: ['Flask', 'Javascript', 'MySQL'],
    id: 'Foodtopia',
    deployedLink: 'https://github.com/a1shverma/Foodtopia',
    longDescription:
      'One of my first Flask projects I made as part of my Database Systems project work at my undergrad university. This is a food delivery platform which lets the user browse through different restaurants ad their menu cards in the city of Mysore. Users can select their desired food items, add to cart and get it delivered to their place. ',
  }, 
  {
    id: `sentimentanalysis`,
    name: `Sentiment Analysis`,
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    deployedLink: 'https://github.com/a1shverma/sentimentanalysis',
    longDescription: `Built a platform using Machine Learning algorithms which was able to classify any tweet in picture as sexist/non-sexist, racist/non-racist. The platform came in handy during the 2019 Indian general elections while trying to analyse the general sentiments of public towards the political tweets.`,
  },
  
];

export interface pinnedRepoType {
  id: string;
  name: string;
  image?: string;
  deployedLink?: string;
  longDescription: string;
  stack?: string[];
}
