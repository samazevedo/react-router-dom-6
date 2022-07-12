function Dashboard({ user }) {
    return (
        <section className='dashboard-section'>
            <h1>Dashboard</h1>
            <p>Welcome, {user?.name}</p>
        </section>
    )
}

export default Dashboard
