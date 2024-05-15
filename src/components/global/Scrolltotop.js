import React, { useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@emotion/react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add scroll event listener when component mounts
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Button
            style={{
                background: theme.palette.red,
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 1000,
                height:'60px',
                width:'50px',
                borderRadius:'50px',
                display: isVisible ? 'block' : 'none',
            }}
            variant="contained"
            onClick={scrollToTop}
        >
            <KeyboardArrowUpIcon sx={{fontSize:'30px'}}/>
        </Button>
    );
};

export default ScrollToTopButton;
