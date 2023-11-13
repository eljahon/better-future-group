import Image from "next/image";
import team1 from '../assets/team/team1.png'
import team2 from '../assets/team/team2.png'
import team3 from '../assets/team/team3.png'
import team4 from '../assets/team/team4.png'
import team5 from '../assets/team/team5.png'
import team6 from '../assets/team/taem_6.png'
import team7 from '../assets/team/taem_7.png'
import team8 from '../assets/team/team8.png'
const UserItem = (props) => {
    const {icon, name, linkText} = props
    return <div className='text-center'>
        <Image className='mx-auto' src={icon}/>
        <p className='mt-3 text-lg'>{name}</p>
        <a href="#" className='text-[#2EB1FC] text-base'>{linkText}</a>
    </div>
}
const MeetOurTeam = () => {
    const list =[
        {
        icon: team1,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },{
        icon: team2,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },{
        icon: team3,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },{
        icon: team4,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },{
        icon: team5,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },{
        icon: team6,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },{
        icon: team7,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },{
        icon: team8,
        name: 'Amélie Laurent',
        link: '',
        linkText: 'Founder & CEO'
    },]
return <div id='our-team'>
    <div className='py-16'>
        <div className="title w-1/2 mx-auto">
            <h1 className='text-center font-semibold text-2xl'>MeetOurTeam</h1>
            <p className='text-center opacity-80 mt-4'>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-16 justify-center">
            {list.map((el,index) => <UserItem key={index} {...el}/>)}

        </div>
    </div>
</div>
}
export  default MeetOurTeam;
