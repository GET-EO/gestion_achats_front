import "./Users.css"
import FormModal from "../ui/formModal"
import { useState } from "react"

const Users = () => {

    const [isModalOpen, setIsModalOpen]= useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(true)

    return(
        <div className="users-container">
        <h1 className="users-title">Users</h1>
        <button onClick={openModal}>Ouvrir le formulaire</button>
        <FormModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    )
}

export default Users