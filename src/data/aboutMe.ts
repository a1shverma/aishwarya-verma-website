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
    return: '"New York City, NY"',
  },
  {
    input: 'self.workExperience',
    return: '["Aimpoint Digital - Senior AI Data Engineer", "JPMorgan Chase & Co. - Data Analytics Engineer II", "Codebucket Solutions Pvt. Ltd. - Technical Project Manager"]',
  },
  {
    input: 'self.education',
    return: '"MS in Information Systems - University of Washington : Foster School of Business","BE in Information Science - The National Institute of Engineering"',
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
