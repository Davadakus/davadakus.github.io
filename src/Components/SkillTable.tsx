// This is your reusable component
function SkillTable() {
  return (
    <div className="flex flex-row">
      <ul className="flex flex-col space-y-2 py-5">
        <li className="skill-section">
          <h2 className="skill-header">FrontEnd</h2>
          <ul className="skill-grid ">
            <li>React</li>
            <li>JavaScript</li>
            <li>TailWindCSS</li>
            <li>JavaScript</li>
            <li>React Routers</li>
            <li>Three.js</li>
          </ul>
        </li>

        <li className="skill-section">
          <h2 className="skill-header">BackEnd</h2>
          <ul className="skill-grid">
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>FastAPI</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </li>
        
        <li className="skill-section">
          <h2 className="skill-header">GameDev</h2>
          <ul className="skill-grid ">
            <li>Unity</li>
            <li>C#</li>
            <li>RenPy</li>
          </ul>
        </li>

        <li className="skill-section">
          <h2 className="skill-header">Tools</h2>
          <ul className="skill-grid ">
            <li>GitHub</li>
            <li>Gradle (Java)</li>
            <li>Poetry (Python)</li>
            <li>Docker</li>
            <li>Vite</li>
            <li>WSL2</li>
          </ul>
        </li>
        
        <li className="skill-section">
          <h2 className="skill-header">Utilities</h2>
          <ul className="skill-grid ">
            <li>Clip Studio Paint</li>
            <li>Photoshop</li>
            <li>Premiere Pro</li>
            <li>FL Studio</li>
            <li>Abelton</li>
    
          </ul>
        </li>



      </ul>
    </div>
  );
}

export default SkillTable;