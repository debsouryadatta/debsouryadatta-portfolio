import styles from './HeroStyles.module.css';
import heroImg from '../../assets/debsouryadatta.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Debsourya Datta"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Debsourya
          <br />
          Datta
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://twitter.com/debsourya005" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/debsouryadatta" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/debsourya-datta-177909225" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          {/* With a passion for developing modern React web apps for commercial
          businesses. */}
          <span>☕ Chill + Code.</span>
          <span>✪ Open Source Enthusiast.</span>
          <span>🌏 Solving Real World Problems.</span>
          <span>👨‍💻 Doing PhD in Debugging.</span>
          
          
        </p>
        <a href="https://drive.google.com/file/d/1xSTnBlr9Nw1oMzpnpRqDwGyfgrzKPA2m/view?usp=drive_link" target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
