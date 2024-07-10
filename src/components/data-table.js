import { DataGrid } from "@mui/x-data-grid";

const pageSizeOptions = [5, 10, 15, 20, 25];

export default function DataTable({ columns, data, getRowId, ref }) {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        ref={ref}
        rows={data}
        sx={{ background: "white" }}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 },
          },
        }}
        pageSizeOptions={pageSizeOptions}
        getRowId={getRowId}
      />
    </div>
  );
}
