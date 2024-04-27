const style = props =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
const info = props => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Atlanta, United States"',
  },
  {
    input: 'self.workExperience',
    return: '["Aimpoint Digital - Data Engineering & Analytics Consultant", "JPMorgan Chase & Co. - Data Analytics Engineer II", "Codebucket Solutions Pvt. Ltd. - Technical Project Manager"]',
  },
  {
    input: 'self.education',
    return: '"MS in Information Systems - University of Washington : Foster School of Business","BE in Information Science - The National Institute of Engineering"',
  },
  {
    input: 'self.projects',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/a1shverma/Handwriting-Analysis-and-Personality-Detection">Personality Analysis with Handwriting </a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/a1shverma/sentimentanalysis">Sentiment Analysis</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/a1shverma/Foodtopia">Foodtopia</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/a1shverma/Diabetes-Pima-Prediction">Diabetes Prediction</a>", "<a style="${style(
      props
    )}" href="https://github.com/a1shverma/SudokuSolver">Sudoku Solver</a>"]`,
  },

  {
    input: 'self.interpersonalSkills',
    return: '[ "Program Management", "Leadership", "Team Work", "Public Speaking", "Event Planning", "Problem Solving", "Innovative"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/a1shverma/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="mailto:a1shverma@outlook.com">E-mail</a>", "<a style="${style(
      props
    )}" href="https://www.instagram.com/a1shverma/">Instagram</a>"]`,
  },
];

export default info;
