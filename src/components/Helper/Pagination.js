import React from 'react';
export default class Pagination extends React.Component{
    render() {
        const currentPage = this.props.currentPage;
        const lastPage = Math.ceil(this.props.total / this.props.perPage);
        const hasPrevPage = currentPage > 1;
        const hasNextPage = lastPage > currentPage;
        const prevPage = currentPage - 1;
        const nextPage = currentPage + 1;        
     return (
       <nav aria-label="...">
         <ul className="pagination justify-content-center">
           {currentPage > 2 && (
             <li className="page-item">
               <button
                 className="page-link"
                 onClick={() => this.props.changePage(1)}
               >
                 1
               </button>
             </li>
           )}
           {hasPrevPage && currentPage !== prevPage && (
             <li className="page-item">
               <button
                 className="page-link"
                 tabIndex={-1}
                 onClick={() => this.props.changePage(prevPage)}
               >
                 {prevPage}
               </button>
             </li>
           )}
           <li className="page-item active">
             <button className="page-link" tabIndex={-1}>
               {currentPage}
             </button>
           </li>
           {hasNextPage && (
             <li className="page-item">
               <button
                 className="page-link"
                 tabIndex={-1}
                 onClick={() => this.props.changePage(nextPage)}
               >
                 {nextPage}
               </button>
             </li>
           )}
           {hasNextPage && nextPage !== lastPage && (
             <li className="page-item">
               <button
                 className="page-link"
                 tabIndex={-1}
                 onClick={() => this.props.changePage(lastPage)}
               >
                 {lastPage}
               </button>
             </li>
           )}
         </ul>
       </nav>
     );       
    }

}