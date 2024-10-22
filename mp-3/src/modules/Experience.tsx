import { styled } from 'styled-components';

const ExperienceStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(104, 214, 236);
`;

const ContentStyled = styled.main`
  flex: 1;
  width: 95%;
  overflow: auto;
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li {
    margin-bottom: 20px;
    align-items: center;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    align-items: center;
  }
`;

export default function Experience() {
  return (
    <ExperienceStyled>
      <ContentStyled>
        <ExperienceList>
          <li>
            <h3>Full-Stack Software Engineer Intern</h3>
            <h4>Y Stem and Chess, Sep - Dec 2024</h4>
            <h4>Remote</h4>
            <ul>
              <li>
                Engineered robust user account management system for students
                and educators, implementing secure password flows and enhancing
                overall platform security.
              </li>
              <li>
                Implemented comprehensive unit and integration testing for
                critical features such as user authentication and match
                generation, ensuring reliable functionality and easier
                maintenance.
              </li>
              <li>
                Optimized backend code and conducted thorough code reviews by
                refactoring inefficient logic to enhance system performance and
                ensure high-quality and maintainable code.
              </li>
              <li>
                Developed and implemented key features for the learning platform
                such as user dashboard and modules, enhancing user engagement
                and educational value.
              </li>
            </ul>
          </li>

          <li>
            <h3>Backend Software Engineer Intern</h3>
            <h4>CoSphere, Aug - Jan 2024</h4>
            <h4>Boston, MA</h4>
            <ul>
              <li>
                Developed core features for a dating app platform, including
                RESTful APIs for user profile management, matching algorithms,
                and real-time messaging, ensuring seamless user interactions and
                efficient data exchange.
              </li>
              <li>
                Executed frontend migration from Angular to React, improving
                website performance and maintainability while ensuring seamless
                user experience during transition.
              </li>
              <li>
                Optimized backend infrastructure by refining APIs and database
                interactions, increasing system efficiency and scalability to
                support growing user base.
              </li>
              <li>
                Integrated external APIs for event population, enabling users to
                discover and interact with local activities, enhancing the app’s
                social features and user engagement.
              </li>
            </ul>
          </li>

          <li>
            <h3>Systems and Software Intern</h3>
            <h4>COSCO Shipping, May - June 2024</h4>
            <h4>Bangkok, Thailand</h4>
            <ul>
              <li>Worked as a IT Intern</li>
            </ul>
          </li>
        </ExperienceList>
      </ContentStyled>
    </ExperienceStyled>
  );
}
