import { Card, CardBody } from '@nextui-org/react'
import React, { ReactNode } from 'react'

const CountCard = ({
  title,
  count,
  icon
} : {
  title?: string,
  count?: number,
  icon?: ReactNode,
}) => {
  return (
    <Card className='relative w-[300px] h-[300px] bg-jaris-yellow '>
      <div className="absolute inset-0 top-14 left-10 bg-[url('/logos/jaris-sports-logo.png')] opacity-10 " />
      <CardBody className='w-full flex flex-col items-center justify-center gap-4'>
        <p className='text-xl md:text-3xl lg:text-4xl text-jaris-blue'>{icon}</p>
        <p className='title font-semibold text-jaris-blue'>
          {count}
        </p>
        <p className='text-jaris-blue subtitle font-medium'>
          {title}
        </p>
      </CardBody>
    </Card>
  )
}

export default CountCard