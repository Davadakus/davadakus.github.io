import Button from "../Components/Button";
import ProjectCard from "../Components/ProjectCard";
import { Role } from "../data/roles";
import { Tech } from "../data/tech";

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
            <div className="max-w-[1600px] px-5 mx-auto space-y-20">
              <ProjectCard 
                title="CloudTable"
                imageSrc="Artwork/OtherProject/CloudTable.png"
                description={`Made a table app using the T3 Stack including: Login, Create and Manipulate Table, and Different Users
                \nImplemented google's authentication and functioning backend, database, frontend using T3 deployed on Vercel
                `}
                role={Role.FullStack}
                techList={[Tech.React, Tech.TailwindCSS, Tech.T3Stack, Tech.NextJS, Tech.NextAuthJS, Tech.TRPC, Tech.Prisma, Tech.PostgreSQL]}
                linkList={["https://youtu.be/Iu_dQNK4H24", "https://cloud-table-prototype.vercel.app/"]}
                reverse={false}
              />
              
              <ProjectCard 
                title="Recreating Discord (2025)"
                imageSrc="Artwork/OtherProject/DiscordDemo.png"
                description="Replicating Discord's layout and DM functionality; experimenting full-stack development
                      React + Vite for Frontend; Node.js and Express.js for backend
                      Able to send messages and view chat history
                      (Only frontend page hosted)"
                role={Role.FullStack}
                techList={[Tech.React, Tech.TailwindCSS, Tech.Vite, Tech.ExpressJS, Tech.NodeJS, Tech.GitHub]}
                linkList={["https://github.com/Davadakus/discord-demo", "https://cloud-table-prototype.vercel.app/", "https://discord-demo-black.vercel.app/"]}
                reverse={true}
              />

              <ProjectCard 
                title="Beacon Visualizer (2024)"
                imageSrc="Artwork/OtherProject/BeaconVisualizer.png"
                description="A React Project me and my friend made for a Hackathon in 24 Hours
                      Simulates live tracking of a beacon travelling in a rocket displaying relevant data"
                role={Role.FrontEnd}
                techList={[Tech.React, Tech.TailwindCSS, Tech.Vite, Tech.D3, Tech.ThreeJS, Tech.GitHub]}
                linkList={["https://github.com/Davadakus/ANT61Hackathon", "https://www.youtube.com/watch?v=Cik_anyDUuw", "https://discord-demo-black.vercel.app/"]}
                reverse={false}
              />

              <ProjectCard 
                title="Game Based Learning Website (2024)"
                imageSrc="Artwork/OtherProject/GBL.png"
                description="React Project by 7 students for a University Capstone Project
                      Allows you to upload your class materials PDF to an AI Tutor (Gemini) and group them
                      The AI generates questions for users to test themselves
                      You can ask the AI regarding specific questions on screen and will give you feedback"
                role={Role.FrontEnd}
                techList={[Tech.React, Tech.TailwindCSS, Tech.Vite, Tech.FastAPI, Tech.Docker, Tech.GitHub]}
                linkList={["https://youtu.be/gqQlONmrvE4"]}
                reverse={true}
              />

              <ProjectCard 
                title="Haato's Diary (2022)"
                imageSrc="Artwork/OtherProject/Haato's Diary.png"
                description="An open-source, fan-made, visual novel I had a small hand in
                      First experience working with others through GitHub Forks and coordinating through a trello board"
                role={Role.GameDev}
                techList={[Tech.Python, Tech.RenPy]}
                linkList={["https://wws-haato.itch.io/haatos-diary", "https://www.youtube.com/watch?v=tRLvKY_WZwU", "https://discord-demo-black.vercel.app/"]}
                reverse={false}
              />
            </div>
          </div>
    );
}