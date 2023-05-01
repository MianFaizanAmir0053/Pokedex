import StatProgressBar from "./StatProgressBar";

function Stats({ stats }) {
  return (
    <div className=" w-[50%]  h-[100%]  text-slate-600 text-3xl">
      <div className="p-8">Stats</div>
      <div className="">
        {stats.map((stat) => (
          <div
            key={Math.random()}
            className="px-4 py-4 my-4 text-sm w-[100%]  bg-white rounded-xl shadow-md"
          >
            {stat.stat.name}
            <div>
              <StatProgressBar percent={stat.base_stat} />
            </div>
            <div className="text-sm">
              {stat.effort === 0
                ? "No Effort"
                : stat.effort === 1
                ? "Little Effort"
                : stat.effort === 2
                ? "Medium Effort"
                : "High Effort"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
