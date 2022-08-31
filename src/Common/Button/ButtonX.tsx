import s from './ButtonX.module.scss'

type propsType={
    name:string
    onClick?:()=>void
    disabled?:boolean
    type: "button" | "submit" | "reset" | undefined
}

export const ButtonX = (props:propsType)=> {
    return <div className={s.container}>
        <div>
            <button type={props.type} onClick={props.onClick} disabled={props.disabled} className={s.shrinkBorder}>{props.name}</button>
        </div>
    </div>
}