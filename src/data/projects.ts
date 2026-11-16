import { StaticImageData } from 'next/image'

import movieBox from '@/assets/projects/movie-box.png'
import calculaDownload from '@/assets/projects/calculadownload.png'
import providerLandingPage from '@/assets/projects/provider-landing-page.png'
import radiomy from '@/assets/projects/radiomy.png'
import kanplan from '@/assets/projects/kanplan.png'

export type Project = {
  name: string
  description: string
  image: StaticImageData
  liveUrl: string | null
  repos: {
    frontend?: string | null
    backend?: string | null
  } | null
}

export const projects: Project[] = [
  {
    name: 'Kanplan',
    description: 'O Kanplan é uma plataforma de gestão de tarefas em equipe.',
    image: kanplan,
    liveUrl: null,
    repos: {
      frontend: 'https://github.com/devdavimoliveira/kanplan-app',
      backend: 'https://github.com/devdavimoliveira/kanplan-api',
    },
  },
  {
    name: 'Radiomy',
    description:
      'O Radiomy é uma plataforma que oferece várias estações de rádio para ouvir.',
    image: radiomy,
    liveUrl: 'https://radiomy.vercel.app',
    repos: {
      frontend: 'https://github.com/devdavimoliveira/radiomy',
    },
  },
  {
    name: 'Calcula Download',
    description:
      'Uma ferramenta que permite determinar quanto tempo leva para baixar ou enviar arquivos com base na velocidade da sua conexão.',
    image: calculaDownload,
    liveUrl: 'https://calcula-download.vercel.app/',
    repos: {
      frontend: 'https://github.com/devdavimoliveira/calcula-download',
    },
  },
  {
    name: 'Provedor',
    description: 'Landing Page para um Provedor de Internet fictício.',
    image: providerLandingPage,
    liveUrl: 'https://provider-landing-page.vercel.app',
    repos: {
      frontend: 'https://github.com/devdavimoliveira/provider-landing-page',
    },
  },
  {
    name: 'Movie Box',
    description: 'Site informativo sobre filmes e séries.',
    image: movieBox,
    liveUrl: null,
    repos: {
      frontend: 'https://github.com/devdavimoliveira/movie-box',
    },
  },
]
