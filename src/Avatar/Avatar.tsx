import React, {memo} from 'react';
import s from './../App.module.scss';
import './../App.module.scss';

export const Avatar = memo(() => {
    console.log('ava render')
    return (
        <div className={s.leftBox}>
            <div className={s.avatar}></div>
        </div>

    );
})

