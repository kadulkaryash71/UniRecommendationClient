import React from 'react';
import CounselCards from '../components/CounselCards';

function Counsellors() {

    let allCards = [
        {
            name: "Leap Scholar",
            desc: "Leap supports future leaders from India in their quest to study at the best global schools. Our team of global study experts and student mentors guide you at every step of the way.",
            icon: "https://leapscholar.com/assets/company_logo/new-header-logo.svg",
            link: "https://leapscholar.com/counsellors"
        },
        {
            name: "IMFS",
            desc: "IMFS has been a catalyst in helping students realize their dreams of studying at the best universities abroad since its inception in 1997.",
            icon: "https://th.bing.com/th/id/OIP.8w5Xnwe1c2uEFlQ4Sx9OjwHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            link: "https://www.imfs.co.in/contact.html"
        },
        {
            name: "TC Global",
            desc: "TC Global simplifies international education, learning and mobility through connecting students, universities and a global community on a single platform.7",
            icon: "https://th.bing.com/th/id/OIP.mzyD08QyCdaG_FkFQPnAYwHaEI?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            link: "https://tcglobal.com/about-us/"
        },
        {
            name: "CollegePond",
            desc: "Collegepond is a pioneer study abroad consultant facilitating the collegiate trajectory of students aspiring to fulfill their academic and career dreams overseas.",
            icon: "https://directory.edugorilla.com/wp-content/uploads/sites/6/2019/04/qLHgXpnD_400x400.png",
            link: "https://collegepond.com/contact-us/"
        },
        {
            name: "iSchoolConnect",
            desc: "Researching and applying to these universities is a complicated and time-consuming hassle. iSchoolConnect is the simple one stop shop for all your higher education requirements.",
            icon: "https://th.bing.com/th/id/OIP.XDGcaOTIusHy_6pu5qubUAHaEl?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            link: "https://ischoolconnect.com/en/"
        },
        {
            name: "Imperial-overseas",
            desc: "We are Imperial. Your one-stop-shop to study abroad. we make sure we chase your dreams. We have managed to achieve and create a strong student network of 10k+ worldwide within just few years of sheer hardwork and dedication.",
            icon: "https://th.bing.com/th/id/OIP.Qtqg_osJhZpH3JyhqHJfSwHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            link: "https://www.imperial-overseas.com/contact.php"
        }
    ];

    return (
        <div className="container bg-gradient-success">
            <h1 className="row justify-content-center">
                Our Allies
            </h1>
            <div className="row justify-content-center m-4">
                {allCards.map((card, index) =>
                    <CounselCards key={index} title={card.name} note={card.desc} image={card.icon} />
                )}
            </div>
        </div>
    )
}

export default Counsellors