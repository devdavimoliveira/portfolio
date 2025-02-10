import { StaticImageData } from 'next/image'

import selfService from '@/assets/projects/self-service.png'
import curiosidadeDispersa from '@/assets/projects/curiosidadedispersa.png'
import movieBox from '@/assets/projects/movie-box.png'
import calculaDownload from '@/assets/projects/calculadownload.png'
import providerLandingPage from '@/assets/projects/provider-landing-page.png'

export type Project = {
  name: string
  description: string
  image: StaticImageData
  link: string | null
}

export const projects: Project[] = [
  {
    name: 'Calcula Download',
    description:
      'Uma ferramenta que permite determinar quanto tempo leva para baixar ou enviar arquivos com base na velocidade da sua conexão. Rápido, simples e preciso!',
    image: calculaDownload,
    link: 'https://www.calculadownload.com.br',
  },
  {
    name: 'Provedor',
    description: 'Landing Page para um Provedor de Internet fictício.',
    image: providerLandingPage,
    link: 'https://provider-landing-page.vercel.app',
  },
  {
    name: 'Self-service',
    description:
      'Sistema de autoatendimento para restaurante com as seguintes funções: exibição do cardápio, personalização de pedidos, pagamento online e opções de retirada ou entrega.',
    image: selfService,
    link: null,
  },
  {
    name: 'Curiosidade Dispersa',
    description:
      'Site de artigos sobre fatos surpreendentes e informações intrigantes que vão entreter e ampliar o conhecimento.',
    image: curiosidadeDispersa,
    link: null,
  },
  {
    name: 'Movie Box',
    description: 'Site informativo sobre filmes e séries.',
    image: movieBox,
    link: null,
  },
]
