import React from 'react'
import AboutHeroSection from '../components/about/aboutherosection'
import OurStorySection from '../components/about/ourstorysection'
import MissionVisionSection from '../components/about/misionvisionsection'
import TeamSection from '../components/about/teamsection'

export default function page() {
  return (
    <div>
        <AboutHeroSection/>
        <OurStorySection/>
        <MissionVisionSection/>
        <TeamSection/>
    </div>
  )
}
