import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "./IconAction.css";

const ActionIcons: React.FC = () => {
  return (
    <div className="icons-container">
      <FaEye className="icon" title="Voir" />
      <FaEdit className="icon" title="Éditer" />
      <FaTrash className="icon delete" title="Supprimer" />
    </div>
  );
};

export default ActionIcons;
