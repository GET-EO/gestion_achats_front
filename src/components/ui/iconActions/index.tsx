import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "./IconAction.css";

const ActionIcons: React.FC = () => {
  return (
    <div className="icons-container">
      <FaEye className="icon" title="Voir" size={20}/>
      <FaEdit className="icon" title="Éditer" size={20}/>
      <FaTrash className="icon delete" title="Supprimer" size={20}/>
    </div>
  );
};

export default ActionIcons;
