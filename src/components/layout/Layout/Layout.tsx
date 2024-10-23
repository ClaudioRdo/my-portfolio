import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div id="app">
            <main>
                {React.Children.map(children, (child) => (
                    <div className="page">
                        {child}
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Layout