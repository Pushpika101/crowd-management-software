const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Temporary event data
const events = [
  { id: "E1", name: "Robotics Expo", location: "Hall A" },
  { id: "E2", name: "AI Workshop", location: "Room 12" }
];

// Route 1: List all events
app.get("/events", (req, res) => {
  res.json(events);
});

// Route 2: Create a dummy share link
app.post("/share/:eventId", (req, res) => {
  const { eventId } = req.params;
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  // Fake share link for now
  const shareLink = `http://localhost:${PORT}/share/${eventId}`;
  res.json({ message: "Share link created!", shareLink });
});

// Route 3: Use the share link
app.get("/share/:eventId", (req, res) => {
  const { eventId } = req.params;
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return res.status(404).json({ error: "Invalid link" });
  }

  res.json({ event });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});