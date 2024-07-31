// pages/index.tsx

import React from 'react';
import FullScreenIframe from '../components/FullScreenIframe';
import Headers from '../components/Header';
import Footer from '../components/Footer';
import Hero from '@/components/Home/Hero';
import HomeContactUs from '@/components/Home/Contactus';
import AboutUs from '@/components/Home/Aboutus';
import MedicalServices from '@/components/Home/Medical';
import CtaBox from '@/components/Home/CTa';
import HowWeWork from '@/components/Home/WorkSection';
import OurFaqs from '@/components/Home/FAQ';
import ClientsTestimonials from '@/components/Home/Testimonial';
import RecentPosts from '@/components/Home/Posts';
import HomeContactForm from '@/components/Home/FooterContact';
const Home: React.FC = () => {
  return (
    <div>
      <Headers />
      <Hero />
      <HomeContactUs />
      <HomeContactUs />
      <AboutUs/>
      <MedicalServices/>
      <CtaBox/>
      <HowWeWork />
      <OurFaqs />
      <ClientsTestimonials />
      <RecentPosts />
      <HomeContactForm />
      <Footer />
    </div>
  );
};

export default Home;
