test(":getAll - pegar os meus users", async ()=>{
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
});

test(":getByID", async() => {
    const res = await fetch ("http://localhost:3000/users/2")
    const data = await res.json();
    expect(data).toHaveProperty("id")
});