import Hero from '@/components/sections/Hero'
import SelectedWork from '@/components/sections/SelectedWork'
import Services from '@/components/sections/Services'
import Capabilities from '@/components/sections/Capabilities'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return <main id="main-content"><Hero /><SelectedWork /><Services /><Capabilities /><Process /><About /><Contact /></main>
}
