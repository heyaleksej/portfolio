import s from './ButtonX.module.scss'

type propsType={
    name?:string
    onClick?:()=>void
    disabled?:boolean
    type: "button" | "submit" | "reset" | undefined
    children?:any
}

export const ButtonX = (props:propsType)=> {
    return <button type={props.type} onClick={props.onClick} disabled={props.disabled} className={s.button}>{props.name}{props.children}</button>

}