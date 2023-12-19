'use client'
import React, { useEffect, useRef } from 'react'
import Aboutus from '@/components/Aboutus'
import Contactus from '@/components/Contactus'
import Footer from '@/components/Footer'
import GlobalProblems from '@/components/GlobalProblems'
import MeetOurTeam from '@/components/MeetOurTeam'
import Navbar from '@/components/Navbar'
import OurProducts from '@/components/OurProducts'
import OurProjects from '@/components/OurProjects'

export default function Homepage({ data, lng }) {

    // useEffect(() => {
    //     (
    //         async () => {
    //             const LocomotiveScroll = (await import('locomotive-scroll')).default;
    //             const locomotiveScroll = new LocomotiveScroll();
    //         }
    //     )
    // }, [])
    return (
        <div >
            <div className="container">
                <Navbar lng={lng} />
                {data?.data?.home && <GlobalProblems lng={lng} data={data?.data?.home}/>}
                <OurProducts lng={lng} data={data?.data?.our_product} />
            </div>
            <div className="bg-our">
                <OurProjects lng={lng} data={data?.data?.our_project} />
            </div>
            <div className="container" >
                <Aboutus lng={lng} data={data?.data?.about_us} />
                <MeetOurTeam lng={lng} data={data?.data?.team} />
                <div className="bg-our">
                    <Contactus lng={lng} data={data?.data?.about_us} />
                </div>
            </div>
            <div className="bg-our">
                <Footer lng={lng} />
            </div>
        </div>
    )
}
