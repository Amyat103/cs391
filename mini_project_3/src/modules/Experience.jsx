import './Experience.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

export default function Experience() {
  return (
    <>
      <Header Title='Experience' />
      <div className='body-div'>
        <Nav />
        <main>
          <ul>
            <li>
              <p>
                <strong>Full-Stack Software Engineer Intern</strong>
              </p>
              <p>
                <em>Y Stem and Chess, Sep - Dec 2024</em>
              </p>
              <p>
                <em>Remote</em>
              </p>
              <ul>
                <li>
                  Engineered robust user account management system for students
                  and educators, implementing secure password flows and
                  enhancing overall platform security
                </li>
                <li>
                  Implemented comprehensive unit and integration testing for
                  critical features such as user authentication and match
                  generation, ensuring reliable functionality and easier
                  maintenance
                </li>
                <li>
                  Optimized backend code and conducted thorough code reviews by
                  refactoring inefficient logic to enhance system performance
                  and ensure high-quality and maintainable code
                </li>
                <li>
                  Developed and implemented key features for the learning
                  platform such as user dashboard and modules, enhancing user
                  engagement and educational value
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Backend Software Engineer Intern</strong>
              </p>
              <p>
                <em>CoSphere, Aug - Jan 2024</em>
              </p>
              <p>
                <em>Boston, MA</em>
              </p>
              <ul>
                <li>
                  Developed core features for a dating app platform, including
                  RESTful APIs for user profile management, matching algorithms,
                  and real-time messaging, ensuring seamless user interactions
                  and efficient data exchange
                </li>
                <li>
                  Executed frontend migration from Angular to React, improving
                  website performance and maintainability while ensuring
                  seamless user experience during transition
                </li>
                <li>
                  Optimized backend infrastructure by refining APIs and database
                  interactions, increasing system efficiency and scalability to
                  support growing user base
                </li>
                <li>
                  Integrated external APIs for event population, enabling users
                  to discover and interact with local activities, enhancing the
                  app’s social features and user engagement
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Systems and Software Intern</strong>
              </p>
              <p>
                <em>COSCO Shipping, May - June 2024</em>
              </p>
              <p>
                <em>Bangkok, Thailand</em>
              </p>
            </li>
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}
