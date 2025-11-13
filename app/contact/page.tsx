import ContactForm from '@/components/ContactForm'
import React from 'react'

const contact = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start"> 
          <ContactForm />
      </main>
    </div>
  )
}

export default contact