
import Team1Images from '@/components/pages/team1Images'
import TeamSection from '@/components/pages/teamSection'
import { Navbar } from '@/components/Shop/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      <Team1Images />
      <TeamSection />
    </div>
  )
}
