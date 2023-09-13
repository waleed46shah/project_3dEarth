'use client';
import {useEffect} from 'react'
import Lenis from '@studio-freight/lenis';

const smoothScroll = ({children}) => {
    useEffect( ()=> {
        const lenis = new Lenis();

        function raf(time){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },[])
  return children
}

export default smoothScroll