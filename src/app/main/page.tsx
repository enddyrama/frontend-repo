
import { getAllFirebaseUser } from "@/apis/user/user";
import RemoteConfigComponent from "@/components/Main/RemoteConfigComponent";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, } from "@mui/material";
import { GetServerSideProps } from "next";
import Link from "next/link";





export default async function MainPage() {
  // const response = await getAllFirebaseUser()
  // const listUser = response?.result?.users || []


  return (
    <div style={{}}>
      <TableContainer component={Paper}>
        <RemoteConfigComponent />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Last Sign In</TableCell>
              <TableCell align="right">Display Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {listUser.map((row: any, i: number) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.metadata.lastSignInTime}</TableCell>
                <TableCell align="right">{row.displayName}</TableCell>
                <TableCell align="right">
                  <Link href={`/main/${row.uid}`}>
                    <Button variant="contained">Update</Button>
                  </Link>
                </TableCell>

              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
