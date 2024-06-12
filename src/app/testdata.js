export const pages = [
    // {page: 'about', label: 'my story', color: '#94D1BE', colorHover: '#7FC7B0'},
    {page: 'about', label: 'my story', color: '#7FC7B0', colorHover: '#63BB9F'},
    {page: 'projects', label: 'projects', color: '#8BA7A3', colorHover: '#739691'},
    {page: 'contact', label: 'get in touch', color: '#515948', colorHover: '#43493C'},
]

export const projects = [
    {
        id: crypto.randomUUID(),
        title: 'NFL Radar Charts - v2',
        description: 'Full-stack NFL visualization tool. Build radar charts to compare stats in six key categories for 2002 through 2023 NFL season. Refreshed and rebuilt second version of previous project.',
        stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'apexcharts.js'],
        githubLink: 'https://github.com/domsantini/nflRadarCharts2.0',
        liveLink: 'https://nfl-radar-charts2-0.vercel.app/'
        
    },
    {
        id: crypto.randomUUID(),
        title: 'NFL Radar Charts - v1',
        description: 'Full-stack NFL visualization tool. Build radar charts to compare stats in six key categories for 2002 through 2022 NFL season. Ability to compare teams across the years.',
        stack: ['JavaScript', 'Python', 'Flask', 'apexcharts.js'],
        githubLink: 'https://github.com/domsantini/nflRadarCharts',
        liveLink: 'https://nflradarcharts.pythonanywhere.com/'
    },
]