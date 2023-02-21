const TransActions = ({ transActions }) => {
  return (
    <div>
      <h1>Transactions</h1>
      {transActions.map((t) => (
        <div
          className="transaction"
          key={t.id}
          style={{ borderRight: t.type === "expense" && "4px solid red" }}
        >
          <span>{t.desc}</span>
          <span>{t.amount} $</span>
        </div>
      ))}
    </div>
  );
};

export default TransActions;
