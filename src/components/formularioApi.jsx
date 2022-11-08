import React from 'react'
import { useState } from 'react'
import { useForm } from '../hooks/useForm'

const formIni={
    name:"",
    email:"",
    subject:"",
    comment:""
}
let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

const validationForm=(form)=>{
    let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comment.trim()) {
    errors.comment = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comment.trim())) {
    errors.comment =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
}
 const formularioApi = () => {
    const {form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,}=useForm(formIni, validationForm)

  return (<>
    <h4>Formulario de envio de correo</h4>
    <form onSubmit={handleSubmit}>
        <div className="form">
            <div className="grupo">
                <input type="text" name="name" onBlur={handleBlur} onChange={handleChange} value={form.name} required/><span className="barra"></span>
                <label htmlFor="">Name</label>
                {errors.name && <p style={styles}>{errors.name}</p>}
            </div>
            <div className="grupo">
                <input type="text" name="email" onBlur={handleBlur} onChange={handleChange} value={form.email} required/><span className="barra"></span>
                <label htmlFor="">Email</label>
                {errors.email && <p style={styles}>{errors.email}</p>}
            </div>
            <div className="grupo">
                <input type="text" name="subject" onBlur={handleBlur} onChange={handleChange} value={form.subject} required/><span className="barra"></span>
                <label htmlFor="">Subject</label>
                {errors.subject && <p style={styles}>{errors.subject}</p>}
            </div>
            <div className="grupo">
                <input type="text" name="comment" onBlur={handleBlur} onChange={handleChange} value={form.comment} required/><span className="barra"></span>
                <label htmlFor="">Comment</label>
                {errors.comment && <p style={styles}>{errors.comment}</p>}
            </div>

            <button type="submit">Submit</button>
        </div>
    </form>
    </>

  )
}
export default formularioApi

