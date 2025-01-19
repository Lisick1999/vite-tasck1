import React from 'react';

export const App = () => {
  // Декларативный стиль: определение переменной currentYear через функцию, возвращающую текущий год
  const currentYear = new Date().getFullYear();

  return (
    <div className='currentYear'>
       {/* Декларативный стиль: рендеринг текущего года через JSX */}
      <p>{currentYear}</p>
    </div>
  );
};
