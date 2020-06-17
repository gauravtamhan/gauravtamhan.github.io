import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollTopBtn() {
    const [btnVisible, setbtnVisible] = useState(false);

    useEffect(() => {
        function calcScrollDistance() {
            const winScroll =
                document.body.scrollTop || document.documentElement.scrollTop;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrolled = winScroll / height;

            setbtnVisible(scrolled >= 0.4);
        }

        window.addEventListener('scroll', calcScrollDistance);

        return function cleanup() {
            window.removeEventListener('scroll', calcScrollDistance);
        };
    });

    return (
        <button
            className={`btn back-to-top btn-primary btn-round ${
                btnVisible ? 'animate' : ''
            }`}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}
        >
            <FontAwesomeIcon icon={faArrowUp} fixedWidth />
        </button>
    );
}

export default ScrollTopBtn;
