import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Ben nhau binh yen',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg'
        },
        {
            id: 2,
            name: 'Mot chut thoi',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg'
        },
        {
            id: 3,
            name: 'Nhac chill yeu doi',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg'
        },

    ]
    return (
        <div>
            <h2>Co the ban se yeu thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;