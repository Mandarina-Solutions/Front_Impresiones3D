import './search.css'

export const Search = () => {
    return (
        <div className='search'>
        <div className='padre'>
            <div className="container">
                <input type="text" placeholder="Busca un producto" />
                <button>SEARCH</button>
            </div>
        </div>
        </div>
    );
}