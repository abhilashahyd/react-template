import QCard from "../../components/BaseUI/QCard/QCard";
import "./style.scss";

const Dashboard = () => {
  return (
    <div className="content dashboard container">
      <div className="row">
        <div className="left-panel col col-lg-3 col-sm-12">
          <QCard>
                <h6 className="text-uppercase mt-0">
                  Active Users{" "}
                  <i className="uil uil-users-alt fa fa-users float-end"></i>
                </h6>
                <h2 className="my-2" id="active-users-count">
                  564
                </h2>
                <p className="mb-0 text-muted">
                  <span className="text-success me-2">
                    <span className="mdi mdi-arrow-up-bold"></span> 5.27%
                  </span>
                  <span className="text-nowrap"> Since last month</span>
                </p>
          </QCard>
          <QCard>
                <h6 className="text-uppercase mt-0">
                  Views per minute{" "}
                  <i className="uil uil-window-restore fa fa-street-view float-end"></i>
                </h6>
                <h2 className="my-2" id="active-views-count">
                  256
                </h2>
                <p className="mb-0 text-muted">
                  <span className="text-danger me-2">
                    <span className="mdi mdi-arrow-down-bold"></span> 1.08%
                  </span>
                  <span className="text-nowrap">Since previous week</span>
                </p>
          </QCard>
        </div>
        <div className="right-panel col col-lg-9">
          <QCard title={"Analysis"} subtitle={"information"}>
            <p>
              As Peep Laja points out, one of the most common money leaks on
              websites is incompatibility with certain browsers. He suggests
              creating a custom report showing conversions per browser and
              segmenting the report by device (mobile, desktop, tablet) so as
              not to skew your numbers. Search Engine Watch links to a similar
              pre-made report in their list of time-saving custom reports. If
              you’re not selling products on your site you can swap out Revenue
              and Unique Purchases for conversion and goal value-related
              metrics. And don’t forget to segment by device!
            </p>
          </QCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
