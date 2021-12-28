import React from 'react';

export default function Card({url, title, explanation, copyright})

{

  return (
    <div className="card border-danger text-white bg-dark mb-3 card mb-4 mt-4" >
    <div className="row g-0">
        <div className="col-md-8 inserirFoto">
            <img src={url} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text border-danger mb-4">{explanation}.</p>
                <p className="card-text"><small className="text-muted">Author: {copyright}</small></p>
            </div>
        </div>
    </div>
</div>
  )
}