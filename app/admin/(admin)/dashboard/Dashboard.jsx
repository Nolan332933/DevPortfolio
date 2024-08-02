const Dashboard = ({ dashboardData }) => {
  return (
    <div className="flex justify-between gap-2 mt-10">
      <div className="p-3 h-32 shadow-md shadow-slate-500 w-1/4">
        <h1 className="text-2xl"> All Post </h1>
        {dashboardData.postCount} Posts
      </div>
      <div className="p-3 h-32 shadow-md shadow-slate-500 w-1/4">
        <h1 className="text-2xl"> All Categories </h1>
        {dashboardData.categoryCount} Categories
      </div>
      <div className="p-3 h-32 shadow-md shadow-slate-500 w-1/4">
        <h1 className="text-2xl"> All Post </h1>
        {dashboardData.commentCount} Comments
      </div>
      <div className="p-3 h-32 shadow-md shadow-slate-500 w-1/4">
        <h1 className="text-2xl"> All Post </h1>
        {dashboardData.postCount} Posts
      </div>
    </div>
  );
};

export default Dashboard;
