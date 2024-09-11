import inn from "../images/in.png";
import inst from "../images/inst.png";
import yt from "../images/youtube.png";
import X from "../images/iks.png";

function Footer() {
  return (
    <footer className="flex-center">
      <div className="foot container">
        <div className="social-media">
          <img src={inn} alt="LinkedIn" />
          <img src={inst} alt="Instagram" />
          <img src={yt} alt="YouTube" />
          <img src={X} alt="X (formerly Twitter)" />
        </div>
        <div className="use-cases">
          <h4>Use cases</h4>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div className="explore">
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div className="resources">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
      <div className="copyright container">
        <p>Copyright © 2024 Remont Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
