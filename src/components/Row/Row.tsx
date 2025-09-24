import React, {PropsWithChildren} from 'react'

export const Row: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {children}
    </div>
  );
};