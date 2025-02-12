import React from 'react'

function GameType({ title }: { title: string }) {  
    return (
    <div className='game-select-card'>
      <h1 className="card-title">{title}</h1>  
    </div>
  );
}

export default GameType
