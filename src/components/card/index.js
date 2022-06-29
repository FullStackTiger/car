import { useToggleState } from "../../hooks/use-toggle-state";
import { DeleteCarModal } from "../delete-car";
import { EditCarModal } from "../edit-car";
import Button from "../button";
import "./style.scss";

export function Card({
  id,
  carName,
  modalName,
  modalYear,
  imageUrl,
  price,
  mileage,
  stockNumber,
  status,
  type = "horizontal",
}) {
  const createEditModalState = useToggleState();
  const createDeleteModalState = useToggleState();

  return (
    <div className="card">
      <div className={type}>
        <div className="card-image__box">
          {imageUrl && (
            <img src={imageUrl} alt={carName} className="card-image" />
          )}
        </div>
        <div className="card-box">
          <div className="card-car__name">
            <span>{carName}</span>
          </div>
          <div className="card-modal__name">
            Modal Name: <span>{modalName}</span>
          </div>
          <div className="card_modal_year">
            Modal Year: <span>{modalYear}</span>
          </div>
          <div className="card-price">
            Price: <span>{price}</span>
          </div>
          <div className="card-mileage">
            Mileage: <span>{mileage}</span>
          </div>
        </div>
        <div className="button-box">
          <Button onClick={createEditModalState.onOn}>Edit</Button>
          <Button onClick={createDeleteModalState.onOn}>Delete</Button>
        </div>
      </div>
      <EditCarModal
        id={id}
        carName={carName}
        modalName={modalName}
        modalYear={modalYear}
        imageUrl={imageUrl}
        price={price}
        mileage={mileage}
        stockNumber={stockNumber}
        status={status}
        modalIsOpen={createEditModalState.on}
        closeModal={createEditModalState.onOff}
      />
      <DeleteCarModal
        id={id}
        carName={carName}
        modalIsOpen={createDeleteModalState.on}
        closeModal={createDeleteModalState.onOff}
      />
    </div>
  );
}

export default Card;
