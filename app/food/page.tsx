import "./food.css"

export default function FoodService() {
  // In a real app, this would come from an API
  const orders = [
    { id: 1, room: 204, items: ["Club Sandwich", "French Fries", "Coca Cola"], status: "preparing", time: "10:25 AM" },
    { id: 2, room: 118, items: ["Caesar Sala  'Coca Cola"], status: "preparing", time: "10:25 AM" },
    { id: 2, room: 118, items: ["Caesar Salad", "Grilled Chicken", "Iced Tea"], status: "delivered", time: "10:05 AM" },
    { id: 3, room: 305, items: ["Cheeseburger", "Onion Rings", "Milkshake"], status: "in-transit", time: "10:30 AM" },
    { id: 4, room: 412, items: ["Spaghetti Bolognese", "Garlic Bread", "Wine"], status: "new", time: "10:40 AM" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <span className="badge badge-primary">New</span>
      case "preparing":
        return <span className="badge badge-warning">Preparing</span>
      case "in-transit":
        return <span className="badge badge-info">In Transit</span>
      case "delivered":
        return <span className="badge badge-success">Delivered</span>
      default:
        return <span className="badge">{status}</span>
    }
  }

  return (
    <div className="food-service">
      <h1>Food & Room Service</h1>

      <div className="order-tabs">
        <button className="tab-btn active">All Orders</button>
        <button className="tab-btn">New</button>
        <button className="tab-btn">Preparing</button>
        <button className="tab-btn">In Transit</button>
        <button className="tab-btn">Delivered</button>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              {getStatusBadge(order.status)}
            </div>
            <div className="order-details">
              <div className="order-info">
                <p>
                  <strong>Room:</strong> {order.room}
                </p>
                <p>
                  <strong>Time:</strong> {order.time}
                </p>
              </div>
              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-actions">
              <button className="order-btn">View Details</button>
              {order.status === "new" && <button className="order-btn primary">Start Preparing</button>}
              {order.status === "preparing" && <button className="order-btn primary">Mark In Transit</button>}
              {order.status === "in-transit" && <button className="order-btn primary">Mark Delivered</button>}
            </div>
          </div>
        ))}
      </div>

      <button className="new-order-btn">+ New Order</button>
    </div>
  )
}
