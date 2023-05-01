import "./App.css";

function StatProgressBar(props) {
  const { percent } = props;

  return (
    <div className="progress-bar">
      {percent > 100 ? (
        <div className="progress-bar-fill" style={{ width: `100%` }} />
      ) : (
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      )}
      <div
        className=" text-xs absolute top-[-3.5px] text-white"
        style={{ left: `calc(${percent}% - 30px)` }}
      >
        {percent}%
      </div>
    </div>
  );
}

export default StatProgressBar;
