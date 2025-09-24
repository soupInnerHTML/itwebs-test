import React, {PropsWithChildren} from 'react'

export const Header: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <h1 className="text-center mb-6 text-3xl font-bold">{children}</h1>
  );
};