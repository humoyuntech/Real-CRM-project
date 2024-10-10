/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import GenericTable from "../../Generics/Table";
import {Container, Action} from "./style";
import Breadcrumb from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import GenericSelect from "../../Generics/Select";
import AllLidsModal from "./modal";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment/moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export const FirstClass  = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModal] = useState(false);
  const [modalProps, setModalProps] = useState({})

  const onEdit = (e, res) => {
    e.stopPropagation();
    setModal(!modalOpen);
    setModalProps(res);
  };

  const onMove = (e) => {
    e.stopPropagation();
  };

 const headCells = [
    { id: "name", label: "O'quvchining ismi" },
    { id: "group", label: "Guruh / Fan" },
    { id: "date", label: "Dars kuni va vaqti" },
    { id: "addedDate", label: "Qo’shilgan sana" },
    { id: "admin", label: "Moderator" },
    {
      id: "action",
      label: "",
      render: (res) => (
        <Action>
          <Action.Edit onClick={(e) => onEdit(e, res)} />
          {/* <Action.Move onClick={onMove} /> */}
        </Action>
      ),
    },
  ];

  let rows = [
    {
      id: 1,
      name: "Webbrain",
      group: "Frontend",
      days: "toq kunlari",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
      level: "Beginer",
    },
    {
      id: 2,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      days: "toq kunlari",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
      level: "Junior",
    },
    {
      id: 3,
      name: "Webbrain",
      group: "Frontend",
      days: "toq kunlari",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      level: "Advanced",
      admin: "Webbrain Admin",
    },
  ];

  const data1 = [
    {value: "uzbek", title: "Uzbek"},
    {value: "arabic", title: "Arabic"},
    {value: "turkish", title: "Turkish"},
    {value: "english", title: "English"},
    {value: "russian", title: "Russian"},
    {value: "german", title: "German"},
  ];

  const onToggleModal = () =>{
    setModal(!modalOpen);
    setModalProps(null);
  }

  const onSave = () =>{
    console.log("onSave");
    
}

  return (
    <Container>
      <AllLidsModal data={modalProps} open={modalOpen} onClose={onToggleModal} onSave={onSave}/>
      <Breadcrumb>
          <GenericButton type="import" onClick={() => setOpen(!open)}>Import</GenericButton>
          <GenericButton type="filter" onClick={() => setOpen(!open)}>Filter</GenericButton>    
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={rows}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={["year", "month", "day"]}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>

              <GenericSelect data={data1} />
              <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};



export default FirstClass;