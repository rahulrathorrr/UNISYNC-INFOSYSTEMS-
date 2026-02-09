import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ServiceHero from '../Components/ServiceHero'
import WorkforceSection from '../Components/WorkforceSection'
import TechnologySection from '../Components/TechnologySection'
import AutomationSection from '../Components/AutomationSection'
import MarketingSection from '../Components/MarketingSection'

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Thoda delay taaki components render ho jayein
      const timeoutId = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Offset dete hain taki header ke peeche na chupe (80px approx header height)
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);

      return () => clearTimeout(timeoutId);
    } else {
      // Agar koi hash nahi hai toh page top par load ho
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="overflow-hidden">
      <ServiceHero />
      
      {/* Har section ko ek div mein wrap kiya hai ID ke saath */}
      <div id="workforce-solutions">
        <WorkforceSection />
      </div>

      <div id="technology-services">
        <TechnologySection />
      </div>

      <div id="business-automation">
        <AutomationSection />
      </div>

      <div id="marketing-growth">
        <MarketingSection />
      </div>
    </div>
  )
}

export default Services