import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { useToggleView } from "../../hooks/use-toggle-view";
import { useToggleState } from "../../hooks/use-toggle-state";
import { toggleListed } from "../../store/ui/actions";

import { ToggleButton } from "../toggle-button";
import { AddCarModal } from "../add-car";
import Button from "../button";
import Card from "../card";
import NoData from "../no-data";

import "./style.scss";

export function Cars({ data }) {
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
  const dispatch = useDispatch();
  const statusListed = useSelector((state) => state.ui.listed);
  const createToggleView = useToggleView();
  const createAddModalState = useToggleState();
  const [search, setNewSearch] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const onShowListed = () => {
    if (!statusListed) {
      dispatch(toggleListed(true));
      notify("There are displaying listed Cars now!");
    }
  };

  const onShowUnlisted = () => {
    if (statusListed) {
      dispatch(toggleListed(false));
      notify("There are displaying unlisted Cars now!");
    }
  };

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const handleSortToggle = (e) => {
    setSortDirection(e.target.value);
  };

  const dataToRender = useMemo(() => {
    if (!data) {
      return [];
    }
    const filtered = !search
      ? data
      : data.filter((car) =>
          car.car_name.toLowerCase().includes(search.toLowerCase())
        );
    if (sortDirection === "asc") {
      return [...filtered].sort((a, b) =>
        a.car_name.toLowerCase() > b.car_name.toLowerCase() ? 1 : -1
      );
    }
    if (sortDirection === "desc") {
      return [...filtered].sort((a, b) =>
        a.car_name.toLowerCase() > b.car_name.toLowerCase() ? -1 : 1
      );
    }
    return filtered;
  }, [data, search, sortDirection]);

  return (
    <div className="cars-view">
      <ToastContainer />
      <div className="buttons-container">
        <div className="head">
          <div className="title">Cars</div>
          <Button onClick={createAddModalState.onOn}>+ Add New</Button>
        </div>
        <div className="sub-head">
          <div className="search-sorting">
            <input
              className="search-input"
              type="text"
              placeholder="Search by car name"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <div className="buttons-group">
            <div className="sort-box">
              Sorting by Name
              <select name="sorting" id="sorting" onChange={handleSortToggle}>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
              </select>
            </div>
            <div className="status-group">
              <span>Status:</span>
              <div className="status-group__buttons">
                <label
                  onClick={onShowListed}
                  className={statusListed ? "active" : ""}
                >
                  List
                </label>
                <label
                  onClick={onShowUnlisted}
                  className={!statusListed ? "active" : ""}
                >
                  Unlist
                </label>
              </div>
            </div>
            <div className="view-mode__box">
              <span className="view-mode">{createToggleView.view}</span>
              <span className="view">View</span>{" "}
              <ToggleButton onToggle={createToggleView.onToggle} />
            </div>
          </div>
        </div>
      </div>
      {dataToRender.length === 0 && <NoData>No Data</NoData>}
      <div className={`car-list__container ${createToggleView.view}`}>
        {dataToRender.map((car, index) => (
          <Card
            key={index}
            id={car.id}
            carName={car.car_name}
            modalName={car.modal_name}
            modalYear={car.modal_year}
            imageUrl={car.image_url}
            price={car.price}
            mileage={car.mileage}
            stockNumber={car.stock_number}
            status={car.status}
            type={createToggleView.view === "list" ? "horizontal" : "vertical"}
          />
        ))}
      </div>
      <AddCarModal
        modalIsOpen={createAddModalState.on}
        closeModal={createAddModalState.onOff}
      />
    </div>
  );
}

export default Cars;
