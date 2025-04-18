import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>Placify</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Actively engaged in enhancing cloud infrastructure security by implementing robust firewall rules, identity access management (IAM) policies, and real-time monitoring systems. Developed automated tools for threat detection, anomaly analysis, and rapid incident response to simulate and tackle real-world cybersecurity threats.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development Intern</h4>
                <h5>Cognifyz Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Selected for the Full Stack Development Internship, contributing to both front-end and back-end development across multiple live projects. Responsible for building scalable, user-friendly web applications, integrating APIs, optimizing performance, and collaborating with cross-functional teams to deliver robust full-stack solutions
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Aimaxon</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              
              Currently building intelligent tools using machine learning for real-time predictions and automation. Also contributing to AI-driven user engagement features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
