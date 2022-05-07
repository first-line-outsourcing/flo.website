import {useEffect} from 'react';


function addListener(media) {

}

export function ScreenSizeDetector() {
  useEffect(() => {
    if (window.matchMedia) {
      const mobile = window.matchMedia('(min-width: 320px)');
      const table = window.matchMedia('(min-width: 768px)');
      const desktop = window.matchMedia('(min-width: 1440px)');

    }

    return () => {
      clearListener()
    }
  }, []);

  return null;
}
