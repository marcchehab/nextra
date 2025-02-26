import s from './CoolTitle.module.css'

export function CoolTitle({ children }: { children: React.ReactNode }) {
    return (
        <h1 className={s.cooltitle}>
            {children}
        </h1>
    )
}