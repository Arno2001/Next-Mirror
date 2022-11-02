import type { NextPage } from 'next'
import { Header } from '../src/components/header/header'
import { Section } from '../src/components/section/section'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Section />
    </div>
  )
}

export default Home;
