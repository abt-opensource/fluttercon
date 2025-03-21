import Example from './example'
import FeatureCard from './featurecards'
import HeroSection from './hero'
import IconCustomizer from './preview'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureCard/>
      <IconCustomizer/>
      <Example/>

    </div>
  )
}

export default page