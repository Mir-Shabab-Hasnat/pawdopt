import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { stories } from '@/data'

const Review = () => {
  return (
    <div className='py-20' id="reviews">
      <h1 className='font-bold text-4xl md:text-5xl text-center'>
        Some of our <span className='text-rose-400'>Paw-some Stories</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards 
          items={stories}
          direction='right'
          speed="fast"
        />
      </div>
    </div>
  )
}

export default Review