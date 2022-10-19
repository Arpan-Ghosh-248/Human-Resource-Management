import { Box, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useHistory } from 'react-router';
import { getValueOption } from '../../utils/common';
import {leadStatusOption} from '../../constants';
import { getDateFormat } from '../../utils/common';
import { StyledTableCell, StyledTableRow } from '../common/StyledTable';
import CustomButton from '../form/CustomButton';
import CustomPagination from '../form/CustomPagination';

export default function LeadsTable(props) {
    const { leads, page, handlePageChange, isLoading } = props;
    const totalPage = leads ? leads.total_pages : 0;
    const perPage = leads ? leads.per_page : 0;
    const count = leads ? leads.count : 0;
    const hasLeads = leads && leads.results && !!leads.results.length;
    const history = useHistory();


    return (
        <>
            {isLoading ? (
                <Box sx={{ display: 'flex', margin: '18px', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : hasLeads ? (
                <TableContainer sx={{ mt: 3 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">No.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">DOB</StyledTableCell>
                                <StyledTableCell align="center">Phone</StyledTableCell>
                                <StyledTableCell align="center">Curent City</StyledTableCell>
                                <StyledTableCell align="center">College</StyledTableCell>
                                <StyledTableCell align="center">Degree</StyledTableCell>
                                <StyledTableCell align="center">Branch</StyledTableCell>
                                <StyledTableCell align="center">Year of Graduation</StyledTableCell>
                                <StyledTableCell align="center">Sources</StyledTableCell>
                                <StyledTableCell align="center"> Status </StyledTableCell>

                                <StyledTableCell align="center"> Edit </StyledTableCell>
                                

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leads.results.map(lead => (
                                <StyledTableRow key={lead.id}>
                                    <StyledTableCell
                                        sx="cursor:pointer"
                                        align="center"
                                        onClick={() =>
                                            history.push(`/leads/edit/${lead.id}`, {
                                                id: lead.id
                                            })
                                        }
                                    >
                                        {lead.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{lead.name}</StyledTableCell>
                                    <StyledTableCell align="center">{lead.email}</StyledTableCell>
                                    <StyledTableCell align="center">{getDateFormat(lead.date_of_birth)}</StyledTableCell>
                                    <StyledTableCell align="center">{lead.phone}</StyledTableCell>
                                    <StyledTableCell align="center">{lead.current_city}</StyledTableCell>
                                    <StyledTableCell align="center">{lead.college}</StyledTableCell>
                                    <StyledTableCell align="center">{lead.degree}</StyledTableCell>
                                    <StyledTableCell align="center">{lead.branch}</StyledTableCell>

                                    <StyledTableCell align="center">{lead.year_of_graduation}</StyledTableCell>
                                    <StyledTableCell align="center">{lead.sources}</StyledTableCell>
                                    <StyledTableCell align="center">
                                                {getValueOption(leadStatusOption, lead.status)}
                                            </StyledTableCell>



                                    {/* <StyledTableCell align="center">{lead.updated_by && lead.updated_by.user_name}</StyledTableCell> */}






                                    <StyledTableCell align="center">
                                        <CustomButton
                                            onClick={() =>
                                                history.push(`/leads/edit/${lead.id}`, {
                                                    id: lead.id
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
