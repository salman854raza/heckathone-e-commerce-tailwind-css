
// import Header from '../components/shop-components/header'

import FreeTrail from '@/components/pricing-component/freetrail'
import Plan from '@/components/pricing-component/plan'
import Price from '@/components/pricing-component/price'
import PriceFaqs from '@/components/pricing-component/price-faqs'
import React from 'react'
import Header from '../Contact/header'

const PricingPage = () => {
  return (
    <div>
        <Header />
        <Price />
        <Plan />
        <PriceFaqs />
        <FreeTrail />
        
    </div>
  )
}

export default PricingPage