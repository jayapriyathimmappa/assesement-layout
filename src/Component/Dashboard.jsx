import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "./Dashboard.css";
import { Card, Col, Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faGreaterThan,
  faBurger,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  { name: "5", uv: 3000 },
  { name: "9", uv: 2000 },
  { name: "11", uv: 2780 },
  { name: "13", uv: 1890 },
  { name: "15", uv: 2390 },
  { name: "17", uv: 3490 },
  { name: "19", uv: 4000 },
  { name: "21", uv: 3000 },
  { name: "23", uv: 2000 },
  { name: "25", uv: 2780 },
  { name: "27", uv: 1890 },
];
const Dashboard = ({ percentage }) => {
  return (
    <>
      <Container fluid className="container-bashboard">
        <div className="full-div">
          <h5 className="text-light">Dashboard</h5>
          <div className="card-parent">
            <div className="card-parent1">
              <div className="bg-dark text-light card d-flex flex-wrap">
                <span className="bg-primary">
                  <i class="bi bi-basket-fill"></i>
                </span>

                <p>Total Orders</p>
                <h1>75</h1>
              </div>
              <div className="bg-dark text-light font  card">
                <span className="bg-success">
                  <i class="bi bi-handbag-fill"></i>
                </span>

                <p>Total Delivered</p>
                <h2>70</h2>
              </div>
              <div className="bg-dark text-light  card">
                <span className="bg-danger">
                  <i class="bi bi-handbag-fill"></i>
                </span>

                <p>Total Cancelled</p>
                <h2>05</h2>
              </div>
              <div className="bg-dark text-light  card">
                <span className="bg-pink">
                  <i class="bi bi-currency-dollar"></i>
                </span>

                <p>Total Revenue</p>
                <h2>$12k</h2>
              </div>
            </div>
            <div className="parent-card">
              <div className="bg-dark text-light card1 d-flex justify-content-around">
                <div className="">
                  <p>Net Profit</p>
                  <h2>$6759.25</h2>
                </div>

                <div>
                  <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        textColor: "#ffffff",
                        pathColor: "#8884d8",
                        trailColor: "#1E1E2F",
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="parent-activity d-flex justify-content-between align-items-center h-50">
            <div className="activity bg-dark h-50 ">
              <div className="bg-dark text-light ">
                <h6>Activity</h6>
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="goals text-light bg-dark h-50">
              <div className="goals-icon  d-flex justify-content-between text-light">
                <div>
                  <span className="bg-danger">
                    <FontAwesomeIcon icon={faBullseye} />
                  </span>
                  <span>Goals</span>
                </div>
                <div>
                  <span className="greater-icon">
                    <FontAwesomeIcon icon={faGreaterThan} />
                  </span>
                </div>
              </div>
              <div className=" goals-icon d-flex justify-content-between text-light">
                <div>
                  <span className="bg-success">
                    <FontAwesomeIcon icon={faBurger} />
                  </span>
                  <span>Popular dish</span>
                </div>
                <div>
                  <span className="greater-icon ">
                    <FontAwesomeIcon icon={faGreaterThan} />
                  </span>
                </div>
              </div>
              <div className=" goals-icon d-flex justify-content-between text-light">
                <div>
                  <span className="bg-primary">
                    <FontAwesomeIcon icon={faBowlFood} />
                  </span>
                  <span>Menus</span>
                </div>
                <div>
                  <span className="greater-icon">
                    <FontAwesomeIcon icon={faGreaterThan} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className=" last-table">
            <div className="table-parent bg-dark h-50 ">
              <h6 className="text-light">Recent Orders</h6>
              <Table variant="dark">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Order No</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wade Warren</td>
                    <td>15478256</td>
                    <td>$124.00</td>
                    <td>
                      {" "}
                      <button className="bg-success btn p-0">Delivered</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Jane Cooper</td>
                    <td>48965786</td>
                    <td>$365.02</td>
                    <td>
                      {" "}
                      <button className="bg-success btn p-0">Delivered</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Guy Hawkins</td>
                    <td>78958215</td>
                    <td>$45.88</td>
                    <td>
                      {" "}
                      <button className="bg-danger  btn p-0">Cancelled</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Kristin Waston</td>
                    <td>20965732</td>
                    <td>$65.00</td>
                    <td>
                      {" "}
                      <button className="btn bg-danger p-0">pending</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Cody Fisher</td>
                    <td>95715620</td>
                    <td>$545.00</td>
                    <td>
                      {" "}
                      <button className="bg-success btn p-0">Deliverd</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Savannah</td>
                    <td>78514568</td>
                    <td>$128.20</td>
                    <td>
                      {" "}
                      <button className="bg-success btn p-0">Delivered</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="bg-dark text-light customer-feed ">
              <div className="last-content">
                <h6>Customer's Feedback</h6>
                <img src="" alt="" />
                <p>Jenney Wiston</p>
                <p>
                  The food was execellent and so was the service.i had the
                  mushroom risotto with scallops which was awesome.i had a
                  burger over greens (glutten-free) which also very good.they
                  were very conscientious about glutten allergies
                </p>
              </div>

              <div className="last-content">
                <p>Dianne Russell</p>

                <p>
                  We enjoyed the eggs Benedict serverd on homemade focaccia
                  bread and hot coffee.perfect service.
                </p>
              </div>

              <div className="last-content">
                <p>Devon Lane</p>

                <p>
                  Normally wings are wings but theirs are lean meaty and tender
                  and
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </Container>
    </>
  );
};

export default Dashboard;
