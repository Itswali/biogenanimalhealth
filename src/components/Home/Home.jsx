import React from 'react'
import Header from './Header'
import SpeakerContainer from './Speaker/Speakercontainer'
import MessageContainer from './Message/MessageContainer'
import SampleContainer from './Sample/SampleContainer'
import Footer from './Footer/Footer'
import ContactUs from './Contact/ContactUs'

export default function Home() {
  return (
    <>
      <Header />
      <SpeakerContainer />
      <MessageContainer />
      <SampleContainer />
      <ContactUs />
      <Footer />


    </>
  )
}
