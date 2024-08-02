"use client";
import { Breadcrumb, Button, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import TableLoading from "../../components/loading/TableLoading";
import { GeneralSettingContext } from "@/context/GeneralSettingContext";
import TableData from "./TableData";

const GeneralSetting = () => {
  const [openModal, setOpenModal] = useState(false);
  const { state, getAllGenerals } = useContext(GeneralSettingContext);

  useEffect(() => {
    getAllGenerals();
  }, []);

  return (
    <div className="my-3">
      {/* breadcrumb */}
      <div className="my-3 p-3 bg-slate-300">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/admin/dashboard" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#"> Posts </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* subheader  */}
      <div className="flex">
        <div className="w-4/5">{/* Search  */}</div>
        <div className="w-1/5 flex justify-end">
          {/* create button  */}
          <Button type="button" size="sm" onClick={() => setOpenModal(true)}>
            Create
          </Button>
        </div>
      </div>
      {/* table  */}
      <div className="overflow-x-auto my-5">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell> No </Table.HeadCell>
            <Table.HeadCell> Name </Table.HeadCell>
            <Table.HeadCell> Type </Table.HeadCell>
            <Table.HeadCell> Value </Table.HeadCell>
            <Table.HeadCell> Date </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {!state.loading ? (
            <Table.Body className="divide-y">
              {state.generals.length > 0 &&
                state.generals.map((item, index) => (
                  <TableData item={item} key={index} index={index} />
                ))}
            </Table.Body>
          ) : (
            <TableLoading />
          )}
        </Table>
      </div>
    </div>
  );
};

export default GeneralSetting;
