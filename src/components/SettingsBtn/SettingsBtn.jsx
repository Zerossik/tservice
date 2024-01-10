import { useState } from "react";
import PropTypes from "prop-types";
// style
import { Button, List, Item } from "./SettingsBtn.styled";
// componrnts
import { Modal } from "../Modal";

export const SettingsBtn = ({ icon, forms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Button type="button" onClick={toggleModal}>
        {icon}
      </Button>

      {isModalOpen && (
        <Modal
          title="Налаштування"
          onToggleModal={toggleModal}
          styleModal={{ maxWidth: "480px" }}
        >
          <List>
            {forms.map(({ id, form }) => (
              <Item key={id}>{form}</Item>
            ))}
          </List>
        </Modal>
      )}
    </>
  );
};

SettingsBtn.propTypes = {
  icon: PropTypes.node.isRequired,
  forms: PropTypes.array.isRequired,
};
