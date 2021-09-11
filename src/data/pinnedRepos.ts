export const pinnedRepos: pinnedRepoType[] = [
  {
    image:'/static/images/certificate.png',
    name: 'WormTracker',
    stack: ['React', 'Semantic-UI'],
    id: 'WormTracker',
    longDescription:
      'A quick tool I whipped up to help count worm tracks in grids on pictures of agar plates. Pretty weird, and super scuffed, but it worked well for the short time it was used.',
  },
  {
    id: `mikebot`,
    name: `MikeBot`,
    stack: ['Discord.JS', 'Node'],
    longDescription: `I wanted to learn how to use JavaScript and this project helped me dive into it. MikeBot utilised the discord API via discord.js to perform a variety of tasks from moderation, games, and general fun. I spent ages over quarantine on this project, and is where I started learning JS.`,
  },

  {
    id: `michael-hall.me`,
    stack: ['Next.JS', 'Chakra-UI', 'MDX'],
    name: `My Website`,
    deployedLink: 'https://michael-hall.me',
    image:
      '/static/images/jpmc.jpg',
    longDescription: `I was looking through Lee Rob's and Daniel Wirtz's websites one afternoon, and decided I need one for myself (you might see a few similarities 🙃 ). I learnt a lot about NextJS and Chakra, and had a great time making it.`,
  },
  {
    id: `scuffedmdb`,
    stack: ['Next.JS', 'Chakra-UI'],
    name: `ScuffedMDB`,
    deployedLink: 'https://movie.michael-hall.me',
    image:
      '/static/images/cb.jpg',
    longDescription: `I built the first version of this website during the latter half of quarantine to rate movies that my friends and I had watched over discord. Then decided it needed a remodel, and created ScuffedMDB (Movie-rating V2.0), made with NextJS and ChakraUI. It has been great to make a website, that not only all my friends can use, but other people can use (and have :)) for their own movie rating sites.`,
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