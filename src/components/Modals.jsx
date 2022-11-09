import React from "react";
import "../CSS/Modal.css";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import FormularioApi from "./formularioApi";
const Modals = () => {

const [isOpen1, openModal1, closeModal1]= useModal(false)
const [isOpen2, openModal2, closeModal2]= useModal(false)

  return (
    <>
      <h3>Ventanas Modales</h3>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <h2>ventana modal 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, sequi suscipit, rem labore voluptatum consequatur culpa deleniti possimus totam natus temporibus est excepturi. Obcaecati atque eveniet incidunt vel, eius minima.</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals"/>
      </Modal>
      <button onClick={openModal1}>Ventana Modal 1</button>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <FormularioApi/>
      </Modal>
      <button onClick={openModal2}>Formulario de la wea</button>
    </>
  );
};

export default Modals;
