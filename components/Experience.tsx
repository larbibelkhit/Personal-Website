
const Experience = () => {
    const jobs = [
        {
            id: 1,
            company: "ABI Research",
            title: "Research Intern",
            stint: "June 2021 - May 2023",
            description: [
                "Conducted in-depth analysis of TinyML and Edge AI, forecasting Edge AI chipset shipments by use case, and contributed to a comprehensive consumer technologies market update PowerPoint presentation and Excel workbook.",
                "Updated an Excel workbook for the supply chain team, compiling data on 200 companies across OSS/BSS, RAN, E2E, Core, and Edge, enhancing vendor knowledge for informed decision-making.",
                "Developed 2 Python-based automation tools, saving the Networks team over 15 hours in data collection, resulting in heightened efficiency and a shift in focus to higher-value tasks."
            ]
        },
        {
            id: 2,
            company: "Chislehurst Chiropractic Clinic",
            title: "Office Assistant",
            stint: "October 2018 - June 2020",
            description: [
                "Assisted receptionists using customer service and collaboration skills, handling over 15 phone calls daily and relaying information, improving patient experience and clinic communication efficiency.",
                "Tracked over 100 patients daily and prepared Google Sheets for scheduling, streamlining operations and boosting clinic efficiency and organisation.",
                "Streamlined the archiving and preparation of around 100 patient files for the next day, ensuring a seamless daily workflow and improving the efficiency of the clinic's administrative processes."
            ]
        }
    ]
    const temp = [
        {
            id: 1,
            company: "ABI Research",
            title: "Industry Analyst",
            stint: "May 2024 - present",
            description: [
                "Worked closely with clients and lead projects to produce custom research to answer key questions in various formats, including datasets and whitepapers.",
                "Conducted an in-depth analysis of 5G RAN Automation market, including market sizing and competitive analysis, assisting operators in choosing partners and forming deployment strategies.",
                "Led a webinar presentation for a client for over 50 viewers focusing on the networks industry in 2035 and potential strategies they can use to ensure a strong market position for the 6G era."
            ]
        },
        {
            id: 2,
            company: "ABI Research",
            title: "Research Analyst",
            stint: "June 2023 - April 2024",
            description: [
                "Created a 5 year market forecast for the outdoor network infrastructure market, including 5G Open RAN and Massive MIMO, allowing clients to make more informed investment strategies in the 5G sector.",
                "Conducted an in-depth analysis of 5G Fixed Wireless Access vendors, inclduing market share, competitive analysis and competitive dynamics, assiting operators in forming strategic partnerships.",
                "Wrote monthly article posts focusing on trending network topics such as Open RAN, silicon photonics and vRAN, informing clients of the latest industry news, how it impacts the market, and recommendations for the industry to react."
            ]
        },
        {
            id: 3,
            company: "ABI Research",
            title: "Research Intern",
            stint: "June 2021 - May 2023",
            description: [
                "Conducted in-depth analysis of TinyML and Edge AI, forecasting Edge AI chipset shipments by use case, and contributed to a comprehensive consumer technologies market update PowerPoint presentation and Excel workbook.",
                "Updated an Excel workbook for the supply chain team, compiling data on 200 companies across OSS/BSS, RAN, E2E, Core, and Edge, enhancing vendor knowledge for informed decision-making.",
                "Developed 2 Python-based automation tools, saving the Networks team over 15 hours in data collection, resulting in heightened efficiency and a shift in focus to higher-value tasks."
            ]
        },
    ]

  return (
    <section className="flex min-h-screen bg-blue-highlight text-white flex-1" id='experience'>
        <div className="m-auto max-container padding-container mt-30 flex flex-col flex-1">
        <h2 className='text-4xl mt-12 md:text-6xl font-bold capitalize'>Experience</h2>
            {temp.map((job) => (
                <div 
                    key={job.id}
                    className="grid grid-cols-3 my-5"
                >
                    <div className="font-light col-span-1">
                        {job.stint}
                    </div>
                    <div className="col-span-2">
                        <p className="text-lg md:text-xl font-bold">{job.title} - {job.company}</p>
                        <ul className="space-y-2">
                            {job.description.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experience