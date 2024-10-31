import React from 'react'
import { HiOutlineMinus } from 'react-icons/hi'

const FAQs = () => {

  const faq = [
    {
      question: 'How much does The Muslim Ticket cost?',
      answer: "For free events, there's no fee. If you're hosting a paid event, our fees are just 2% of the ticket price plus 30 cents in Australia. We offer the lowest prices in the industry. If you want to sell tickets globally (e.g. US, UK, Europe, etc) the fee is + 1%."
    },
    {
      question: 'What types of events can I host on MuslimTicket?',
      answer: ''
    },
    {
      question: 'Is event management or customer support included?',
      answer: ''
    },
    {
      question: 'Can I customise my event and profile to match my branding?',
      answer: ''
    },
    {
      question: 'How fast can I set up my account?',
      answer: ''
    },
    {
      question: 'When will I receive payment after my event?',
      answer: ''
    },
    {
      question: 'Can I add special requirements during the booking process?',
      answer: ''
    },
    {
      question: 'Can I schedule multiple sessions for my event?',
      answer: ''
    },
    {
      question: "What's the maximum number of attendees I can host?",
      answer: ''
    }

  ]

  return (
    <main className='container flex-col gap-16 justify-center mt-24 font-figtree'>
    <div className='inline-block text-center'>
      <div className="inline-block bg-pink-final text-white p-2 text-30 font-barlow rounded-[3px]">
        FAQS
      </div>
      <h2 className="text-40 mt-3 font-semibold">
        Your questions, answered?
      </h2>
    </div>

    <div className='max-w-[870px] mx-auto p-7'>
      {
        faq.map((faq, index) => (
          <div key={index} className='py-4'>
            <div className=' flex items-center justify-between text-dark-grey'>
              <h2 className='font-bold text-xl'>
                {faq.question}
              </h2>
              <HiOutlineMinus className='font-bold text-2xl '/>
            </div>
            <div>
              <p className='text-light-grey leading-7 text-wrap mt-4 mb-4'>
                {faq.answer}
              </p>
            </div>
          </div>
        ))
      }
    </div>

    </main>
  )
}

export default FAQs