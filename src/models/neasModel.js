import neas from '../data/neas.js'

const getRandomNea = async () => {
  const number = Math.floor(Math.random() * neas.length)
  return neas[number]
}

export const nea = async () => {
  const randomNea = await getRandomNea()
  return {
    id: randomNea.id,
    name: randomNea.name,
    height: randomNea.height,
    ability: randomNea.ability,
  }
}

export const phrase = async () => {
  const randomNea = await getRandomNea()
  return {
    image: randomNea.image,
    phrase: randomNea.phrase,
  }
}

export default {
  nea,
  phrase,
}
