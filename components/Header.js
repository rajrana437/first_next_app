import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 1
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>
                I'm gonna be the king of the Pirates!
            </p>
        </div>
    )
}

export default Header
