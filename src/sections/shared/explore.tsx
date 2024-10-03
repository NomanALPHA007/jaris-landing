import { ExploreCard } from '@/components'
import { exploreItems } from '@/data'
import React from 'react'

const Explore = () => {
  return (
    <div className='padding bg-jaris-blue-light flex flex-col items-center justify-center gap-20'>
      <h2 className="heading-secondary font-bold text-bg-text">More to Explore</h2>
      <div className='flex items-center justify-center gap-8 flex-wrap'>
        {
          exploreItems.map((item: any, index: number) => (
            <ExploreCard key={index} title={item.title} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}

export default Explore