// A mock function to mimic making an async request for data
export async function fetchEntities() {
  const response = await fetch("http://localhost:3000/entity");
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export async function fetchUpdateEntity(entity) {
  const response = await fetch("http://localhost:3000/entity", {
    method: "PUT",
    body: JSON.stringify(entity),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw response;
}
