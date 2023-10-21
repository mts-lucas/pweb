import React from 'react';
import SocialMedias from './social';
import MyTable from './table';

export default function Home() {
    return (
        <div className="home">
            <h2>Viva Santana!</h2>
            <SocialMedias />
            <MyTable />
        </div>
    );
}