import { Box, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useHistory } from 'react-router';
import { adminRoleOptions } from '../../constants';
import { getDateFormat, getValueOption } from '../../utils/common';
import { StyledTableCell, StyledTableRow } from '../common/StyledTable';
import CustomButton from '../form/CustomButton';
import CustomPagination from '../form/CustomPagination';

export default function AdminsTable(props) {
    const history = useHistory();
    const { admins, page, handlePageChange, isLoading } = props;
    const totalPage = admins ? admins.total_pages : 0;
    const perPage = admins ? admins.per_page : 0;
    const count = admins ? admins.count : 0;
    const hasAdmins = admins && admins.results && !!admins.results.length;

    console.log('admins', admins);

    return (
        <>
            {isLoading ? (
                <Box sx={{ display: 'flex', margin: '18px', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : hasAdmins ? (
                <TableContainer sx={{ mt: 3 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Role</StyledTableCell>
                                <StyledTableCell align="center">Employee ID</StyledTableCell>
                                <StyledTableCell align="center">Created</StyledTableCell>
                                <StyledTableCell align="center">Edit</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {admins.results.map((user, index) => (
                                <StyledTableRow key={user.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {perPage * (page - 1) + (1 + index)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{user.user_name}</StyledTableCell>
                                    <StyledTableCell align="center">{user.email}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {getValueOption(adminRoleOptions, user.role)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {user.employee_id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {getDateFormat(user.created_at)}
                                    </StyledTableCell>

                                    <StyledTableCell align="center">
                                        <CustomButton
                                            onClick={() =>
                                                history.push(`/admins/edit/${user.id}`, {
                                                    id: user.id
                                                })
                                            }
                                            text="Edit"
                                            variant="outlined"
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <CustomPagination
                        page={page}
                        handlePageChange={handlePageChange}
                        totalPage={totalPage}
                        count={count}
                        perPage={perPage}
                    />
                </TableContainer>
            ) : (
                <h3>NO DATA</h3>
            )}
        </>
    );
}
