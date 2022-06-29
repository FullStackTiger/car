import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { addCarList } from "../../store/cars/actions";
import { useForm } from "react-hook-form";
import "./style.scss";

Modal.setAppElement("#root");
export function AddCarModal({ modalIsOpen, closeModal }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = (str) =>
    toast.info(str, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onSubmit = (data) => {
    dispatch(addCarList(data));
    closeModal();
    notify(`The ${data.car_name} car has been added!`);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Add Car Modal"
      className="add-car__modal"
      overlayClassName="add-car__overlay"
    >
      <div className="add-car__title">
        <div>Add Car</div>
        <button onClick={closeModal}>X</button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="add-car__form">
        <div className="field">
          <label>Car Name:</label>
          <input
            {...register("car_name", {
              required: "Please enter a car name",
            })}
          />
          {errors.car_name && (
            <span className="error">{errors.car_name.message}</span>
          )}
        </div>

        <div className="field">
          <label>Modal Name:</label>
          <input
            {...register("modal_name", {
              required: "Please enter a modal name",
            })}
          />
          {errors.modal_name && (
            <span className="error">{errors.modal_name.message}</span>
          )}
        </div>
        <div className="field">
          <label>Car Price:</label>
          <input
            {...register("price", {
              required: "Please enter a price",
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Please enter a number",
              },
            })}
          />
          {errors.price && (
            <span className="error">{errors.price.message}</span>
          )}
        </div>
        <div className="field">
          <label>Modal Year:</label>
          <input
            {...register("modal_year", {
              required: "Please enter a modal year",
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Please enter a number",
              },
            })}
          />
          {errors.modal_year && (
            <span className="error">{errors.modal_year.message}</span>
          )}
        </div>

        <div className="field">
          <label>Mileage:</label>
          <input
            {...register("mileage", {
              required: "Please enter a mileage",
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Please enter a number",
              },
            })}
          />
          {errors.mileage && (
            <span className="error">{errors.mileage.message}</span>
          )}
        </div>

        <div className="field">
          <label>Image URL:</label>
          <input
            {...register("image_url", {
              required: "Please enter a image url",
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))$/,
                message: "Please enter a valid image URL",
              },
            })}
          />
          {errors.image_url && (
            <span className="error">{errors.image_url.message}</span>
          )}
        </div>

        <div className="field">
          <label>Stock Number:</label>
          <input
            {...register("stock_number", {
              required: "Please enter a stock number",
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Please enter a number",
              },
            })}
          />
          {errors.stock_number && (
            <span className="error">{errors.stock_number.message}</span>
          )}
        </div>
        <input type="submit" />
      </form>
    </Modal>
  );
}

export default AddCarModal;
