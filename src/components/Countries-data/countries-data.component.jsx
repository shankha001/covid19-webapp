import React from 'react';
import './countries-data.styles.scss';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { TableBody, Table } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class Countries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerData: [
        {
          country: 'Country',
          newConfirmed: 'New Confirmed',
          newDeaths: ' New Deaths',
          newRecovered: ' New Recovered',
          totalConfirmed: 'Total Confirmed',
          totalDeaths: 'Total Death',
          totalRecovered: 'Total Recovered',
          countryCode: 'table',
        },
      ],
      countryData: [],
      globalData: [],
    };
  }
  render() {
    for (let i in this.props) {
      this.state.countryData.push(this.props[i]);
    }

    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);

    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        textAlign: 'center',
        borderRight: '1px solid grey',
        position: 'sticky',
      },
      body: {
        fontSize: 15,
        color: theme.palette.common.white,
        textAlign: 'center',
        borderRight: '1px solid black',
        borderBottom: '1px solid black',
      },
    }))(TableCell);

    return (
      <Grid container justify="center">
        <Table stickyHeader aria-label="sticky table">
          {this.state.headerData.map(
            ({
              countryCode,
              country,
              newConfirmed,
              newDeaths,
              newRecovered,
              totalConfirmed,
              totalDeaths,
              totalRecovered,
            }) => (
              <TableHead key={countryCode}>
                <StyledTableRow>
                  <StyledTableCell className="table-countries-country-header">
                    {country}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-confirmed-header">
                    {newConfirmed}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-deaths-header">
                    {newDeaths}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-recovered-header">
                    {newRecovered}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-confirmed-header">
                    {totalConfirmed}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-deaths-header">
                    {totalDeaths}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-recovered-header">
                    {totalRecovered}
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
            )
          )}
          {this.state.countryData.map(
            ({
              CountryCode,
              Country,
              NewConfirmed,
              NewDeaths,
              NewRecovered,
              TotalConfirmed,
              TotalDeaths,
              TotalRecovered,
            }) => (
              <TableBody key={CountryCode}>
                <StyledTableRow className="table-countries">
                  <StyledTableCell className="table-countries-country">
                    {Country}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-confirmed">
                    {NewConfirmed}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-deaths">
                    {NewDeaths}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-recovered">
                    {NewRecovered}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-confirmed">
                    {TotalConfirmed}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-deaths">
                    {TotalDeaths}
                  </StyledTableCell>
                  <StyledTableCell className="table-countries-recovered">
                    {TotalRecovered}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            )
          )}
        </Table>
      </Grid>
    );
  }
}
export default Countries;
