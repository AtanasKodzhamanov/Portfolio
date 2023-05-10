import React from 'react';
import { Element } from 'react-scroll';
import useGoogleAnalytics from './useGoogleAnalytics';


const CV = () => {
    useGoogleAnalytics();

    return (
        <Element name="CV" className="section">
            <iframe src="https://drive.google.com/file/d/1uDAs24ewydq0tzsI-HNvbLIEoOXpCs7a/preview" width="900px" height="1200px" title="cv"></iframe>
        </Element>
    );
};

export default CV;
