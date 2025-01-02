import './header.css'

export const Header = () => {
    return (
        <header>
            <div className="content">
                <img src="./src/assets/logo.jpeg" alt="IMG" className='logo'  />
                 <img src="./src/assets/title.jpeg" alt="TITLE" className='titulo' />
            </div>
        </header>
    )
}