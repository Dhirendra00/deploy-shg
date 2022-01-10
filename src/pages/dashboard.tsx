import { MainLayout } from "@/layout/MainLayout";
import withAuth from "@/shared/withAuth";

const Dashboard = () => {
  return <MainLayout>Dashboard</MainLayout>;
};

export default withAuth(Dashboard);
