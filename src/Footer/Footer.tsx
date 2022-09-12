import React from 'react';
import s from './Footer.module.scss'
// import inst from './../Common/img/01-05-9.png'
// import fcb from './../Common/img/facebook-svgrepo-com.svg'
// import tlg from './../Common/img/telegram-svgrepo-com.svg'
// import lnkdn from './../Common/img/linkedin-svgrepo-com.svg'
// import git from './../Common/img/git-fork-svgrepo-com.svg'
import inst from './../Common/img/color/instagram-svgrepo-com (1).svg'
import fcb from './../Common/img/color/facebook-svgrepo-com (2).svg'
import tlg from './../Common/img/color/telegram-svgrepo-com (3).svg'
import lnkdn from './../Common/img/color/linkedin-svgrepo-com (3).svg'
import git from './../Common/img/color/flickr-svgrepo-com.svg'


const Footer = () => {

    return <span className={s.content}>
                 <>
                     <a className={s.item}
                       href={"https://www.linkedin.com/in/alexey-rogozhnikov-426891223"}
                       target="_blank">
                            <img src={lnkdn} className={s.icon}/>
                 </a>
                 <a className={s.item}
                    href={"https://www.instagram.com/hey_alexey"}
                    target="_blank">
                            <img src={inst} className={s.icon}/>
                 </a>
                 <a className={s.item}
                    href={"https://www.facebook.com/alexey.rogozhnikov.1/"}
                    target="_blank">
                            <img src={fcb} className={s.icon}/>
                 </a>

                 <a className={s.item}
                    href={"https://t.me/heyalexey"}
                    target="_blank">
                            <img src={tlg} className={s.icon}/>
                 </a>
                 <a className={s.item}
                    href={"https://www.flickr.com/photos/hey_alexey"}
                    target="_blank">
                            <img src={git} className={s.icon}/>
                 </a>
                 </>
        <div className={s.rights}> All rights reserved 2022 &#169;</div>


            </span>
};

export default Footer;