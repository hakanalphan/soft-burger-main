import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('Yemekler')
    const [loading, setLoading] = useState(false)
    const [foods] = useFetch();
    
    //loading 
    useEffect(() => {
       
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

   

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* food Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'Yemekler' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Yemekler')}>Yemekler</p>
                <p className={menuTab === 'Içecekler' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Içecekler')}>Içecekler</p>
                <p className={menuTab === 'Tatlılar' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Tatlılar')}>Tatlılar</p>
            </div>
            
            <div>
                <FoodItem />
            </div>
        </section>
    )
}

export default Foods