import React from 'react';

const BranchTransferStatus = ({status}) => {

    return (
        <div>
            { status === 1 ? <div>Transfer Create</div> : status === 2 ? <div>Transfer Cancel</div>: status === 3 ? <div> Transfer Received</div>:  status === 4 ? <div> Transfer Reject</div>: null}
            
        </div>
    );
};

export default BranchTransferStatus;