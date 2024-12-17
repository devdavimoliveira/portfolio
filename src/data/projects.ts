import { StaticImageData } from 'next/image'

import bakery from '@/assets/projects/bakery.png'
import selfService from '@/assets/projects/self-service.png'
import curiosidadeDispersa from '@/assets/projects/curiosidadedispersa.png'
import movieBox from '@/assets/projects/movie-box.png'

export type Project = {
  name: string
  description: string
  image: StaticImageData
  link: string
}

export const projects: Project[] = [
  {
    name: 'Self-service',
    description:
      'Sistema de autoatendimento para restaurante com as seguintes funções: exibição do cardápio, personalização de pedidos, pagamento online e opções de retirada ou entrega.',
    image: selfService,
    link: '#self-service',
  },
  {
    name: 'Curiosidade Dispersa',
    description:
      'Site de artigos sobre fatos surpreendentes e informações intrigantes que vão entreter e ampliar o conhecimento.',
    image: curiosidadeDispersa,
    link: '#curiosidade-dispersa',
  },
  {
    name: 'Movie Box',
    description: 'Site informativo sobre filmes e séries.',
    image: movieBox,
    link: '#movie-box',
  },
  {
    name: 'Bakery landing page',
    description:
      'Landing page de um comércio fictício (padaria) com design simples e elegante destacando seus produtos.',
    image: bakery,
    link: '#bakery-landing-page',
  },
]
