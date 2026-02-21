import React, { useState } from 'react';
import { CreditCard, Download, DollarSign, Clock, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

export function PatientBilling() {
  const [selectedInvoice, setSelectedInvoice] = useState<number | null>(null);

  const currentDues = [
    {
      id: 1,
      invoiceNumber: 'INV-2025-0234',
      amount: 1500,
      dueDate: '2025-02-10',
      service: 'Physiotherapy Session (3 sessions)',
      status: 'Unpaid'
    },
    {
      id: 2,
      invoiceNumber: 'INV-2025-0235',
      amount: 1000,
      dueDate: '2025-02-15',
      service: 'Manual Therapy Consultation',
      status: 'Unpaid'
    }
  ];

  const invoices = [
    {
      id: 1,
      invoiceNumber: 'INV-2025-0234',
      date: '2025-02-01',
      service: 'Physiotherapy Session (3 sessions)',
      amount: 1500,
      status: 'Unpaid',
      dueDate: '2025-02-10'
    },
    {
      id: 2,
      invoiceNumber: 'INV-2025-0235',
      date: '2025-02-01',
      service: 'Manual Therapy Consultation',
      amount: 1000,
      status: 'Unpaid',
      dueDate: '2025-02-15'
    },
    {
      id: 3,
      invoiceNumber: 'INV-2025-0220',
      date: '2025-01-25',
      service: 'Sports Rehabilitation (5 sessions)',
      amount: 2500,
      status: 'Paid',
      paidDate: '2025-01-28'
    },
    {
      id: 4,
      invoiceNumber: 'INV-2025-0210',
      date: '2025-01-15',
      service: 'Initial Assessment',
      amount: 800,
      status: 'Paid',
      paidDate: '2025-01-16'
    },
    {
      id: 5,
      invoiceNumber: 'INV-2025-0195',
      date: '2025-01-05',
      service: 'Follow-up Session',
      amount: 600,
      status: 'Paid',
      paidDate: '2025-01-06'
    }
  ];

  const paymentHistory = [
    {
      id: 1,
      date: '2025-01-28',
      amount: 2500,
      method: 'UPI',
      transactionId: 'TXN-20250128-4567',
      service: 'Sports Rehabilitation (5 sessions)',
      status: 'Success'
    },
    {
      id: 2,
      date: '2025-01-16',
      amount: 800,
      method: 'Card',
      transactionId: 'TXN-20250116-3456',
      service: 'Initial Assessment',
      status: 'Success'
    },
    {
      id: 3,
      date: '2025-01-06',
      amount: 600,
      method: 'Cash',
      transactionId: 'CASH-20250106-2345',
      service: 'Follow-up Session',
      status: 'Success'
    }
  ];

  const totalDue = currentDues.reduce((sum, due) => sum + due.amount, 0);
  const totalPaid = paymentHistory.reduce((sum, payment) => sum + payment.amount, 0);

  const handlePayNow = (invoiceId: number) => {
    alert(`Payment gateway integration coming soon!\nInvoice ID: ${invoiceId}`);
  };

  const handleDownloadInvoice = (invoiceNumber: string) => {
    alert(`Downloading invoice ${invoiceNumber}...`);
  };

  const handleDownloadReceipt = (transactionId: string) => {
    alert(`Downloading receipt ${transactionId}...`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
      case 'Success':
        return { bg: 'transparent', text: '#10b981' };
      case 'Unpaid':
        return { bg: 'transparent', text: '#f59e0b' };
      case 'Overdue':
        return { bg: 'transparent', text: '#ef4444' };
      default:
        return { bg: 'transparent', text: '#6b7280' };
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  return (
    <div>
      {/* Summary Cards */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            height: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 8px',
            border: '1px solid #f0f0f0'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <AlertCircle size={24} color="#f59e0b" strokeWidth={2.5} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px', lineHeight: '1' }}>
              ₹{totalDue.toLocaleString()}
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
              Total Due
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            height: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 8px',
            border: '1px solid #f0f0f0'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#d1fae5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <CheckCircle size={24} color="#10b981" strokeWidth={2.5} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px', lineHeight: '1' }}>
              ₹{totalPaid.toLocaleString()}
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
              Total Paid
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            height: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 8px',
            border: '1px solid #f0f0f0'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#c1f5f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <DollarSign size={24} color="#0f8987" strokeWidth={2.5} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px', lineHeight: '1' }}>
              ₹{currentDues.length > 0 ? currentDues[0].amount.toLocaleString() : '0'}
            </div>
            <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
              Next Payment
            </div>
          </div>
        </div>
      </div>

      {/* Current Dues */}
      {currentDues.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#2d4a4a', marginBottom: '16px' }}>
            Current Dues
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {currentDues.map((due) => {
              const overdue = isOverdue(due.dueDate);
              
              return (
                <div
                  key={due.id}
                  style={{
                    backgroundColor: 'rgb(249, 250, 251)',
                    border: '1px solid rgb(229, 231, 235)',
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d4a4a', marginBottom: '8px' }}>
                        {due.service}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#6b7280' }}>
                        <Clock size={14} />
                        Due by {new Date(due.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '24px' }}>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#2d4a4a' }}>
                        ₹{due.amount.toLocaleString()}
                      </div>
                      <button
                        onClick={() => handlePayNow(due.id)}
                        style={{
                          padding: '10px 24px',
                          backgroundColor: '#0f8987',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#33a9b1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#0f8987';
                        }}
                      >
                        <CreditCard size={16} />
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Payment History */}
      <div>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#2d4a4a', marginBottom: '16px' }}>
          Payment History
        </h3>
        
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Transaction ID
                </th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Date
                </th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Service
                </th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Payment Method
                </th>
                <th style={{ padding: '16px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Amount
                </th>
                <th style={{ padding: '16px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Status
                </th>
                <th style={{ padding: '16px', textAlign: 'center', fontSize: '13px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => {
                const statusColor = getStatusColor(payment.status);
                
                return (
                  <tr key={payment.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '16px', fontSize: '14px', fontWeight: '600', color: '#2d4a4a' }}>
                      {payment.transactionId}
                    </td>
                    <td style={{ padding: '16px', fontSize: '14px', color: '#6b7280' }}>
                      {new Date(payment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '16px', fontSize: '14px', color: '#2d4a4a' }}>
                      {payment.service}
                    </td>
                    <td style={{ padding: '16px', fontSize: '14px', color: '#6b7280' }}>
                      {payment.method}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'right', fontSize: '15px', fontWeight: '600', color: '#2d4a4a' }}>
                      ₹{payment.amount.toLocaleString()}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          backgroundColor: statusColor.bg,
                          color: statusColor.text,
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      <button
                        onClick={() => handleDownloadReceipt(payment.transactionId)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#f3f4f6',
                          border: 'none',
                          borderRadius: '6px',
                          color: '#0f8987',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Download size={14} />
                        Receipt
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}