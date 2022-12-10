import React, {useState, useEffect, useContext} from 'react'
import useLanguage from '../../hook/useLanguage'
import './index.css'
import { DataContext } from '../../context/DataContext'
import ReactModal from 'react-modal'
import BreakForm from '../BreakForm'

function ModalFormBreak(){
    const {modalIsOpen, setModalIsOpen} = useContext(DataContext)
    const text = useLanguage()

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <div>
            <button onClick={openModal}>coba dulu</button>
            <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
    
                <BreakForm/>
                <div>
                    <button onClick={closeModal}>Close</button>
                </div>
            </ReactModal>
        </div>
      
    )
}

export default ModalFormBreak