'use client'
import { eventsData, Event } from '@/assets/data'
import Paragraph from '@/components/layout/paragraph'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
  params: { id: string }
}

const EventPageId = ({ params }: Props) => {
  const [event, setEvent] = useState<Event>({} as Event)

  useEffect(() => {
    params.id && setEvent(eventsData.filter(eve => eve.id === params.id)[0])
    return () => {
    }
  }, [params.id])

  return (
    <div className='z-10 flex flex-col'>
      {Object.entries(event).length > 0 ? (
        <>
          <div className="container mx-auto my-8 p-4">
            <div className='flex flex-row items-center justify-between'>
              <span className='px-3 py-2 text-blue-500 rounded-2xl bg-blue-500/20 font-bold'>{event.type}</span>
              <div ><span className='line-through'>{event.price} Bs.</span> <span className='text-green-500'>Gratis</span></div>
            </div>
            <h1 className="text-3xl font-bold py-4">{event.title}</h1>

            <div className="flex justify-between mb-4">
              <p className="dark:text-secondaryLight">{event.date}</p>
              <p className="text-gray-500">{event.place}</p>
            </div>

            {/* Imágenes del evento */}
            <div className='flex flex-row w-full mx-auto overflow-x-auto py-6 relative'>
              {event.images.map((image, index) => (
                <div key={index} className="flex mb-4 rounded-2xl h-96 min-w-64 w-full relative overflow-hidden shrink-0 shadow-xl">
                  <Image src={image} alt={`Evento ${index + 1}`} fill className='object-cover' />
                </div>
              ))}
            </div>

            {/* Descripción del evento */}
            <div className="mb-8 flex flex-col gap-4">
              {event.description.map((paragraph, index) => (
                <Paragraph isDoc key={index}>{paragraph}</Paragraph>
              ))}
            </div>
            {/* Coloca cualquier otro detalle o sección según sea necesario */}
          </div>
        </>
      )
        : <span>Loading...</span>}
    </div>
  )
}

export default EventPageId