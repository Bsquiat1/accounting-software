import React from 'react';
import { connect } from 'react-redux';

const InvoiceList = ({ invoices }) => {
  return (
    <div>
      {invoices.map(invoice => (
        <div key={invoice.id}>
          <p>Amount: {invoice.amount}</p>
          <p>Due Date: {invoice.due_date}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  invoices: state.invoices.invoices
});

export default connect(mapStateToProps)(InvoiceList);
