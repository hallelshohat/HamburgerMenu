import './AmountChip.css';

interface Props {
    amount: number;
}

export const AmountChip: React.FC<Props> = ({ amount }) => {
    if (amount === 0) {
        return null;
    }
    return <div key={amount} className="amount-chip">
        {amount}
    </div>
}