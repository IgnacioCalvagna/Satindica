import React from "react";
import "../assets/css/form.css";
import { Input, Label, FormGroup} from "reactstrap";

const Form = () => {
  return (
    <div className="form">
    
      <form className="form" >
         <FormGroup>
          <Label>Nombre</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder=""
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefono</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder=""
            type="tel"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="email"
            type="email"
          />
        </FormGroup>
       
        <FormGroup>
        <Label>Conmentanos algo</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Que productos deseas pedir"
          />
        </FormGroup> 
        <FormGroup>
        
          <button type="submit" className="btn btn-success">Enviar mensaje</button>
        </FormGroup> 
      </form>
    </div>
  );
};

export default Form;
