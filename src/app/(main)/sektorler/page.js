import React from "react";
import SectorList from "@/components/common/SectorList";
import { getSectorList } from "@/components/data/MainStockApi";

export default function SectorsPage() {
  const sectors = React.use(getSectorList());

  return (
    <div className="col-span-12 px-16 pb-8">
      <SectorList sectors={sectors} />
    </div>
  );
}
