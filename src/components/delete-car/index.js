import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { removeCarList } from "../../store/cars/actions";
import Button from "../button";
import "./style.scss";

Modal.setAppElement("#root");
export function DeleteCarModal({ id, modalIsOpen, closeModal, carName }) {
  const dispatch = useDispatch();

  const notify = (str) =>
    toast.warn(str, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onDeleteCar = () => {
    dispatch(removeCarList({ id }));
    closeModal();
    notify(`The ${carName} car has been removed!`);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Add Car Modal"
      className="delete-car__modal"
      overlayClassName="delete-car__overlay"
    >
      <div className="delete-car__title">
        <div>Delete Car</div>
        <button onClick={closeModal}>X</button>
      </div>
      <div className="delete-car__description">
        Are you sure you want to remove the <b>{carName}</b> car?
      </div>
      <Button onClick={onDeleteCar}>Delete</Button>
    </Modal>
  );
}

export default DeleteCarModal;
