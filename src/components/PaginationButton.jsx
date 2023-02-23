import React from 'react'

const PaginationButton = ({setCurrentPage , handleNextPage , handlePreviusPage , pageInBlock , lastPage}) => {
return (
    <section className='paginationPokemonsBtn'>
        <div>
            <button className='btnNexAndPrevius' onClick={() => setCurrentPage(1)}>. . .</button>
                <button className='btnNexAndPrevius' onClick={handlePreviusPage} >{`<<`}</button>
        {
            pageInBlock.map(page => <button className='btnPagination' onClick={() => setCurrentPage(page)} key={page} >{page}</button>)
        }
        <button className='btnNexAndPrevius' onClick={handleNextPage} >{`>>`}</button>
        <button className='btnNexAndPrevius' onClick={() => setCurrentPage(lastPage)} >. . .</button>
        
        </div>
    </section>
)
}

export default PaginationButton