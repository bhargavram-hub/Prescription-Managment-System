function NotificationsPage() {

  const notifications =
    JSON.parse(localStorage.getItem("notifications")) || [];

  return (
    <div className="container py-5">

      <div
        className="card border-0 shadow-lg p-5"
        style={{
          borderRadius: "25px"
        }}
      >

        <h1 className="fw-bold mb-5 text-center">
          Notifications
        </h1>

        {
          notifications.length === 0 ? (

            <h5 className="text-center text-muted">
              No Notifications
            </h5>

          ) : (

            notifications.map((n, index) => (

              <div
                key={index}
                className="card p-4 mb-3 border-0 shadow-sm"
                style={{
                  borderRadius: "18px"
                }}
              >

                <h5>
                  🔔 {n.message}
                </h5>

                <small className="text-muted">
                  {n.time}
                </small>

              </div>
            ))
          )
        }

      </div>

    </div>
  );
}

export default NotificationsPage;