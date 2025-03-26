import React from 'react';
import '../../styles/component/options.css'
import { FilterIcon } from 'lucide-react'


type PropsOptions = {
    title: string;
    openModal: ()=> void;

}

const Options: React.FC<PropsOptions> = ({title, openModal }) => {

    return(
        <div className="options-container">
            <h1>{title}</h1>
            <button onClick={openModal}>Add new</button>
            {/* <FormModal isOpen={isModalOpen} closeModal={closeModal} /> */}
            <button>Export PDF</button>
            <button>
                <FilterIcon size={20}/>
            </button>
        </div>
    )
}

export default Options