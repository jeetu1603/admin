import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">John Doe</span>
            </td>
            <td className="widgetLgDate">27 Dec 2022</td>
            <td className="widgetLgAmount">₹122</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">John Doe</span>
            </td>
            <td className="widgetLgDate">27 Dec 2022</td>
            <td className="widgetLgAmount">₹122</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">John Doe</span>
            </td>
            <td className="widgetLgDate">27 Dec 2022</td>
            <td className="widgetLgAmount">₹122</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
