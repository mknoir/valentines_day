export const sendResponse = async (answer) => {
    try {
      const response = await fetch("https://example.com/valentine-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer }),
      });
      return response.json();
    } catch (error) {
      console.error("Error sending response:", error);
    }
  };
  