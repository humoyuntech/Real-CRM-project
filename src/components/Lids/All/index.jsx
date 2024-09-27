import { useState } from "react";
import GenericTable from "../../Generics/Table";
import {Container, Action} from "./style";
import Breadcrumb from "../../Generics/BreadCrumb";
import GenericButton from "../../Generics/Button";
import GenericSelect from "../../Generics/Select";

export const AllLids = () => {
  const [open, setOpen] = useState(false);

  const onEdit = (e) => {
    e.stopPropagation();
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
      render: (
        <Action>
          <Action.Edit onClick={onEdit} />
          <Action.Move onClick={onMove} />
        </Action>
      ),
    },
  ];

  let rows = [
    {
      id: 1,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 2,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 3,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
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
  return (
    <Container>
      <Breadcrumb>
          <GenericButton type="import" onClick={() => setOpen(!open)}>Import</GenericButton>
          <GenericButton type="filter" onClick={() => setOpen(!open)}>Filter</GenericButton>
          <GenericButton type="add" onClick={() => setOpen(!open)}>Buyurtma berish</GenericButton>

          {/* <GenericButton type="primary" onClick={() => setOpen(!open)}>primary</GenericButton>
          <GenericButton type="save" onClick={() => setOpen(!open)}>save</GenericButton>
          <GenericButton type="delete" onClick={() => setOpen(!open)}>delete</GenericButton> */}
         
      </Breadcrumb>
      <GenericTable open={open} headCells={headCells} rows={rows}>
              {/* <TableCell sx={{ border: 0 }}>TEST</TableCell> */}
              <GenericSelect data={data1} />
              <GenericSelect data={data1} />
              <GenericSelect data={data1} />
              <GenericSelect data={data1} />
              <GenericSelect data={data1} />
              <GenericSelect data={data1} />
      </GenericTable>
    </Container>
  );
};

