import React from 'react';
import '../../styles/component/options.css'
import FormModal from '../ui/formModal';
import { FilterIcon } from 'lucide-react'
import { useState } from 'react';


type PropsOptions = {
    title: string;
}

const Options: React.FC<PropsOptions> = ({title}) => {

    const [isModalOpen, setIsModalOpen]= useState(false)
    
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(true)

    return(
        <div className="options-container">
            <h1>{title}</h1>
            <button onClick={openModal}>Add new</button>
            <FormModal isOpen={isModalOpen} closeModal={closeModal} />
            <button>Export PDF</button>
            <button>
                <FilterIcon size={20}/>
            </button>
        </div>
    )
}

export default Options