import Button from "../Components/Button";
import ProjectCard from "../Components/ProjectCard";

export default function OtherProjects(){
    return(
        <div className ='header-section bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Other Projects</SectionHeader> */}
            <div className="flex justify-center items-center">
              <div id="other-projects" className='header-title'>
                Other Projects
                {/* <img src="Artwork/Chibi/ChibiGame.webp" className='absolute max-w-[150px] -translate-x-40'/> */}
              </div>
            </div>
            <div className="space-y-20">
              <ProjectCard 
                imageSrc="Artwork/OtherProject/DiscordDemo.png"
                title="TestTitle"
                description="TestDescription"
                role="TEst"
                tech="TEst"
                reverse={false}
              >
                <Button
                  link="https://github.com/Davadakus/discord-demo"
                  path="Artwork/DropDown/GitHub.png"
                />
                <Button
                  link="https://youtu.be/Iu_dQNK4H24"
                  path="Artwork/DropDown/YouTube.png"
                />
                <Button
                  link="https://discord-demo-black.vercel.app/"
                  path="Artwork/DropDown/Website.png"
                />
              </ProjectCard>
              
              <ProjectCard 
                imageSrc="Artwork/OtherProject/DiscordDemo.png"
                title="Recreating Discord (2025)"
                description="Replicating Discord's layout and DM functionality; experimenting full-stack development
                      React + Vite for Frontend; Node.js and Express.js for backend
                      Able to send messages and view chat history"
                role="Fullstack"
                tech="React, TailWindCSS, Vite, Express.js, Node.js, GitHub"
                reverse={true}
              >
                <Button
                  link="https://github.com/Davadakus/discord-demo"
                  path="Artwork/DropDown/GitHub.png"
                />
                <Button
                  link="https://youtu.be/Iu_dQNK4H24"
                  path="Artwork/DropDown/YouTube.png"
                />
                <Button
                  link="https://discord-demo-black.vercel.app/"
                  path="Artwork/DropDown/Website.png"
                />
              </ProjectCard>

              <ProjectCard 
                imageSrc="Artwork/OtherProject/BeaconVisualizer.png"
                title="Beacon Visualizer (2024)"
                description="A React Project me and my friend made for a Hackathon in 24 Hours
                      Simulates live tracking of a beacon travelling in a rocket displaying relevant data"
                role="Website design & layout, simulation of beacon, and managing simulated data"
                tech="React, TailWindCSS, Vite, D3.js, Three.js, GitHub"
                reverse={false}
              >
                <Button
                  link="https://github.com/Davadakus/ANT61Hackathon"
                  path="Artwork/DropDown/GitHub.png"
                />
                <Button
                  link="https://www.youtube.com/watch?v=Cik_anyDUuw"
                  path="Artwork/DropDown/YouTube.png"
                />
              </ProjectCard>

              <ProjectCard 
                imageSrc="Artwork/OtherProject/GBL.png"
                title="Game Based Learning Website (2024)"
                description="React Project by 7 students for a University Capstone Project
                      Allows you to upload your class materials PDF to an AI Tutor (Gemini) and group them
                      The AI generates questions for users to test themselves
                      You can ask the AI regarding specific questions on screen and will give you feedback"
                role="Responsible for leading the frontend team, designing and making the pages, certain features, and code review"
                tech="React, TailWindCSS, Vite, FastAPI, Docker, GitHub"
                reverse={true}
              >
                <Button
                  link="https://youtu.be/gqQlONmrvE4"
                  path="Artwork/DropDown/YouTube.png"
                />
              </ProjectCard>

              <ProjectCard 
                imageSrc="Artwork/OtherProject/Haato's Diary.png"
                title="Haato's Diary (2022)"
                description="An open-source, fan-made, visual novel I had a small hand in
                      First experience working with others through GitHub Forks and coordinating through a trello board"
                role="Implement some translations for Japanese Users"
                tech="Python, RenPy"
                reverse={false}
              >
                <Button
                  link="https://wws-haato.itch.io/haatos-diary"
                  path="Artwork/DropDown/Website.png"
                />
                <Button
                  link="https://www.youtube.com/watch?v=tRLvKY_WZwU"
                  path="Artwork/DropDown/YouTube.png"
                />
              </ProjectCard>
            </div>
          </div>
    );
}