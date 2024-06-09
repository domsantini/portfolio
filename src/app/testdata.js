export const pages = [
    {page: 'about', label: 'my story', color: '#6B5CA5', colorHover: '#CAB9B9'},
    {page: 'projects', label: 'projects', color: '#72195A', colorHover: '#B3C3D0'},
    {page: 'contact', label: 'get in touch', color: '#4C1036', colorHover: '#60AAE6'},
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