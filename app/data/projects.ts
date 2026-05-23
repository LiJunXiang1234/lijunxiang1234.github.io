export type ProjectEntry = {
  title: string
  description: string
  href: string
  status: string
  tags: string[]
}

export const projects: ProjectEntry[] = [
  {
    title: '日本番剧可视化',
    description: '一个用于练习前端数据可视化、交互筛选与作品集展示的纯前端项目。',
    href: '/anime-visualization/',
    status: 'Building',
    tags: ['Vue3', 'Vite', 'TypeScript', 'ECharts']
  }
]
