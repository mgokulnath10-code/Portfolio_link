export async function sendEmail(formData) {
  const response = await fetch(
    "https://formsubmit.co/ajax/m.gokulnath10@gmail.com",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  return response.json();
}