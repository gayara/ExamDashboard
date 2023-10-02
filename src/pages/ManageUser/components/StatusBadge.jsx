import React from 'react';

function StatusBadge(props) {
    const { status } = props;

    const getStatusText = (status) => {
        switch (status) {
            case 0:
                return "INACTIVE";
            case 1:
                return "ACTIVE";
            case 2:
                return "SUSPENDED";
            case 3:
                return "DEACTIVATED";
            default:
                return "UNKNOWN STATUS";
        }
    };

    const getStatusVariant = (status) => {
        switch (status) {
            case 0:
                return "danger"; // For INACTIVE status
            case 1:
                return "success"; // For ACTIVE status
            case 2:
                return "warning"; // For SUSPENDED status
            case 3:
                return "secondary"; // For DEACTIVATED status
            default:
                return "light"; // Default variant for unknown status
        }
    };

    return (
        <span className={`badge bg-${getStatusVariant(status)}`}>{getStatusText(status)}</span>
    );
}

export default StatusBadge;